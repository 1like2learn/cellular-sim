import Cell from './cells'
export default function addCell(row, column, grid){
  
  const tempCell = new Cell(row, column);
  if(grid[`${row + 1},${column - 1}`]){
    tempCell.tL = grid[`${row + 1},${column - 1}`];
    grid[`${row + 1},${column - 1}`].bR = tempCell;
  }
  if(grid[`${row + 1},${column}`]){
    tempCell.t = grid[`${row + 1},${column}`];
    grid[`${row + 1},${column}`].b = tempCell;
  }
  if(grid[`${row + 1},${column + 1}`]){
    tempCell.tR = grid[`${row + 1},${column + 1}`];
    grid[`${row + 1},${column + 1}`].bL = tempCell;
  }
  if(grid[`${row},${column - 1}`]){
    tempCell.l = grid[`${row},${column - 1}`];
    grid[`${row},${column - 1}`].r = tempCell;
  }
  if(grid[`${row},${column + 1}`]){
    tempCell.r = grid[`${row},${column + 1}`];
    grid[`${row},${column + 1}`].l = tempCell;
  }
  if(grid[`${row - 1},${column - 1}`]){
    tempCell.bL = grid[`${row - 1},${column - 1}`];
    grid[`${row - 1},${column - 1}`].tR = tempCell;
  }
  if(grid[`${row - 1},${column}`]){
    tempCell.b = grid[`${row - 1},${column}`]
    grid[`${row - 1},${column}`].t = tempCell
  }
  if(grid[`${row - 1},${column + 1}`]){
    tempCell.bR = grid[`${row - 1},${column + 1}`]
    grid[`${row - 1},${column + 1}`].tL = tempCell
  }
  return tempCell
}