class SelfClosing:
    def __init__(self, jar):
        self.jar = jar

    def __enter__(self):
        self.jar.open_jar()
        return self.jar

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.jar.close_jar()