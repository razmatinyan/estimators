export default () => {
  const colors = [
    '#5FF000',
    '#FCC006',
    '#42B4FD',
    '#EC008B',
    '#FC5721',
    '#6539B5'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
