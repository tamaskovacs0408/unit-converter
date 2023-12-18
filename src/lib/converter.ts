export default function unitConverter(
  value: number,
  from: string,
  to: string,
  unitFactor: Record<string, number>
): number {
  return (value * unitFactor[from]) / unitFactor[to];
}
