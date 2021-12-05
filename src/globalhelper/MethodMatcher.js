const sideLengthAnglesState = {
    SSS: 'SSS',
    SSW: 'SSW',
    SSW2: 'SSW2',
    SSW3: "SSW3",
    SSW4: "SSW4",
    SSW5: "SSW5",
    SWS: "SWS",
    SWS2: "SWS2",
    SWS3: "SWS3",
    WWS: "WWS",
    WWS2: "WWS2",
    WWS3: "WWS3",
    WWS4: "WWS4",
    WWS5: "WWS5",
    WWS6: "WWS6",
    WWS7: "WWS7",
    WSW5: "WSW5",
    WSW6: "WSW6",
    INITIALSTATE: "INITIALIZED",
    INVALIDSTATE: "INVALID"
}


/**
 * @param {number} seiteA
 * @param {number} seiteB
 * @param {number} seiteC
 * @param {number} alpha
 * @param {number} beta
 * @param {number} gamma
 */
export function findSideLengthAnglesState(seiteA, seiteB, seiteC, alpha, beta, gamma) {
    if (seiteA !== 0 && seiteB !== 0 && seiteC !== 0 && beta === 0 && gamma === 0 && alpha === 0) {
        return sideLengthAnglesState.SSS
    }
    if (seiteA !== 0 && seiteB !== 0 && alpha !== 0 && seiteC === 0 && beta === 0 && gamma === 0) {
        return sideLengthAnglesState.SSW
    }
    if (seiteA !== 0 && seiteB !== 0 && beta !== 0 && alpha === 0 && seiteC === 0 && gamma === 0) {
        return sideLengthAnglesState.SSW2
    }
    if (seiteA !== 0 && seiteC !== 0 && alpha !== 0 && gamma === 0 && beta === 0 && seiteB === 0) {
        return sideLengthAnglesState.SSW3
    }
    if (seiteB !== 0 && seiteC !== 0 && beta !== 0 && gamma === 0 && alpha === 0 && seiteA === 0) {
        return sideLengthAnglesState.SSW4
    }
    if (seiteB !== 0 && seiteC !== 0 && gamma !== 0 && beta === 0 && alpha === 0 && seiteA === 0) {
        return sideLengthAnglesState.SSW5
    }
    if (seiteA !== 0 && seiteB !== 0 && gamma !== 0 && beta === 0 && alpha === 0 && seiteC === 0) {
        return sideLengthAnglesState.SWS
    }
    if (seiteA !== 0 && seiteC !== 0 && beta !== 0 && seiteB === 0 && alpha === 0 && gamma === 0) {
        return sideLengthAnglesState.SWS2
    }
    if (seiteB !== 0 && seiteC !== 0 && alpha !== 0 && seiteA === 0 && beta === 0 && gamma === 0) {
        return sideLengthAnglesState.SWS3
    }
    if (seiteA !== 0 && alpha !== 0 && gamma !== 0 && beta === 0 && seiteB === 0 && seiteC === 0) {
        return sideLengthAnglesState.WWS
    }
    if (seiteA !== 0 && alpha !== 0 && beta !== 0 && seiteB === 0 && gamma === 0 && seiteC === 0) {
        return sideLengthAnglesState.WWS2
    }
    if (seiteB !== 0 && alpha !== 0 && beta !== 0 && seiteC === 0 && seiteA === 0 && gamma === 0) {
        return sideLengthAnglesState.WWS3
    }
    if (seiteB !== 0 && beta !== 0 && gamma !== 0 && alpha === 0 && seiteC === 0 && seiteA === 0) {
        return sideLengthAnglesState.WWS4
    }
    if (seiteC !== 0 && alpha !== 0 && beta !== 0 && gamma === 0 && seiteA === 0 && seiteB === 0) {
        return sideLengthAnglesState.WWS5
    }
    if (seiteC !== 0 && alpha !== 0 && gamma !== 0 && beta === 0 && seiteB === 0 && seiteA === 0) {
        return sideLengthAnglesState.WWS6
    }
    if (seiteC !== 0 && beta !== 0 && gamma !== 0 && alpha === 0 && seiteB === 0 && seiteA === 0) {
        return sideLengthAnglesState.WWS7
    }
    if (seiteA !== 0 && beta !== 0 && gamma !== 0 && alpha === 0 && seiteB === 0 && seiteC === 0) {
        return sideLengthAnglesState.WSW5
    }
    if (seiteB !== 0 && alpha !== 0 && gamma !== 0 && beta === 0 && seiteA === 0 && seiteC === 0) {
        return sideLengthAnglesState.WSW6
    } else if (seiteC > (seiteA + seiteB)) {
        return sideLengthAnglesState.INVALIDSTATE
    } else {
        return sideLengthAnglesState.INVALIDSTATE
    }
}

export default sideLengthAnglesState



