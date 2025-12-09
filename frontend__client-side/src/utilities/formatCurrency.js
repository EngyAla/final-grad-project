export function formatCurrency(number, currency = "EGP") {
    const FORMAT = new Intl.NumberFormat(undefined, {
        currency: currency,
        style: "currency"
    });

    return FORMAT.format(number);
}