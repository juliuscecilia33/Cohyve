export function getRandomColor() {
  const bgColors = [
    "#D5AAAA",
    "#D5C9AA",
    "#C2D5AA",
    "#AAD5AC",
    "#AAD5C6",
    "#AAD0D5",
    "#AAB3D5",
    "#BDAAD5",
    "#D5AAD3",
    "#D5AAD3",
    "#B8D5AA",
    "#D5D1AA",
    "#AAD5C8",
    "#AAB6D5",
    "#BDAAD5",
    "#D5AAC4",
    "#CCD5AA",
    "#D5BFAA",
  ];

  const random = Math.floor(Math.random() * bgColors.length);

  return bgColors[random];
}
