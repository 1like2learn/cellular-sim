export default class Cell{
  // Create the necessary fields for the cell object
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
    this.mates = []
    this.color = "#d4f1f4"
  }

  // Populates the cell's mates array with mates if they exist
  getMates(){
    if(this.tL) {this.mates.push(this.tL)}
    if(this.t) {this.mates.push(this.t)}
    if(this.tR) {this.mates.push(this.tR)} 
    if(this.l) {this.mates.push(this.l)}
    if(this.r) {this.mates.push(this.r)}
    if(this.bL) {this.mates.push(this.bL)} 
    if(this.b) {this.mates.push(this.b)}
    if(this.bR) {this.mates.push(this.bR)}
  }

  // Toggles the alive state of the cell between true and false
  toggleAlive(){
    if (!this.alive) {
      this.alive = true
    }else {
      this.alive = false
    };
    return `${this.row},${this.column}`;
  };

  // Simulate cell growth based on number of mates
  simulate(){
    // Find the number of cell mates that are alive
    let aliveCount = 0;
    this.mates.forEach( mate => {
      if (mate.alive){
        aliveCount++
      };
    });
    // If a cell has fewer than two neighbors it dies
    if (aliveCount < 2 && this.alive){
      this.color = "#75e6da"
      return `${this.row},${this.column}`
    // If a cell has three neighbors it becomes alive
    }else if (aliveCount === 3 && !this.alive){
      this.color = "#05445e"
      return `${this.row},${this.column}`
    // If a cell has more than three neighbors it dies
    }else if (aliveCount > 3 && this.alive){
      this.color = "#189ab4"
      return `${this.row},${this.column}`
    };
  };
};