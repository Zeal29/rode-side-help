export function IsEmail(value: string) {
  value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}
