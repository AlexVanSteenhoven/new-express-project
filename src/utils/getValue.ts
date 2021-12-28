export default function getValue(obj: Object): string | boolean {
  const data: string | boolean = Object.values(obj)[0];

  return data;
}
