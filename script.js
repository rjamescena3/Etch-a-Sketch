console.log("Etch_a_Sketch Project");
const newGridBtn=document.querySelector("#new-grid");
const container=document.querySelector("#container");

newGridBtn.addEventListener("click",()=>{
    const gridSize=prompt("Enter the number of squares per side");
    container.textContent="";
    
    const squareSize=832/gridSize;

    const totalSquares=gridSize*gridSize;

    
    for(let i=1; i<= totalSquares ; i++){
    const square=document.createElement("div");

    square.style.width=`${squareSize}px`;
     square.style.height=`${squareSize}px`;

     square.classList.add("square");
     container.append(square);
     
     square.addEventListener("mouseover",()=>{
        square.style.backgroundColor="red";
     });
    }
});


