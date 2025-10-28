class PriceDisplayFraction(object):
    def __init__(self, denominator=16):
        self.den = denominator

    def to_display(self, cents):
        units = int(round(cents * self.den))
        whole_cents, num = divmod(units, self.den)
        dollars, cents_part = divmod(whole_cents, 100)
        return f"{dollars}.{cents_part:02d}/{num}"

    def to_internal(self, display):
        s = display.replace(' ', '')
        main, num = (s.split('/', 1) + ['0'])[:2] if '/' in s else (s, '0')
        if '.' in main:
            d, c = main.split('.', 1)
            c = (c + '00')[:2]
        else:
            d, c = main, '00'
        return int(d) * 100 + int(c) + int(num) / self.den