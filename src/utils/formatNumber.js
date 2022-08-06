
export function formatNumber(number) {
    return new Intl.NumberFormat('ES-AR').format(number)
}