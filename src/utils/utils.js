export function parseIfNumber(value) {
    if (typeof value === 'string' && !isNaN(value)) {
        return parseInt(value, 10);
    }
    return value;
}