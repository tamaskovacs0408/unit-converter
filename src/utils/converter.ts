export function unitConverter(
  value: number,
  from: string,
  to: string,
  unitFactor: Record<string, number>
): number {
  return (value * unitFactor[from]) / unitFactor[to];
}
 // minus: 0.0000001, plus: 1000000000000000000000
export function toPowerOf10(number: number) {
  const power = Math.floor(Math.log10(Math.abs(number)));
  const adjustedNumber = number / Math.pow(10, power);
  return Number(adjustedNumber.toFixed(0)) * Math.pow(10, power);
}