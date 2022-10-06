const gridPlayer = document.children[0].children[1].children[1].children[0]
// const gridPlayer = document.querySelector.getElementById('gridPlayer')
const gridEnemy = document.children[0].children[1].children[1].children[1]
const ships = document.querySelectorAll('.ship')
const placeShipButton = document.getElementById('placeShips')
const boatInstructions = document.getElementsByClassName('boatInstructions')

let stage = 'setup' // play, over
let shipCount = 5
let playerHealth = 5
let enemyHealth = 5
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
          if (shipCount > 0) {
            cell.classList.add('class', 'ship')
            shipCount -= 1
          }
          //   //create limit for 5 ships
          //   pickedCell.push(cell)
          // }
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
let computerTurns = []
const computerTurn = () => {
  // pick a random number
  // pick a random number that has not been pciked before
  // get the cell
  // check if it is a ship or not
  // if ship -> change class
  //    -> check if game over
  // if not ship -> change class
  let x
  x = Math.floor(Math.random() * 100)
  if (!computerTurns.includes(x)) {
    const playerCell = document.getElementsByClassName('player')[x]
    console.log(playerCell)
    computerTurns += [x]
    console.log(computerTurns)
    if (playerCell.classList.contains('ship')) {
      playerCell.classList.add('class', 'shot')
      playerCell.classList.remove('ship')
    } else {
      playerCell.classList.add('class', 'miss')
    }
  }
}
setPlayerBoard()
setEnemyBoard()

document.getElementById('startBattle').addEventListener('click', () => {
  stage = 'play'
})
