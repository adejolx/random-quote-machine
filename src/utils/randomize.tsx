export default function randomize<T>(dataArr: T[], num: number) {
  const randomItem = dataArr[Math.floor(Math.random() * num)];
  return randomItem;
}
