export default class Cell{
  constructor(column, row){
    this.column = column;
    this.row = row;
    this.alive = false;
    this.tL = null;
    this.t = null;
    this.tR = null;
    this.l = null;
    this.r = null;
    this.bL = null;
    this.b = null;
    this.bR = null;

  }

}