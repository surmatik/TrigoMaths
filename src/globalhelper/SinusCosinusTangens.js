/**
 * @param {number} seiteA
 * @param {number} seiteB
 * @param {number} seiteC
 */
export function calculateSinusTangensCosinus(seiteA, seiteB, seiteC) {
  let temp = seiteC;
  if (seiteA > seiteC) {
    seiteC = seiteA;
    seiteA = temp;
  }
  if (seiteB > seiteC) {
    seiteC = seiteB;
    seiteB = temp
  }
  const sinusAlpha = Math.sin(seiteA / seiteC);
  const sinusBeta = Math.sin(seiteB / seiteC);

  const tangensAlpha = Math.tan(seiteA / seiteB);
  const tangensBeta = Math.tan(seiteB / seiteA);

  const cosineAlpha = Math.cos(seiteB / seiteC);
  const cosineBeta = Math.cos(seiteA / seiteC);
  return {
    sinusAlpha,
    sinusBeta,
    cosineAlpha,
    cosineBeta,
    tangensBeta,
    tangensAlpha,
  };
}
