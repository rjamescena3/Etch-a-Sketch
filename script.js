console.log("Etch_a_Sketch Project");
const newGridBtn=document.querySelector("#new-grid");
const container=document.querySelector("#container");

newGridBtn.addEventListener("click",()=>{
    const gridSize=prompt("Enter the number of squares per side");
    container.textContent="";
    container.style.width= `${gridSize*52}px`;

    const totalSquares=gridSize*gridSize;

    
    for(let i=1; i<= totalSquares ; i++){
    const square=document.createElement("div");
     square.classList.add("square");
     container.append(square);

     square.addEventListener("mouseover",()=>{
        square.style.backgroundColor="red";
     });
    }
});


