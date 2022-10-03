const gridPlayer = document.children[0].children[1].children[1].children[0]
const gridEnemy = document.getElementsByClassName('gridEnemy')

const setPlayerBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    gridPlayer.append(cell)
  }
}
