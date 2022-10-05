const gridPlayer = document.children[0].children[1].children[1].children[0]
// const gridPlayer = document.querySelector.getElementById('gridPlayer')
const gridEnemy = document.children[0].children[1].children[1].children[1]
const ships = document.querySelectorAll('.ship')
const placeShipButton = document.getElementById('placeShips')
const boatInstructions = document.getElementsByClassName('boatInstructions')

let stage = 'setup' // play, over

const setPlayerBoard = () => {
  pickedCell = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.classList.add('player')
      cell.classList.add(`row${i}`)
      cell.classList.add(`col${j}`)

      cell.addEventListener('click', () => {
        console.log(stage)
        if (stage === 'setup') {
          // todo -> create ships
          // priority - low
          cell.classList.add('class', 'ship')
          //create limit for 5 ships
        }
      })

      gridPlayer.append(cell)
    }
  }
}
const setEnemyBoard = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.classList.add('enemy')
      cell.classList.add(`row${i}`)
      cell.classList.add(`col${j}`)

      cell.addEventListener('click', () => {
        if (stage === 'play') {
          // check that the cell that was clicked hasnt been clicked before

          // check if area is a ship or not
          if (cell.classList.contains('enemyShip')) {
            // if ship
            console.log(cell.classList)
            cell.classList.add('class', 'shot')
            cell.classList.remove('ship')

            // todo: check if game is over

            // if not ship
          } else {
            cell.classList.add('class', 'miss')
          }

          // computer makes a turn
          computerTurn()
        }
      })
      gridEnemy.append(cell)
    }
  }
  console.log(gridEnemy)
  // setup enemy board
  let enemyShips = []
  for (let i = 0; i < 5; i++) {
    let y
    let didNotAddShip = true
    while (didNotAddShip) {
      y = Math.floor(Math.random() * 100)

      if (!enemyShips.includes(y)) {
        // const enemyShipCell = document.getElementsByClassName('enemy')[y]

        const enemyShipCells = document.getElementsByClassName('enemy')
        const enemyShipCell = enemyShipCells[y]
        enemyShipCell.classList.add('class', 'enemyShip')
        enemyShips += [y]
        console.log(enemyShips)
        didNotAddShip = !didNotAddShip
      }
    }
  }
  // pick Ships for Enemy
}

computerTurns = []
const computerTurn = () => {
  // pick a random number
  // pick a random number that has not been pciked before
  // get the cell
  // check if it is a ship or not
  // if ship -> change class
  //    -> check if game over
  // if not ship -> change class
}
// const setEnemyBoard = () => {
//   for (let i = 0; i < 100; i++) {
//     const cellEnemy = document.createElement('div')
//     cellEnemy.classList.add('cellEnemy')
//     gridEnemy.append(cellEnemy)
//     if (i <= 9) {
//       cellEnemy.setAttribute('id', `A${i}` + 'enemy')
//     } else if (i >= 10 && i <= 19) {
//       for (let b = 1; b <= 10; b++) {
//         cellEnemy.setAttribute('id', 'B' + (i - b) + 'enemy')
//       }
//     } else if (i >= 20 && i <= 29) {
//       cellEnemy.setAttribute('id', 'C' + (i - 20) + 'enemy')
//     } else if (i >= 30 && i <= 39) {
//       cellEnemy.setAttribute('id', 'D' + (i - 30) + 'enemy')
//     } else if (i >= 40 && i <= 49) {
//       cellEnemy.setAttribute('id', 'E' + (i - 40) + 'enemy')
//     } else if (i >= 50 && i <= 59) {
//       cellEnemy.setAttribute('id', 'F' + (i - 50) + 'enemy')
//     } else if (i >= 60 && i <= 69) {
//       cellEnemy.setAttribute('id', 'G' + (i - 60) + 'enemy')
//     } else if (i >= 70 && i <= 79) {
//       cellEnemy.setAttribute('id', 'H' + (i - 70) + 'enemy')
//     } else if (i >= 80 && i <= 89) {
//       cellEnemy.setAttribute('id', 'I' + (i - 80) + 'enemy')
//     } else if (i >= 90 && i <= 99) {
//       cellEnemy.setAttribute('id', 'J' + (i - 90) + 'enemy')
//     }
//   }
// }
setPlayerBoard()
setEnemyBoard()

// const cells = document.querySelectorAll('.cell')
// const pickShip = (e) => {
//   e.target.setAttribute('class', 'ship')
//   pickedCell.push(e.target)
//   if (pickedCell.length > 4) {
//     for (let i = 0; i < cells.length; i++) {
//       cells[i].removeEventListener('click', pickShip)
//     }
//   }
// }
// const setPlayerShips = () => {
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', pickShip, { once: true })
//   }
// }
// placeShipButton.addEventListener('click', setPlayerShips)

document.getElementById('startBattle').addEventListener('click', () => {
  stage = 'play'
})
