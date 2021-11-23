import {
  getSeiteCWithSineLaw,
  getSeiteBWithSineLaw,
  getAngleBetaWithArcsine,
  getRemainingAngle,
  getSeiteAWithSineLaw,
  radsToDegrees,
  degreesToRadians,
} from "../globalhelper/globalhelper.mjs";

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
  return [angleAlpha, angleBeta, angleGamma];
}


export function SSW(seiteA, seiteB, angleAlpha) {
  // Gegeben Seite a, Seite b und Winkel Alpha
  angleAlpha = degreesToRadians(angleAlpha);
  const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteA, seiteB);
  const angleGamma = getRemainingAngle(radsToDegrees(angleAlpha), angleBeta);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, degreesToRadians(angleGamma));
  return {angleBeta, angleGamma, seiteC}
}



export function SSW2(seiteA, seiteB, angleBeta) {
  // Gegeben Seite a, Seite b und Winkel Beta
  angleBeta = degreesToRadians(angleBeta);
  const angleAlpha = radsToDegrees(Math.asin((Math.sin(angleBeta) / seiteB) * seiteA));
  const angleGamma = getRemainingAngle(angleAlpha, radsToDegrees(angleBeta));
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

SSW2(1, 3, 30)



export function SSW3(seiteA, seiteC, angleAlpha) {
  // Gegeben Seite a, Seite c, Winkel Alpha
  const angleGamma = Math.asin((Math.sin(angleAlpha) / seiteA) * seiteC);
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
}



export function SSW4(seiteB, seiteC, angleBeta) {
  // Gegeben Seite B, Seite C, Winkel Beta
  const angleGamma = Math.asin((Math.sin(angleBeta) / seiteB) * seiteC);
  const angleAlpha = getRemainingAngle(angleBeta, angleGamma);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
}

export function SSW5(seiteB, seiteC, angleGamma) {
  angleGamma = degreesToRadians(angleGamma)
  const angleBeta = radsToDegrees(Math.asin((Math.sin(angleGamma) / seiteC) * seiteB));
  const angleAlpha = getRemainingAngle(radsToDegrees(angleGamma), angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, degreesToRadians(angleBeta), degreesToRadians(angleAlpha));
}

SSW5(2, 4, 34)

export function SWS(seiteA, seiteB, angleGamma) {
  // Gegeben Seite a, Seite b und Winkel Gamma
  const seiteC = Math.sqrt(
    Math.pow(seiteA, 2) +
      Math.pow(seiteB, 2) -
      2 * seiteA * seiteB * Math.cos(angleGamma)
  );
  const angleAlpha = Math.asin((Math.sin(angleGamma) / seiteC) * seiteA);
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
}

export function SWS2(seiteA, seiteC, angleBeta) {
  // Gegeben Seite a, Seite c, Winkel Beta
  const seiteB = Math.sqrt(
    Math.pow(seiteA, 2) +
      Math.pow(seiteC, 2) -
      2 * seiteA * seiteC * Math.cos(angleBeta)
  );
  const angleAlpha = Math.acos(
    (Math.pow(seiteA, 2) - Math.pow(seiteB, 2) - Math.pow(seiteC, 2)) /
      (-2 * seiteB * seiteC)
  );
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
}

export function SWS3(seiteB, seiteC, angleAlpha) {
  // Gegeben Seite B, Seite C, angleAlpha
  const seiteA = Math.sqrt(
    Math.pow(seiteB, 2) -
      Math.pow(seiteC, 2) -
      2 * seiteB * seiteC * Math.cos(angleAlpha)
  );
  const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB);
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
}

export function WWS(seiteA, angleAlpha, angleGamma) {
  // Gegeben Seite a, Winkel Alpha, Winkel Gamma
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(angleBeta, angleGamma);
}

export function WWS2(seiteA, angleAlpha, angleBeta) {
  // Gegeben Seite a, Winkel Alpha, Winkel Beta (https://www.matheretter.de/wiki/dreieck-berechnen-awawb)
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

export function WWS3(seiteB, angleAlpha, angleBeta) {
  // Gegeben Seite b, Winkel Alpha, Winkel Beta
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}
export function WWS4(seiteB, angleBeta, angleGamma) {
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}
export function WWS5(seiteC, angleAlpha, angleBeta) {
  const angleGamma = getRemainingAngle(angleAlpha, angleBeta);
  const seiteA = getSeiteCWithSineLaw(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
}

export function WWS6(seiteC, angleAlpha, angleGamma) {
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
}

export function WWS7(seiteC, angleBeta, angleGamma) {
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
}

export function WSW5(seiteA, angleBeta, angleGamma) {
  // Gegeben Seitea, Winkel Beta, Winkel Gamma
  const angleAlpha = getRemainingAngle(angleGamma, angleBeta);
  const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

export function WSW6(seiteB, angleAlpha, angleGamma) {
  // Gegeben SeiteB, Winkel Alpha, Winkel Gamma
  const angleBeta = getRemainingAngle(angleAlpha, angleGamma);
  const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
  const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}
