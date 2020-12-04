This is a project built using [React](https://reactjs.org/) to implement [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

It is hosted on Netlify and can be found [here](https://flamboyant-knuth-2f9b68.netlify.app/)

The grid of cells is composed of arrays of one pixel images with enough padding to make a square that will fill the space of the grid.

Each square in the grid represents the state of a cell object. Each cell has a relationship to it's neighbors: top left, top, top right, and so on. 

A user can create a grid of any size they choose but it defaults to 25 by 25.

Depending on the way a cell perishes it will have a different color. Quite beautiful patterns can arrise because of this.

The speed of the simulation can be changed from once a second to five times a second.

The styling of this project is quite simple. I intend to put some work into making it more lovely at a later date.

