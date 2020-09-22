export default class Cell{
  constructor(row, column){
    this.row = row;
    this.column = column;
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

  toggleAlive(){
    if (!this.alive) {
      this.alive = true
    }else {
      this.alive = false
    }
    console.log('this.alive', this.alive);
  }
}