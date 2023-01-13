let clickNumb = [];
let bombe =[];
let points = 0;
let difficulty = document.getElementById(`difficulty`).value;

function generator(location,number,divSize){

    for(i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(divSize);
        cellBlock.innerHTML = i;
        location.append(cellBlock);

        cellBlock.addEventListener(`click`, function myFunction() {

            if(clickNumb.includes(cellBlock.innerHTML) === false){
                clickNumb.push(cellBlock.innerHTML);
                if(bombe.includes(Number(cellBlock.innerHTML))){
                    this.classList.add("bg-red");      
                    alert(`hai perso la partita`);
                    window.location.reload();
                }else{
                    this.classList.add("bg-blue");
                    points+=1
                    document.getElementById(`score`).innerHTML = `il tuo punteggio : ${points}`
                } 
                console.log(points )
                if(points === number - 16){
                    alert(`hai vinto la partita`);
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

    difficulty = document.getElementById(`difficulty`).value;
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