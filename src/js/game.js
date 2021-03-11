const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

const gameBoard = (() => {
    const boxes = new Array(9).fill(" ");
    return { boxes };
})();

const newPlayer = (name, marker) => {
    return { name, marker };
};

const displayController = (() => {

    const render = () => {
        //gameBoard.boxes.forEach(box => {
            //    document.querySelector(`#box4`).textContent = box
            //})
    
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.textContent = gameBoard.boxes[`${box.dataset.key}`]
        })
    };

    return { render };
})();

const eventHandler = (() => {

    const newGame = () => {
        console.log('new game')
    }

    const handleClick = (e) => {
        let boxID = e.target.dataset.key;
        //check if valid move
        let validMove = true;
        validMove ? gameBoard.boxes[boxID] = "X" : null //use player marker

        //check for win condition

        displayController.render();
    };

    const initialize = () => {
        const newGameBtn = document.querySelector('#new-game')
        newGameBtn.addEventListener('click', newGame);

        const board = document.querySelector('.game-board');
        for (let i = 0; i < 9; i++) {
            board.innerHTML += `<div class="box" data-key="${i}"></div>`
        }

        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('click', handleClick))
    };

    return { initialize };
})();

window.onload = () => {
    eventHandler.initialize();
  };