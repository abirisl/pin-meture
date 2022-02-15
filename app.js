function getPin(){
    const pin= Math.round(Math.random()* 10000);
    const stringPin= pin+ '';
    if(stringPin.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin= getPin();
    document.getElementById('display-pin').value= pin;

}


document.getElementById('btn-nbr').addEventListener('click', function(event){
   const number= event.target.innerText;
   const nbrInput= document.getElementById('nbr-input');
   if(isNaN(number)){
    if(number=='C'){
        nbrInput.value = '';
    }
 }
   else{
    
    const previousNbr= nbrInput.value;
    const clcnbr= previousNbr+number;
    nbrInput.value= clcnbr;
   }
})

function veryPin(){
   const pin= document.getElementById('display-pin').value;
   const typeNumber= document.getElementById('nbr-input').value;
   const successNumber= document.getElementById('success-input');
   const failNumber= document.getElementById('fail-input');
   if(pin == typeNumber){
    
       successNumber.style.display= 'block';
        failNumber.style.display= 'none';
   }
   else{
   
    
        failNumber.style.display='block';
       successNumber.style.display= 'none';
   }
}