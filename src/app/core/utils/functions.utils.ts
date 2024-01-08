export function formatDate(date: Date) {
  return `${new Date(date).getDate().toString().padStart(2, '0')}/${(
    new Date(date).getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}/${new Date(date).getFullYear()}`;
}
