function generator(location,number,divSize,bgColor){

    for(i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(divSize);
        cellBlock.innerHTML = i;
        location.append(cellBlock);
        cellBlock.addEventListener(`click`, function(){
            this.classList.toggle(bgColor);
            console.log(`hai cliccato la casella `, this.innerHTML);
        })
    }
}

const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){

    const difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
        if(difficulty === `easy`){ 
        generator(container, 100, `div-10`,`bg-blue`);     
        }else if(difficulty === `normal`){
            generator(container,81, `div-9`,`bg-blue`);
        }else{
            generator(container,49,`div-7`,`bg-blue`);
        }
});