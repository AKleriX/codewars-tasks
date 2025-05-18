def show_me(instance):
    class_name = instance.__class__.__name__
    attrs = sorted(vars(instance).keys())
    
    if len(attrs) == 1:
        attrs_str = attrs[0]
    elif len(attrs) == 2:
        attrs_str = f"{attrs[0]} and {attrs[1]}"
    else:
        attrs_str = ", ".join(attrs[:-1]) + f" and {attrs[-1]}"
    
    return f"Hi, I'm one of those {class_name}s! Have a look at my {attrs_str}."