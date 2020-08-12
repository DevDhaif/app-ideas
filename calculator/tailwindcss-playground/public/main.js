

function insert(num)
{
   
    document.getElementById('num').value=document.getElementById('num').value+num;
    
}
    
function result()
{
    document.form.textview.value=eval(document.form.textview.value);
}
function back(){ 
    var number=document.form.textview.value;
    document.form.textview.value=number.substring(0,number.length-1);
    
   
}
function c(){
    document.form.textview.value='';
}
