import {
  getSeiteCWithSineLaw,
  getSeiteBWithSineLaw,
  getAngleBetaWithArcsine,
  getRemainingAngle,
  getSeiteAWithSineLaw,
  radsToDegrees,
  degreesToRadians,
} from "../globalhelper/globalhelper.mjs";

/**
 * @param {number} seiteA
 * @param {number} seiteB
 * @param {number} seiteC
 */
export function SSS(seiteA, seiteB, seiteC) {
  const angleAlpha = radsToDegrees(
    Math.acos(
      (Math.pow(seiteB, 2) + Math.pow(seiteC, 2) - Math.pow(seiteA, 2)) /
        (2 * seiteB * seiteC)
    )
  );
  const angleBeta = radsToDegrees(
    Math.acos(
      (Math.pow(seiteA, 2) + Math.pow(seiteC, 2) - Math.pow(seiteB, 2)) /
        (2 * seiteA * seiteC)
    )
  );
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  return { angleAlpha, angleBeta, angleGamma };
}

/**
 * @param {number} seiteB
 * @param {number} angleAlpha
 * @param {number} seiteA
 */
export function SSW(seiteA, seiteB, angleAlpha) {
  // Gegeben Seite a, Seite b und Winkel Alpha
  const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB, seiteA);
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(seiteA, angleAlpha, angleGamma);
  return { angleBeta, angleGamma, seiteC };
}

/**
 * @param {number} seiteA
 * @param {number} seiteB
 * @param {number} angleBeta
 */
export function SSW2(seiteA, seiteB, angleBeta) {
  // Gegeben Seite a, Seite b und Winkel Beta
  const angleAlpha = radsToDegrees(
    Math.asin((Math.sin(degreesToRadians(angleBeta)) / seiteB) * seiteA)
  );
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteC = 
    Math.sqrt(
      Math.pow(seiteA, 2) +
        Math.pow(seiteB, 2) -
        2 * seiteA * seiteB * Math.cos(degreesToRadians(angleGamma))
    )
  ;
  return { angleAlpha, angleGamma, seiteC };
}

/**
 * @param {number} seiteA
 * @param {number} seiteC
 * @param {number} angleAlpha
 */
export function SSW3(seiteA, seiteC, angleAlpha) {
  // Gegeben Seite a, Seite c, Winkel Alpha
  const angleGamma = radsToDegrees(
    Math.asin((Math.sin(degreesToRadians(angleAlpha)) / seiteA) * seiteC)
  );
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(seiteA, angleAlpha, angleBeta);
  return { angleGamma, angleBeta, seiteB };
}

/**
 * @param {number} seiteB
 * @param {number} seiteC
 * @param {number} angleBeta
 */
export function SSW4(seiteB, seiteC, angleBeta) {
  // Gegeben Seite B, Seite C, Winkel Beta
  const angleGamma = radsToDegrees(
    Math.asin((Math.sin(degreesToRadians(angleBeta)) / seiteB) * seiteC)
  );
  const angleAlpha = getRemainingAngle(angleBeta, angleGamma);
  const seiteA = getSeiteAWithSineLaw(seiteC, angleGamma, angleAlpha);
  return { angleGamma, angleAlpha, seiteA };
}

/**
 * @param {number} seiteB
 * @param {number} seiteC
 * @param {number} angleGamma
 */
export function SSW5(seiteB, seiteC, angleGamma) {
  const angleBeta = radsToDegrees(
    Math.asin((Math.sin(degreesToRadians(angleGamma)) / seiteC) * seiteB)
  );
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  return { angleBeta, angleAlpha, seiteA };
}

/**
 * @param {number} seiteA
 * @param {number} seiteB
 * @param {number} angleGamma
 */
export function SWS(seiteA, seiteB, angleGamma) {
  // Gegeben Seite a, Seite b und Winkel Gamma
  const seiteC = Math.sqrt(
    Math.pow(seiteA, 2) +
      Math.pow(seiteB, 2) -
      2 * seiteA * seiteB * Math.cos(degreesToRadians(angleGamma))
  );
  const angleAlpha = radsToDegrees(
    Math.asin((Math.sin(degreesToRadians(angleGamma)) / seiteC) * seiteA)
  );
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  return { angleAlpha, angleBeta, seiteC };
}

/**
 * @param {number} seiteA
 * @param {number} seiteC
 * @param {number} angleBeta
 */
