const gridPlayer = document.children[0].children[1].children[1].children[0]
const gridEnemy = document.children[0].children[1].children[1].children[1]

const setPlayerBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    gridPlayer.append(cell)
  }
}
const setEnemyBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cellEnemy = document.createElement('div')
    cellEnemy.classList.add('cellEnemy')
    gridEnemy.append(cellEnemy)
  }
}
setPlayerBoard()
setEnemyBoard()
