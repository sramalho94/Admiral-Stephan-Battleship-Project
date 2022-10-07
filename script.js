const gridPlayer = document.children[0].children[1].children[1].children[0]
const gridEnemy = document.children[0].children[1].children[1].children[1]
const ships = document.querySelectorAll('.ship')
const placeShipButton = document.getElementById('placeShips')
const boatInstructions = document.getElementsByClassName('boatInstructions')

let stage = 'setup' // play, over
let shipCount = 5
let playerHealth = 5
let enemyHealth = 5

// creating cells with a nested for loop, i sets rows, j sets columns
// implementation was found thanks to http://learningprocessing.com/exercises/chp06/exercise-06-08-grid-nested-loop
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
        if (stage === 'setup') {
          // post mvp-todo -> create ships
          if (shipCount > 0) {
            cell.classList.add('class', 'ship')
            shipCount -= 1
          }
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

      // event listener
      cell.addEventListener('click', () => {
        if (stage === 'play') {
          boatInstructions.hidden = true
          // check if area is a ship or not
          if (cell.classList.contains('enemyShip')) {
            // if ship
            cell.classList.add('class', 'shot')
            cell.classList.remove('ship')
            enemyHealth -= 1
            if (enemyHealth == 0) {
              stage = 'over'
              alert('Admiral, the fleet reports victory! Refresh to replay')
            }
            console.log('banana', enemyHealth)
            // if not ship
          } else {
            cell.classList.add('class', 'miss')
          }

          // computer makes a turn
          computerTurn()
          if (playerHealth == 0) {
            stage = 'over'
            alert('Admiral, our fleet is destoryed! Refresh page to replay')
          }
        }
      })
      gridEnemy.append(cell)
    }
  }
  // setup enemy board
  let enemyShips = []
  // for loop set to 5 to create 5 ships
  for (let i = 0; i < 5; i++) {
    let y
    let didNotAddShip = true
    while (didNotAddShip) {
      y = Math.floor(Math.random() * 100)
      if (!enemyShips.includes(y)) {
        const enemyShipCells = document.getElementsByClassName('enemy')
        const enemyShipCell = enemyShipCells[y]
        enemyShipCell.classList.add('class', 'enemyShip')
        enemyShips.push(y)
        console.log('apple', enemyShips)
        didNotAddShip = !didNotAddShip
      }
    }
  }
  // pick Ships for Enemy
}
let computerTurns = []
const computerTurn = () => {
  let x
  x = Math.floor(Math.random() * 100)
  console.log(x)
  if (!computerTurns.includes(x)) {
    const playerCell = document.getElementsByClassName('player')[x]
    computerTurns.push(x)
    console.log(computerTurns)
    if (playerCell.classList.contains('ship')) {
      playerCell.classList.add('class', 'shot')
      playerCell.classList.remove('ship')
      playerHealth -= 1
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
