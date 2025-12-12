from datetime import datetime
import re

class ValidationError(Exception):
    pass

class Field:
    def __init__(self, default=None, blank=False):
        self.default = default
        self.blank = blank
    
    def validate(self, value):
        if value is None and not self.blank:
            raise ValidationError

class CharField(Field):
    def __init__(self, min_length=0, max_length=None, **kwargs):
        super().__init__(**kwargs)
        self.min_length = min_length
        self.max_length = max_length
    
    def validate(self, value):
        super().validate(value)
        if value is None:
            return
        if not isinstance(value, str):
            raise ValidationError
        if self.min_length is not None and len(value) < self.min_length:
            raise ValidationError
        if self.max_length is not None and self.max_length < len(value):
            raise ValidationError

class IntegerField(Field):
    def __init__(self, min_value=None, max_value=None, **kwargs):
        super().__init__(**kwargs)
        self.min_value = min_value
        self.max_value = max_value
    
    def validate(self, value):
        super().validate(value)
        if value is None:
            return
        if isinstance(value, bool):
            raise ValidationError
        if not isinstance(value, int):
            raise ValidationError
        if self.min_value is not None and value < self.min_value:
            raise ValidationError
        if self.max_value is not None and self.max_value < value:
            raise ValidationError

class BooleanField(Field):
    def validate(self, value):
        super().validate(value)
        if value is None:
            return
        if not isinstance(value, bool):
            raise ValidationError

class DateTimeField(Field):
    def __init__(self, auto_now=False, **kwargs):
        super().__init__(**kwargs)
        self.auto_now = auto_now
        self._default = kwargs.get('default')
    
    def __getattribute__(self, name):
        if name == 'default':
            _default = super().__getattribute__('_default')
            auto_now = super().__getattribute__('auto_now')
            return datetime.now() if _default is None and auto_now else _default
        return super().__getattribute__(name)
    
    def validate(self, value):
        super().validate(value)
        if value is None:
            return
        if not isinstance(value, datetime):
            raise ValidationError

class EmailField(Field):
    def __init__(self, min_length=0, max_length=None, **kwargs):
        super().__init__(**kwargs)
        self.min_length = min_length
        self.max_length = max_length
    
    def validate(self, value):
        super().validate(value)
        if value is None:
            return
        if not isinstance(value, str):
            raise ValidationError
        if self.min_length is not None and len(value) < self.min_length:
            raise ValidationError
        if self.max_length is not None and self.max_length < len(value):
            raise ValidationError
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise ValidationError

class Model:
    def __init_subclass__(cls):
        for name in list(cls.__dict__):
            if not name.startswith('_'):
                attr = getattr(cls, name)
                if isinstance(attr, Field):
                    delattr(cls, name)
                    setattr(cls, f'_f_{name}', attr)
    
    def __init__(self, **kwargs):
        for name in dir(self.__class__):
            if name.startswith('_f_'):
                field = getattr(self.__class__, name)
                setattr(self, name[3:], field.default)
        for key, value in kwargs.items():
            setattr(self, key, value)
    
    def validate(self):
        for name in dir(self.__class__):
            if name.startswith('_f_') and hasattr(self, name[3:]):
                field = getattr(self.__class__, name)
                field.validate(getattr(self, name[3:]))