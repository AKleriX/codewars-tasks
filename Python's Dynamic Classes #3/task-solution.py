def create_class(class_name, secrets=None):
    if not class_name: return None
    if secrets is None:
        try: secrets = army_get_secret_from_file()
        except NameError: secrets = {}
    return type(class_name, (), dict(secrets))