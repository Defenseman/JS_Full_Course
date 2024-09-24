export const PI = Math.PI;

export function getCircumference(radius) {
    return 2 * Math.PI * radius;
}
export function getArea(radius) {
    return Math.PI * radius * radius
}
export function getSurfaceVolume(radius) {
    return 4 * Math.PI * radius * radius
}
export function getVolume(radius) {
    return 4/3 * Math.PI * radius * radius * radius
}