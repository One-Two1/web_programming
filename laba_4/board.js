class Board {
    constructor(ctx) {
      this.ctx = ctx
      this.piece = null;
    }
    
    // Сбрасывает игровое поле перед началом новой игры
    reset() {
      this.grid = this.getEmptyBoard();
    }
    
    // Создает матрицу нужного размера, заполненную нулями
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }

  insideWalls(x) {
  return x >= 0 && x < COLS;
}

aboveFloor(y) {
  return y <= ROWS;
}

// не занята ли клетка поля другими фигурками
notOccupied(x, y) {
  return this.grid[y] && this.grid[y][x] === 0;
}

valid(p) {
  return p.shape.every((row, dy) => {
    return row.every((value, dx) => {
      let x = p.x + dx;
      let y = p.y + dy;
      return value === 0 ||
          (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y));
    });
  });
}
  
   
    rotate(p) {
        // Клонирование матрицы
        let clone = JSON.parse(JSON.stringify(p));

        // алгоритм вращения
        // Транспонирование матрицы тетрамино
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] =
                    [p.shape[y][x], p.shape[x][y]];
            }
        }

        // Изменение порядка колонок
        p.shape.forEach(row => row.reverse());


        return clone;
    }


    draw() {
        this.piece.draw();
        this.drawBoard();
    }

    drawBoard() {
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = COLORS[value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.grid[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
    }

   drop() {
  let p = moves[KEY.DOWN](this.piece);
  if (this.valid(p)) {
    this.piece.move(p);
  } else {
    this.freeze();
    this.clearLines();
    console.table(this.grid);

    if (this.piece.y === 0) {
      // Game over
      return false;
    }

    this.piece = new Piece(this.ctx);
    this.piece.setStartPosition();
  }

  return true;
}

getLineClearPoints(lines,  level) {  
    return lines === 1 ? POINTS.SINGLE :
         lines === 2 ? POINTS.DOUBLE :  
         lines === 3 ? POINTS.TRIPLE :     
         lines === 4 ? POINTS.TETRIS : 
         0;
}

clearLines() {
  let lines = 0;

  this.grid.forEach((row, y) => {
    // Если все клетки в ряду заполнены
    if (row.every(value => value > 0)) {
      lines++;

      // Удалить этот ряд
      this.grid.splice(y, 1);

      // Добавить наверх поля новый пустой ряд клеток
      this.grid.unshift(Array(COLS).fill(0));
    }
  });

  if (lines > 0) {    
    // Добавить очки за собранные линии
    account.score += this.getLineClearPoints(lines);  
  }
  
  }



    

 
}