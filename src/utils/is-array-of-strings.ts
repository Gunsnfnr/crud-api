export default function isArrayOfStrings(arr: string[]): boolean {
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'string') {
      return false;
    }
  }
  return true;
}
