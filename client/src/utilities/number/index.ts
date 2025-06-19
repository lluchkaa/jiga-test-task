export function formatMoney(amount: number) {
  return `$${amount.toFixed(2)}`
}

export function createColorPicker(min: number, max: number) {
  const colors = [
    "#008236a0", // green-700
    "#7bf1a8a0", // green-300
    "#fdc700a0", // yellow-400
    "#ffa2a2a0", // red-300
    "#c10007a0", // red-700
  ] as const

  return (value: number) => {
    const step = (max - min) / colors.length
    const index = Math.min(Math.floor((value - min) / step), colors.length - 1)

    return colors[index] ?? colors[2]
  }
}
