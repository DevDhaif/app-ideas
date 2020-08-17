let textColor= document.getElementById('hh').style.color.value;
function on(){
    textColor="green";
    document.getElementById('hh').style.color=textColor;
    document.getElementById('red').style.background ="green";
    
    
}
function off(){
    
    document.getElementById('hh').style.color="black";
    document.getElementById('red').style.background ="red";
}