//Capture the smiley palette and create a toggle event for it

//Capturing the navigation
var paletteSmiley = document.getElementById("smiley"); 


//Create a function
function toggleSmiley(){

    //Capturing the div to be toggled when the navigtion is clicked
    var smileyDiv = document.getElementById("boxSmiley");


    //The toggle can only work with a condition
    if(smileyDiv.style.display != "none"){
        smileyDiv.style.display = "none";
        smileyDiv.style.animation = "upDown 2s ease-out";

    } //This is make the div hidden when clicked
    
    else{
        smileyDiv.style.display = "";
    }
    

}

//Create an event listener
paletteSmiley.addEventListener("click", toggleSmiley);


//Capture the animal palette and create a toggle event for it

//Capturing the navigation
var paletteAnimal = document.getElementById("animal"); 


//Create a function
function toggleAnimal(){

    //Capturing the div to be toggled when the navigtion is clicked
    var animalDiv = document.getElementById("boxAnimal");


    //The toggle can only work with a condition
    if(animalDiv.style.display != "none"){
        animalDiv.style.display = "none";
        animalDiv.style.animation = "upDown 2s ease-out";

    } //This is make the div hidden when clicked
    
    else{
        animalDiv.style.display = "";
    }
    

}

//Create an event listener
paletteAnimal.addEventListener("click", toggleAnimal);



//Capture the planet palette and create a toggle event for it

//Capturing the navigation
var palettePlanet = document.getElementById("planet"); 


//Create a function
function togglePlanet(){

    //Capturing the div to be toggled when the navigtion is clicked
    var planetDiv = document.getElementById("boxPlanet");

    //The toggle can only work with a condition
    if(planetDiv.style.display != "none"){
        planetDiv.style.display = "none";
        planetDiv.style.animation = "upDown 2s ease-out";

    } //This is make the div hidden when clicked
    
    else{
        planetDiv.style.display = "";
    }
    

}

//Create an event listener
palettePlanet.addEventListener("click", togglePlanet);