const display= document.getElementById("input");


function showItem(input){
display.value+=input;

}

function cleared(){
display.value= "";

}


function calculate(){
try{
    display.value= eval(display.value)

}
catch(error){
display.value="Error"
}


}