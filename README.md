# Admiral-Stephan-Battleship-Project

## Date 9/30 - 10/7

### By: Stephan D Ramalho

---

## Battship Game structure

---

Battleship can be broken down into the following Phases:

- 1)Setup: the players place their ships on the grid
  - ships cannot overlap
  - ships cannot extend beyond the 10 x 10 game grid
  - each player will get 5 ships of varying length
- 2)Firing: the players take turns firing at each other
  - a shot can result in either a hit or a miss
  - when the last remaining cell of a ship is shot that ship is sunk
- 3)End game: one of the players has no remaining ships that are un-sunk

---

## Battleship Game Components

---

Battleship includes the following components:

- 1. Game board: where the game is played
  - the board is comprised of a 10 x 10 grid
  - each player will have a grid where they will place their ships and record hits or misses
  - both players will have their hits and misses recorded so that the grid displays white for misses and red for hits
- 2. The ships: the tokens that the players will try to destory
     -Each player will have 5 ships of varying length
  - Destroyer: 2 cells
  - Submarine: 3 cells
  - Cruiser: 3 cells
  - Battleship: 4 cells
  - Carrier: 5 cells
  - **_* Ships can only be placed vertically or horizontally, never diagonally *_**

---

## Development Methodology

---

I will follow this roadmap in an attempt to make the development process and simple and logical as possible:

- 1. Layout the grid for the game
- 2. create the various ships
- 3. create a method that allows for the placement of ships on he grid
- 4. create method(s) that allows players to fire - this can be further broken down into methods that:
     -A) record a shot fired on a given panel
     -B) checks to see if that panel has a part of a ship in it or is empty
     -C) checks to see if all there are any component panels remaining for the ship that was shot - if there are remaining cell components then the shot is a hit - if there are no remaining cell components then the ship is sunk
     D) checks to see if the player has any remaining ships

### I believe I will start developing a single player version first and then see if there is any remaining time for a multiplayer version. Alternatively I'm also considering making my game just single player, but the player will get a choice between classic or salvo battleship

---

Current Challenges to consider during the development process

---

1. Do I want the game to be a classic version of Battleship where each player gets to shoot once per turn or the salvo version where the number of attacks a player has equals the number of ships they have?
2. How do I incorporate 2 HTML pages into the project?

- I think the first page will present the player with an option to player singleplayer/multiplayer or classic/salvo (depending on which I decide to do)
