def round_by_2_decimal_places(n):import decimal as d;return d.Decimal(str(n)).quantize(d.Decimal('1e-2'),d.ROUND_HALF_UP)
