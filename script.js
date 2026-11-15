console.log("Etch_a_Sketch Project");
const newGridBtn=document.querySelector("#new-grid");
const container=document.querySelector("#container");

newGridBtn.addEventListener("mouseover",()=>{
    newGridBtn.style.background="green";
    newGridBtn.style.color="white";
});

newGridBtn.addEventListener("mouseout",()=>{
    newGridBtn.style.background="gray";
    newGridBtn.style.color="white";
});


newGridBtn.addEventListener("click",()=>{
    const gridSize=prompt("Enter the number of squares per side");

    if(gridSize>100){
        alert("Please You Can't Exceed 100 Size!");
        return;
    }    

    container.style.background="white";
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
        const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
        square.style.background=randomColor;
     });
    }
});


