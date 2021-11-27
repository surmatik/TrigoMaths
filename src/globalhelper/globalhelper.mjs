// Getters for things that are calculated the same way

/**
 * @param {number} angle1
 * @param {number} angle2
 */
export function getRemainingAngle(angle1, angle2) {
    return 180 - angle1 - angle2
}

/**
 * @param {number} angleGamma
 * @param {number} seiteB
 * @param {number} angleBeta
 */
export function getSeiteCWithSineLaw(seiteB, angleBeta, angleGamma) {
    return (seiteB / Math.sin(degreesToRadians(angleBeta))) * Math.sin(degreesToRadians(angleGamma))
}

/**
 * @param {number} angleAlpha
 * @param {number} seiteB
 * @param {number} seiteA
 */
export function getAngleBetaWithArcsine(angleAlpha, seiteB , seiteA) {
    return radsToDegrees(Math.asin((Math.sin(degreesToRadians(angleAlpha))  / (seiteA) * seiteB)))
}

/**
 * @param {number} angleAlpha
 * @param {number} angleBeta
 * @param {number} seiteA
 */
export function getSeiteBWithSineLaw(seiteA, angleAlpha, angleBeta) {
    return (seiteA / Math.sin(degreesToRadians(angleAlpha))) * Math.sin(degreesToRadians(angleBeta))
}

/**
 * @param {number} angleAlpha
 * @param {number} seiteC
 * @param {number} angleGamma
 */
export function getSeiteAWithSineLaw(seiteC, angleGamma, angleAlpha) {
    return (seiteC / Math.sin(degreesToRadians(angleGamma))) * Math.sin(degreesToRadians(angleAlpha))
}

/**
 * @param {number} radiant
 */
export function radsToDegrees(radiant) {
    return (180 / Math.PI) * radiant
}

/**
 * @param {number} degree
 */
export function degreesToRadians(degree){
    return (Math.PI / 180) * degree
}