export function SWS2(seiteA, seiteC, angleBeta) {
  // Gegeben Seite a, Seite c, Winkel Beta
  const seiteB = Math.sqrt(
    Math.pow(seiteA, 2) +
      Math.pow(seiteC, 2) -
      2 * seiteA * seiteC * Math.cos(degreesToRadians(angleBeta))
  );
  const angleAlpha = radsToDegrees(
    Math.acos(
      (Math.pow(seiteA, 2) - Math.pow(seiteB, 2) - Math.pow(seiteC, 2)) /
        (-2 * seiteB * seiteC)
    )
  );
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  return { seiteB, angleAlpha, angleGamma };
}



/**
 * @param {number} seiteB
 * @param {number} seiteC
 * @param {number} angleAlpha
 */
export function SWS3(seiteB, seiteC, angleAlpha) {
  // Gegeben Seite B, Seite C, angleAlpha
  const seiteA = Math.sqrt(
    Math.pow(seiteB, 2) +
      Math.pow(seiteC, 2) -
      2 * seiteB * seiteC * Math.cos(degreesToRadians(angleAlpha))
  );
  const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB, seiteA);
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  return { seiteA, angleBeta, angleGamma };
}


/**
 * @param {number} seiteA
 * @param {number} angleAlpha
 * @param {number} angleGamma
 */
export function WWS(seiteA, angleAlpha, angleGamma) {
  // Gegeben Seite a, Winkel Alpha, Winkel Gamma
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(seiteA, angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(seiteA, angleAlpha, angleGamma);
  return { angleBeta, seiteB, seiteC };
}


/**
 * @param {number} seiteA
 * @param {number} angleAlpha
 * @param {number} angleBeta
 */
export function WWS2(seiteA, angleAlpha, angleBeta) {
  // Gegeben Seite a, Winkel Alpha, Winkel Beta (https://www.matheretter.de/wiki/dreieck-berechnen-awawb)
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteB = getSeiteBWithSineLaw(seiteA, angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(seiteA, angleAlpha, angleGamma);
  return { seiteB, angleGamma, seiteC };
}



/**
 * @param {number} seiteB
 * @param {number} angleAlpha
 * @param {number} angleBeta
 */
export function WWS3(seiteB, angleAlpha, angleBeta) {
  // Gegeben Seite b, Winkel Alpha, Winkel Beta
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC = getSeiteCWithSineLaw(seiteB, angleBeta, angleGamma);
  return { seiteA, angleGamma, seiteC };
}


/**
 * @param {number} seiteB
 * @param {number} angleBeta
 * @param {number} angleGamma
 */
export function WWS4(seiteB, angleBeta, angleGamma) {
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC =
    seiteB *
    Math.sin(degreesToRadians(angleGamma)) *
    Math.sin(degreesToRadians(angleBeta));
  return { angleAlpha, seiteA, seiteC };
}

/**
 * @param {number} seiteC
 * @param {number} angleAlpha
 * @param {number} angleBeta
 */
export function WWS5(seiteC, angleAlpha, angleBeta) {
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteC, angleBeta, angleAlpha);
  const seiteB = getSeiteBWithSineLaw(seiteC, angleAlpha, angleBeta);
  return { angleGamma, seiteA, seiteB };
}


/**
 * @param {number} angleAlpha
 * @param {number} angleGamma
 * @param {number} seiteC
 */
export function WWS6(seiteC, angleAlpha, angleGamma) {
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(seiteC, angleGamma, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  return { angleBeta, seiteB, seiteA };
}


/**
 * @param {number} angleBeta
 * @param {number} angleGamma
 * @param {number} seiteC
 */
export function WWS7(seiteC, angleBeta, angleGamma) {
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteB = getSeiteBWithSineLaw(seiteC, angleGamma, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteC, angleGamma, angleAlpha);
  return { angleAlpha, seiteB, seiteA };
}


/**
 * @param {number} angleBeta
 * @param {number} angleGamma
 * @param {number} seiteA
 */
export function WSW5(seiteA, angleBeta, angleGamma) {
  // Gegeben Seitea, Winkel Beta, Winkel Gamma
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteB = getSeiteBWithSineLaw(seiteA, angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(seiteA, angleAlpha, angleGamma);
  return { angleAlpha, seiteB, seiteC };
}



/**
 * @param {number} seiteB
 * @param {number} angleAlpha
 * @param {number} angleGamma
 */
export function WSW6(seiteB, angleAlpha, angleGamma) {
  // Gegeben SeiteB, Winkel Alpha, Winkel Gamma
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC = getSeiteCWithSineLaw(seiteB, angleBeta, angleGamma);
  return { angleBeta, seiteA, seiteC };
}
