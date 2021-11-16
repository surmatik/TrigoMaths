// Getters for things that are calculated the same way

export function getRemainingAngle(angle1, angle2) {
    return 180 - angle1 - angle2
}

export function getSeiteCWithSineLaw(angleAlpha, angleGamma) {
    return (angleAlpha / Math.sin(angleAlpha)) * Math.sin(angleGamma)
}

export function getAngleBetaWithArcsine(angleAlpha, seiteA, seiteB) {
    return radsToDegrees(Math.asin((Math.sin(angleAlpha) / seiteA) * seiteB))
}

export function getSeiteBWithSineLaw(angleAlpha, angleBeta) {
    return (angleAlpha / Math.sin(angleAlpha)) * Math.sin(angleBeta)
}

export function getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha) {
    return (seiteB / Math.sin(angleBeta)) * Math.sin(angleAlpha)
}

export function radsToDegrees(input) {
    return (180 / Math.PI) * input
}

export function degreesToRadians(degree){
    return (Math.PI / 180) * degree
}