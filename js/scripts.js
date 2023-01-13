let clickNumb = [];
let bombe =[];
let points = 0;

let gameOver = false;

function generator(location,number,divSize){

    for(let i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(divSize);
        cellBlock.innerHTML = i;
        location.append(cellBlock);

        cellBlock.addEventListener(`click`, function myFunction() {

            if(clickNumb.includes(cellBlock.innerHTML) === false){
                clickNumb.push(cellBlock.innerHTML);
                if(bombe.includes(Number(cellBlock.innerHTML))){
                    this.classList.add("bg-red");
                    
                    gameOver = true;
                    if(gameOver ==true){
                        for( let i = 0; i < bombe.length; i++){
                            if(divSize == `div-10`){
                                document.querySelector(`.div-10:nth-child(${bombe[i]})`).classList.add(`bg-red`);
                            }
                            else if(divSize == `div-9`){
                                document.querySelector(`.div-9:nth-child(${bombe[i]})`).classList.add(`bg-red`);
                            }
                            else if(divSize == `div-7`){
                                document.querySelector(`.div-7:nth-child(${bombe[i]})`).classList.add(`bg-red`);
                            }
                        }
                        alert(`hai perso la partita con il punteggio di: ${points}`);
                        
                    }

                }else{
                    this.classList.add("bg-blue");
                    points+=1
                    document.getElementById(`score`).innerHTML = `il tuo punteggio : ${points}`
                } 
                console.log(points )
                if(points === number - 16){
                    alert(`hai vinto la partita con il punteggio di: ${points}`);
                    window.location.reload();
                }
            } 
        })       
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function bombs(array ,  maxNumber){
    while(bombe.length < 16){
        let number =  getRandomInt(1,maxNumber);
         if(bombe.includes(number) === false) {
             array.push(number);
             console.log(array)
         }
    }
}

const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){

    let difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
        if(difficulty === `easy`){ 
            bombs(bombe, 100);
            generator(container, 100, `div-10`);            
        }
        else if(difficulty === `normal`){
            bombs(bombe, 81);
            generator(container,81, `div-9`);
        }
        else{
            bombs(bombe, 49);
            generator(container,49,`div-7`);     
        }
});