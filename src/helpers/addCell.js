import Cell from './cells';

// Takes a row integer, a column integer, and a grid object
// and returns a Cell object
export default function addCell(row, column, grid){
  // Dimension cell
  const tempCell = new Cell(row, column);

  // Check if the grid object has a cell in the direction
  // that coincides with the cell's Top Left neighbor
  // and so on.
  if(grid[`${row - 1},${column - 1}`]){
    tempCell.tL = grid[`${row - 1},${column - 1}`];
    grid[`${row - 1},${column - 1}`].bR = tempCell;
  };
  if(grid[`${row - 1},${column}`]){
    tempCell.t = grid[`${row - 1},${column}`];
    grid[`${row - 1},${column}`].b = tempCell;
  };
  if(grid[`${row - 1},${column + 1}`]){
    tempCell.tR = grid[`${row - 1},${column + 1}`];
    grid[`${row - 1},${column + 1}`].bL = tempCell;
  };
  if(grid[`${row},${column - 1}`]){
    tempCell.l = grid[`${row},${column - 1}`];
    grid[`${row},${column - 1}`].r = tempCell;
  };
  if(grid[`${row},${column + 1}`]){
    tempCell.r = grid[`${row},${column + 1}`];
    grid[`${row},${column + 1}`].l = tempCell;
  };
  if(grid[`${row + 1},${column - 1}`]){
    tempCell.bL = grid[`${row + 1},${column - 1}`];
    grid[`${row + 1},${column - 1}`].tR = tempCell;
  };
  if(grid[`${row + 1},${column}`]){
    tempCell.b = grid[`${row + 1},${column}`]
    grid[`${row + 1},${column}`].t = tempCell
    tempCell.mates.push(tempCell.b);
  };
  if(grid[`${row + 1},${column + 1}`]){
    tempCell.bR = grid[`${row + 1},${column + 1}`];
    grid[`${row + 1},${column + 1}`].tL = tempCell;
  };
  return tempCell;
};