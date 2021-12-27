export default function getValue(obj: Object): string[] | boolean[] {
  const data: string[] | boolean[] = Object.values(obj);

  return data;
}
