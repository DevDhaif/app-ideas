const addButton=document.querySelector('.addButton');
var inputValue=document.querySelector('.input');

const container=document.querySelector('.container');
class item{
    constructor(itemName){
        //to create the item div here:-
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input=document.createElement('input');
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let editButton=document.createElement('button');
        editButton.innerHTML='<i class="fa fa-edit" ></i>';
        editButton.classList.add('editButton');

        let removeButton=document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML='<i class="fa fa-trash" ></i>'

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',()=> this.edit(input));
        removeButton.addEventListener('click',()=> this.remve(itemBox));
    }
    //Edit Function:
    edit(input){
        input.disabled=!input.disabled;

    }
    //Remove Function:
    remve(item){
        container.removeChild(item);
    }
    

}
//Check for the added task:
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value="";
    }
}
//Add Function:
addButton.addEventListener('click',check)
new item("WHAAAAATTT");
