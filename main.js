const prompt = require('prompt-sync')({sigint: true});

// Global variable of map items
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const fieldCharacter2 = '░';
const pathCharacter = '*';
const winIcon = '@';

// new Class
class Field {
    constructor(name) {
        this.name = name;
    }
    board2D() {
        let creatField = [];
        //make field
        let resultMap;
        let level;
        let sizeMap;
        let askSize = () => {
           console.log("Welcome in game")
           console.log("Select size of map to generate")
           let userInput;
           
            let doIt = () => {
                console.log("1 for small, 2 medium, 3 big")
                userInput = prompt();
                
                if (userInput === '1' || '2' || '3') {
                    if (userInput === '1') {
                        userInput = 1;
                        console.log("You selected small map")
                        return userInput;
                    } else if ( userInput === '2') {
                        userInput = 2;
                        console.log("You selected  medium map")
                        return userInput
                    } else if ( userInput === '3') {
                        userInput = 3;
                        console.log("You selected big map")
                        return userInput
                    }
                    else{
                    console.log("wrong input, select again: ");
                    userInput = false
                    return userInput;
                    }
                }
            }   
            do { 
                resultMap = doIt();
                
            } while (!resultMap)

            return resultMap;
        }
         
       
        let askLevel = () => {
            console.log("Select level of game")
            let userInput2;
            let doIt2 = () => {
                console.log("1 for level easy, 2 for level medium, 3 for level hard")
                userInput2 = prompt();
            
                if (userInput2 === '1' || '2' || '3') {
                    if (userInput2 === '1') {
                        userInput2 = 1;
                        console.log("You selected easy")
                        return userInput2;
                    } else if ( userInput2 === '2') {
                        userInput2 = 2;
                        console.log("You selected medium")
                        return userInput2
                    } else if ( userInput2 === '3') {
                        userInput2 = 3;
                        console.log("You selected difficult")
                        return userInput2
                    }
                    else{
                    console.log("wrong input, select again: ");
                    userInput2 = false
                    return userInput2;
                    }
                }
            }   
            do { 
                level = doIt2();
            
            } while (!level)

            return level;
        }

        
        let matrixSize = askSize();
        let matrixLevel = askLevel();
        
        //console.log(matrixLevel +' '+matrixSize );

        let matrix = (matrixSize, matrixLevel) =>{
            let mS = matrixSize;
            let mL = matrixLevel;
            return mS+'.'+mL;
        }
        const resultMatrix = matrix(matrixSize, matrixLevel);
        console.log(matrix(matrixSize, matrixLevel)); 
        

        let generateMap = (resultMap) => {
            switch (resultMap) {
                case 1:
                    return 10;
                    break;
                case 2:
                    return 20;
                    break;
                case 3:
                    return 30;
                    break;    
            }
        }

        sizeMap = generateMap(resultMap)

        for (var i = 0; i < sizeMap; i++) {
            const array = [];
            for (var j = 0; j < sizeMap; j++) {
                array.push(fieldCharacter);
            }
            creatField.push(array);
        }; 
         
        const length = creatField.length -1;
        let percent;




        switch(resultMatrix){
            case '1.1':
                percent = Math.floor((length * length)/5); 
                console.log(percent);
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '1.2':
                percent = Math.floor((length * length)/4);
                
                for(let i = 0; i < percent; i++){

                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '1.3':
                percent = Math.round((length * length)/3);
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
                 
            break;
            case '2.1':
                percent = Math.round((length * length)/5); 
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '2.2':
                percent = Math.round((length * length)/4);
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '2.3':
                percent = Math.round((length * length)/3);
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '3.1':
                percent = Math.round((length * length)/5); 
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '3.2':
                percent = Math.round((length * length)/4);
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
            case '3.3':
                percent = Math.round((length * length)/3);
                
                for(let i = 0; i < percent; i++){
                    const x = randomHole(length);
                    const y = randomHole(length);
                    creatField[x][y] = hole;
                };
            break;
        }
        
        
        function randomHole(size) {
            let r1 = Math.ceil(Math.random() * size);
            if(r1 === 0) return randomHole()
            else return r1;
        }

      
        
        let cH = () => {
            const fieldLenght = 9;
            function randomHat() {
                let r1 = Math.round(Math.random() * fieldLenght);
                if(r1 === 0) return randomHat()
                else return r1;
            }

            
            creatField[randomHat()][randomHat()]= hat;
            creatField[0][0] = pathCharacter;

        }   

        cH();
        


        let game = true;
        
        let x = 0;
        let y = 0;

        while(game) {
            console.clear();
            
            if (game === true) {
                let userMoved;
                let userMove = () =>{



                for(let i = 0; i < 10; i++) {
                        console.log(creatField[i].join(''));
                    
                }
                console.log("make a move WSAD")
                let userKey= prompt();
                if (userKey === 'a' || userKey === 's' || userKey === 'd' || userKey === 'w'){
                    return userMoved = userKey;
                } else {
                    console.log("wrong move, do it again")
                    return userMoved
                } 
                }   
                userMoved = userMove();
                switch(userMoved) {
                    case 'w':
                        if (y != 0) {
                            if(creatField[y-1][x] === hole) game = false;
                            if(creatField[y-1][x] === hat) {
                                creatField[y][x] = fieldCharacter; 
                               let abc = creatField[y-1][x] === winIcon;
                                console.log('Win');
                                if (abc) {
                                game = false;
                                }
                            }
                            creatField[y-1][x] = pathCharacter;
                            creatField[y][x] = fieldCharacter;                            
                            y -= 1;
                        }
                    break;
                    case 'd':
                        if (x < creatField.length-1){
                            if(creatField[y][x+1] === hole) game = false;
                            if(creatField[y][x+1] === hat) {
                                game = false;
                                console.log("Win")
                            }
                            creatField[y][x+1] = pathCharacter;
                            creatField[y][x] = fieldCharacter;                       
                            x += 1;                           
                        }   
                    break;
                    case 's':
                        if (y < creatField.length-1) {
                            if(creatField[y+1][x] === hole) game = false;
                            if(creatField[y+1][x] === hat) {
                                game = false;
                                console.log("Win")
                            }
                            creatField[y+1][x] = pathCharacter;
                            creatField[y][x] = fieldCharacter2;
                            y += 1;
                            
                        }
                    break;
                    case 'a':
                        if (x != 0) {
                            if(creatField[y][x-1] === hole) game = false;
                            if(creatField[y][x-1] === hat) {
                                game = false;
                                console.log("Win")
                            }
                            creatField[y][x-1] = pathCharacter;
                            creatField[y][x] = fieldCharacter;
                            x -= 1
                            
                        }
                    break;
                }
                
            } else {
                break;
            }
        }
    }
}

const newF = new Field;

newF.board2D();