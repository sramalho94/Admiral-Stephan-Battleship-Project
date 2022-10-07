# Admiral-Stephan-Battleship-Project

## Date 9/30 - 10/7

### By: Stephan D Ramalho

---

# Links

##Trello Link
[My Project Board](https://trello.com/invite/b/vswxJVqA/822b952ad7178d32ae04d5455cffe6fb/battleship-project)

## GitHub Repository

[Admiral Stephan Battleships Github](https://github.com/sramalho94/Admiral-Stephan-Battleship-Project)

## Surge

[Surge link](admiralstephanbattleship.surge.sh)

---

## Battship Game structure

---

Battleship can be broken down into the following Phases:

- 1)Setup: the players place their ships on the grid
  - During this phase the AI randomly generates 5 ships on its grid
  - the Player clicks on 5 cells in their grid to place their ships
- 2)Firing: the player and AI take turns firing at each other
  - the player shoots first, triggering the event listener, then the AI shoots
    a randomly selected cell that hasn't been picked before
- 3)End game: either the player or enemy have had their health decremented to 0 due to loss of ships

---

## Battleship Game Components

---

Battleship includes the following components:

- 1. Game board: where the game is played
  - the board is comprised of two 10 x 10 grids
  - each player will have a grid where they will place their ships and record hits or misses
  - both the player and AI will have their hits and misses recorded so that the grid displays black for misses and red for hits
- 2. The ships: the tokens that the players will try to destory
     - each ship will take up one cell
     - future goals will be to allow ships to have different lengths

---

## Development Methodology

---

I will follow this roadmap in an attempt to make the development process and simple and logical as possible:

- 1. Layout the grid for the game
- 2. create the various ships
- 3. create a method that allows for the placement of ships on he grid
- 4. create a method that allows players to fire

#### Originally I toyed with the idea of a two player game. For simplicity's sake I scrapped that idea and created a single player version where the player fights against an AI that randomly places their ships and randomly shoots at cells

---

# Challenges during the development process

---

1. The random generation for AI ship placement and shooting presented some challenges. The primary being how to insure that if a randomly generated number was previously used, that the AI would generate another number.
2. Setting up an efficient method to set the grid cells for the player and enemy was challenging at first. The use of nested for loops allows for the designation of classes based on row and column positions.

- I think the first page will present the player with an option to player singleplayer/multiplayer or classic/salvo (depending on which I decide to do)

---

# Technologies Used

---

The languages I used were HTML, CSS, and JavaScript

- ## while I solely employed vanilla Javascript, I did employ some techniques not mentioned in class
  - Nested For loops
    - employed on L14-15 and L37-38. The inspiration for this came from a prompt on http://learningprocessing.com/exercises/chp06/exercise-06-08-grid-nested-loop setting i and j to <10 allowed for a creation of a 10 x 10 grid that also took into account row and column position. While this was not employed in the current game iteration, it will be helpful when ships are longer than 1 cell.
  - Using randomly generated numbers in index notation to randomly select elements in a node list. Inspiration for this was taken from a user comment on https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    - employed on L83-84 and L100. Alternate ways of selecting a random element in a nodelist. L100 is a more efficient way of doing this, as it requires fewer steps. L83-84 is essentially a fully written out version of what is happening on L100.
  - Different ways of initializing and breaking out of While loops
    - The while loop initiated on on L80 is dependant on the boolean declared on L79. Setting the boolean to false on L87 breaks out of the loop.The inspiration for this came from a question posted on https://www.codecademy.com/forum_questions/526ed0ebf10c60043500057b
    - An alternate technique was employed on L96. Instead of setting a boolean in the line before it, the while condition is simply true. To break out of the loop, L110 is used. It is placed after the if statements to account for the possibilites laid out in the If statements. The inspiration for the methodology came from a question on stackoverlow on
      https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php

---

# Acknowledgments

---

## First, I would like to credit my close friend and mentor,Ziquan Miao. His assistance in brainstorming ways to structure the game flow fundamentally shifted the course of the project, and allowed me to see a way forward when I was stuck in a hole because of poor planning.

## Secondly (but equal in importance to the first), I would like to thank Austin and John for their tireless assistance. I'd like to apologize for the amount of time I took on Tuesday to fix my eventListener problem. While I ended up scrapping that original methodology, the troubleshooting process did teach me a few things about eventListeners. Also, seeing how both John and Austin struggled to get my original idea to work made me take a step back and try to find a more effective way to structure the game.
