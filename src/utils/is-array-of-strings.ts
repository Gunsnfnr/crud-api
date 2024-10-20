export default function isArrayOfStrings(data: string[]): boolean {
  let result = true;
  for (let i = 0; i < data.length; i += 1) {
    if (typeof data[i] !== 'string') {
      result = false;
      return result;
    }
  }
  return result;
}
