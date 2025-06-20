'use strict'; // строгий режим выполнения
const ROWS=20; //строки
const COLS=10; //столбцы
const BLOCK_SIZE=30; // размер единичного блока

const KEY = {
    SPACE: 32,
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}
Object.freeze(KEY);


const COLORS = [
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];

const SHAPES = [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];

const time = { start: 0, elapsed: 0, level: 1000 };

const POINTS = {
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800,
  SOFT_DROP: 1,
  HARD_DROP: 2
}
Object.freeze(POINTS);

const LINES_PER_LEVEL = 10;

const LEVEL = {
  0: 800,
  1: 720,
  2: 630,
  3: 550,
  // ...
}

Object.freeze(LEVEL);
        
//const X = 'x';
//const a = { [X]: 5 };
//console.log(a.x); // 5



    

