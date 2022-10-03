const gridPlayer = document.children[0].children[1].children[1].children[0]
const gridEnemy = document.children[0].children[1].children[1].children[1]

const setPlayerBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    gridPlayer.append(cell)
    if (i <= 9) {
      cell.setAttribute('id', `A${i}`)
    } else if (i >= 10 && i <= 19) {
      for (let b = 1; b <= 10; b++) {
        cell.setAttribute('id', 'B' + (i - b))
      }
    } else if (i >= 20 && i <= 29) {
      cell.setAttribute('id', 'C' + (i - 20))
    } else if (i >= 30 && i <= 39) {
      cell.setAttribute('id', 'D' + (i - 30))
    } else if (i >= 40 && i <= 49) {
      cell.setAttribute('id', 'E' + (i - 40))
    } else if (i >= 50 && i <= 59) {
      cell.setAttribute('id', 'F' + (i - 50))
    } else if (i >= 60 && i <= 69) {
      cell.setAttribute('id', 'G' + (i - 60))
    } else if (i >= 70 && i <= 79) {
      cell.setAttribute('id', 'H' + (i - 70))
    } else if (i >= 80 && i <= 89) {
      cell.setAttribute('id', 'I' + (i - 80))
    } else if (i >= 90 && i <= 99) {
      cell.setAttribute('id', 'J' + (i - 90))
    }
  }
}
const setEnemyBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cellEnemy = document.createElement('div')
    cellEnemy.classList.add('cellEnemy')
    cellEnemy.setAttribute('id', `cellEnemy${i}`)
    gridEnemy.append(cellEnemy)
  }
}
setPlayerBoard()
setEnemyBoard()
