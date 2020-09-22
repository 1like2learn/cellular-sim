import Cell from './cells'
export default function addCell(column, row, grid){
  
  const tempCell = new Cell(column, row);
  if(grid[`${column - 1},${row + 1}`]){
    tempCell.tL = grid[`${column - 1},${row + 1}`];
    grid[`${column - 1},${row + 1}`].bR = tempCell;
  }
  if(grid[`${column},${row + 1}`]){
    tempCell.t = grid[`${column},${row + 1}`];
    grid[`${column},${row + 1}`].b = tempCell;
  }
  if(grid[`${column + 1},${row + 1}`]){
    tempCell.tR = grid[`${column + 1},${row + 1}`];
    grid[`${column + 1},${row + 1}`].bL = tempCell;
  }
  if(grid[`${column - 1},${row}`]){
    tempCell.l = grid[`${column - 1},${row}`];
    grid[`${column - 1},${row}`].r = tempCell;
  }
  if(grid[`${column + 1},${row}`]){
    tempCell.r = grid[`${column + 1},${row}`];
    grid[`${column + 1},${row}`].l = tempCell;
  }
  if(grid[`${column - 1},${row - 1}`]){
    tempCell.bL = grid[`${column - 1},${row - 1}`];
    grid[`${column - 1},${row - 1}`].tR = tempCell;
  }
  if(grid[`${column},${row - 1}`]){
    tempCell.b = grid[`${column},${row - 1}`]
    grid[`${column},${row - 1}`].t = tempCell
  }
  if(grid[`${column + 1},${row - 1}`]){
    tempCell.bR = grid[`${column + 1},${row - 1}`]
    grid[`${column + 1},${row - 1}`].tL = tempCell
  }
  return tempCell
}