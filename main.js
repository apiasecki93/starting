let solveMaze = require('./Resolver.js');
//console.log(mazeTest);

const prompt = require('prompt-sync')({sigint: true});

// Global variable of map items
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let mazeHat;

// new Class
class Field {
    constructor(name)  {
        this.name = name;
        this.game = true;
        this.posX = 0;
        this.posY = 0;
        this.creatField = [];
        this.resultMap;
        this.level;
        this.sizeMap = 0;
    }
    askSize() {
        console.log("Welcome in game")
        console.log("Select size of map to generate")
    }       
    doIt() {
        console.log("1 for small, 2 medium, 3 big")
        const userInput = prompt();
        if (userInput === '1' || '2' || '3') {
            if (userInput === '1') {
                this.sizeMap = 10;
                console.clear()
                console.log("You selected small map")
            } else if ( userInput === '2') {
                this.sizeMap = 20;
                console.clear()
                console.log("You selected  medium map");
            } else if ( userInput === '3') {
                this.sizeMap = 30;
                console.clear()
                console.log("You selected big map");
            }
            else{
                console.log("wrong input, select again: ");
                this.doIt();
            }
        }
        //console.log(this.sizeMap);
    }
         
       
    askLevel(){
        let userInput2;
        
        console.log("Select level of game")
        console.log("1 for level easy, 2 for level medium, 3 for level hard")
        
        userInput2 = prompt();
            
            if (userInput2 === '1' || '2' || '3') {
                if (userInput2 === '1') {
                    this.level = 1;
                    console.clear()
                    console.log("You selected easy");
                }
                else if ( userInput2 === '2') {
                    this.level = 2;
                    console.clear()
                    console.log("You selected medium");
                }
                else if ( userInput2 === '3') {
                    this.level = 3;
                    console.clear()
                    console.log("You selected difficult")
                }
                else{
                console.log("wrong input, select again: ");
                this.askLevel();
                }
            }
        }   

        
        

 
    
    genretateMap() {
    for (var i = 0; i < this.sizeMap; i++) {
        const array = [];
        for (var j = 0; j < this.sizeMap; j++) {
            array.push(fieldCharacter);
        }
        this.creatField.push(array);
        }
    }; 


    makeHoles(){ 
        const resultMatrix = this.sizeMap + this.level;
        let percent;
        const size = this.sizeMap;

        function randomHole(size = 0) {
            const r1 = Math.ceil(Math.random() * (size-1));
            if(r1 == 0) return randomHole()
            else return r1;
        }

        switch(resultMatrix){
            case 11:
                percent = Math.floor((this.sizeMap * this.sizeMap)/5); 
                //console.log(percent);
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    //console.log(x+' '+y);
                    this.creatField[x][y] = hole;
                };
            break;
            case 12:
                percent = Math.floor((this.sizeMap * this.sizeMap)/4);
                    
                for(let i = 0; i < percent; i++){

                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 13:
                percent = Math.round((this.sizeMap * this.sizeMap)/3);
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
                    
            break;
            case 21:
                percent = Math.round((this.sizeMap * this.sizeMap)/5); 
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 22:
                percent = Math.round((this.sizeMap * this.sizeMap)/4);
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 23:
                percent = Math.round((this.sizeMap * this.sizeMap)/3);
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 31:
                percent = Math.round((this.sizeMap * this.sizeMap)/5); 
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 32:
                percent = Math.round((this.sizeMap * this.sizeMap)/4);
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
            case 33:
                percent = Math.round((this.sizeMap * this.sizeMap)/3);
                    
                for(let i = 0; i < percent; i++){
                    const x = randomHole(this.sizeMap);
                    const y = randomHole(this.sizeMap);
                    this.creatField[x][y] = hole;
                };
            break;
        }
    }
        
    

      
        
    generateHat(){
        const size = this.sizeMap;

        function randomHat() {
            let r1 = Math.floor(Math.random() * (size-1));
            if(r1 === 0) return randomHat()
            else return r1;
        }
        let y = randomHat()
        let x = randomHat()
        
        this.creatField[y][x] = hat;
        this.creatField[0][0] = pathCharacter;
    }   

    startGame(){  
        let validMap = false;
        
        this.askSize();
        this.doIt();
        this.askLevel();

        while(!validMap)
        {
            this.genretateMap();
            this.makeHoles();
            this.generateHat();

            

            const map = solveMaze(this.creatField);
            

            if(map) validMap = true;
        }
        


        while(this.game) {
            console.clear();

            let userMoved;
            let userMove = () =>{
                for(let i = 0; i < this.sizeMap; i++) {
                        console.log(this.creatField[i].join(''));
                        
                }

                console.log("make a move WSAD")
                let userKey= prompt();
                if (userKey === 'a' || userKey === 's' || userKey === 'd' || userKey === 'w'){
                    userMoved = userKey;
                } else {
                    console.log("wrong move, do it again")
                    userMove();
                } 
            }   
            userMove();
            switch(userMoved) {
                case 'w':
                    if (this.posY != 0) {
                        if(this.creatField[this.posY-1][this.posX] === hole) this.game = false;
                        if(this.creatField[this.posY-1][this.posX] === hat) {
                            console.log('Win');
                            this.game = false;
                        }
                        this.creatField[this.posY-1][this.posX] = pathCharacter;
                        this.creatField[this.posY][this.posX] = fieldCharacter;                            
                        this.posY -= 1;
                    }
                break;
                case 'd':
                    if (this.posX < this.sizeMap){
                        if(this.creatField[this.posY][this.posX+1] === hole) this.game = false;
                        if(this.creatField[this.posY][this.posX+1] === hat) {
                            console.log("Win");
                            this.game = false;
                        }
                        this.creatField[this.posY][this.posX+1] = pathCharacter;
                        this.creatField[this.posY][this.posX] = fieldCharacter;                       
                        this.posX += 1;                           
                    }   
                break;
                case 's':
                    if (this.posY < this.sizeMap) {
                        if(this.creatField[this.posY+1][this.posX] === hole) this.game = false;
                        if(this.creatField[this.posY+1][this.posX] === hat) {
                            this.game = false;
                            console.log("Win");
                        }
                        this.creatField[this.posY+1][this.posX] = pathCharacter;
                        this.creatField[this.posY][this.posX] = fieldCharacter;
                        this.posY += 1;
                            
                    }
                break;
                case 'a':
                    if (this.posX != 0) {
                        if(this.creatField[this.posY][this.posX-1] === hole) this.game = false;
                        if(this.creatField[this.posY][this.posX-1] === hat) {
                            this.game = false;
                            console.log("Win");
                        }
                        this.creatField[this.posY][this.posX-1] = pathCharacter;
                        this.creatField[this.posY][this.posX] = fieldCharacter;
                        this.posX -= 1
                            
                    }
                break;
            }
            
    }
    }
}
//}

const newF = new Field;

newF.startGame();


const map = newF.genretateMap();

