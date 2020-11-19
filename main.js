

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(name) {
        this.name = name;
    }
    board2D() {
        let creatField = [];
        //make field
        for (var i = 0; i < 10; i++) {
            const array = [];
            for (var j = 0; j < 10; j++) {
                array.push(fieldCharacter);
            }
            creatField.push(array);
        }
         const a = creatField[0][0] = pathCharacter;

        let cH = () => {
            let arrBR;
            let bigRand = [];
            const fieldLenght = 9;
            function randomHat() {
                let r1 = Math.floor(Math.random() * fieldLenght);
                if(r1 === 0) return randomHat()
                else return r1;
            }
            creatField[randomHat()][randomHat()]= hat;
        }   
        cH()

        for(let i = 0; i < 10; i++) {
                console.log(creatField[i].join(''));
        }
    }
}
const newF = new Field;

newF.board2D();