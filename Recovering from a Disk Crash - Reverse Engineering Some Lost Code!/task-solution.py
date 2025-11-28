class InvoiceRow:
    _next_id = 0

    def __init__(self, description, unit_cost, quantity=1, taxable=True):
        self.id = InvoiceRow._next_id
        InvoiceRow._next_id += 1
        self.description = description
        self.unit_cost = unit_cost
        self.quantity = quantity
        self.taxable = taxable

    @property
    def value(self):
        return self.unit_cost * self.quantity


class Invoice:
    def __init__(self, tax_rate=0.20):
        self.tax_rate = tax_rate
        self.rows = []

    def add_row(self, row):
        self.rows.append(row)


def is_debit(row):
    return row.value < 0


def is_credit(row):
    return row.value > 0


def is_taxable(row):
    return row.taxable


def printable_cost(cost):
    return "Gratis" if cost == 0 else f"{cost:,.2f}"


def printable_row(row, tax_rate):
    qty = f"{row.quantity:,}"
    unit = f"{row.unit_cost:,.2f}"
    rate = tax_rate if row.taxable else 0
    sub_total = row.value
    total = sub_total * (1 + rate)
    return (
        row.description,
        qty,
        unit,
        f"{rate:.2f}",
        f"{sub_total:,.2f}",
        f"{total:,.2f}",
    )


class InvoicePrinter(object):
    @staticmethod
    def get_credit_rows(invoice):
        return [row for row in invoice.rows if is_credit(row)]

    @staticmethod
    def get_debit_rows(invoice):
        return [row for row in invoice.rows if is_debit(row)]

    @staticmethod
    def get_free_rows(invoice):
        return [row for row in invoice.rows if not (is_debit(row) or is_credit(row))]

    @staticmethod
    def get_sub_total(invoice):
        return sum([row.value for row in invoice.rows])

    @staticmethod
    def get_tax_total(invoice):
        return sum([row.value for row in invoice.rows if is_taxable(row)]) * invoice.tax_rate

    @staticmethod
    def get_grand_total(invoice):
        return InvoicePrinter.get_sub_total(invoice) + InvoicePrinter.get_tax_total(invoice)

    @staticmethod
    def generate_invoice(invoice):
        lines = 0
        items = 0

        tax_rate = round(invoice.tax_rate, 2)

        for row in InvoicePrinter.get_credit_rows(invoice):
            lines += 1
            items += row.quantity
            yield printable_row(row, tax_rate)

        for row in InvoicePrinter.get_debit_rows(invoice):
            lines += 1
            items += row.quantity
            yield printable_row(row, tax_rate)

        for row in InvoicePrinter.get_free_rows(invoice):
            lines += 1
            items += row.quantity
            yield printable_row(row, tax_rate)

        yield ("Lines", str(lines))
        yield ("Items", str(items))
        yield ("Sub Total", "{:.2f}".format(InvoicePrinter.get_sub_total(invoice)))
        yield ("Tax", "{:.2f}".format(InvoicePrinter.get_tax_total(invoice)))
        yield ("Total", "{:.2f}".format(InvoicePrinter.get_grand_total(invoice)))