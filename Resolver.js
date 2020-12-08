let wasHere = [];
let maze = [];

const solveMaze = (creatField) =>{

    maze = creatField;

    for (let row = 0; row < maze.length; row++)
    {  
        const array = [];
        // Sets boolean Arrays to default values
        for (let col = 0; col < maze.length; col++){
            array[col] = false;
        }
        wasHere.push(array);
    }
    let b = recursiveSolve(0, 0);

    return b;
    // Will leave you with a boolean array (correctPath) 
    // with the path indicated by true values.
    // If b is false, there is no solution to the maze
}




function recursiveSolve(y,  x) {
    
    let haat = '^'
    // najpierw sprawdza czy jest na ostatnim polu (hat)
    if (maze[y][x] === haat) return true;

    //potem sprawdza czy nie jest na scianie badz juz tu nie byl
    if (maze[y][x] === 'O' || wasHere[y][x]) return false;
    
    //zaznacza nowe pole jako odwiedzone
    wasHere[y][x] = true; 
    
    //sprawdza czy nie jest na gornej scianie
    if (y !== 0) 
        if (recursiveSolve(y-1, x)) { //jezeli wywolanie funkcji z wspolrzednymi pola nad aktualna pozycja zwroci true wtedy zaznacz aktualna pozycje jako wlasciwa
            //correctPath[y][x] = true;
            return true;
        }
    //sprawdza czy nie jest na dolnej scianie
    if (y < maze.length-1)
        if (recursiveSolve(y+1, x)) { //jezeli wywolanie funkcji z wspolrzednymi pola pod aktualna pozycja zwroci true wtedy zaznacz aktualna pozycje jako wlasciwa
            //correctPath[y][x] = true;
            return true;
        }

    //sprawdza czy nie jest na lewej scianie
    if (x !== 0)
        if (recursiveSolve(y, x-1)) { //jezeli wywolanie funkcji z wspolrzednymi pola po lewej aktualna pozycja zwroci true wtedy zaznacz aktualna pozycje jako wlasciwa
            //correctPath[y][x] = true;
            return true;
        }

    //sprawdza czy nie jest na prawej scianie
    if (x < maze.length-1)
        if (recursiveSolve(y, x+1)) { //jezeli wywolanie funkcji z wspolrzednymi pola po prawej aktualna pozycja zwroci true wtedy zaznacz aktualna pozycje jako wlasciwa
            //correctPath[y][x] = true;
            return true;
        }

    //jezeli zaden warunek nie zostal spelniony zwroc false czy nie rozwiazane badz slepy zauwek 
    return false;
}

module.exports = solveMaze;