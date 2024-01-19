export default function randomInt(min: number, max: number): number;
export default function randomInt(max: number): number;
export default function randomInt(): number;
export default function randomInt(...args: number[]): number {
  let min = 0;
  let max = 100;

  if (args.length === 1) {
    [max] = args;
  }

  if (args.length > 1) {
    [min, max] = args;
  }

  return Math.floor(Math.random() * (max - min) - min);
}
