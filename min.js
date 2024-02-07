// var topSection = document.querySelector('.top-section');
var pera = document.querySelector('p');
var buttons = document.getElementsByClassName('btn');

var sceenValue = '';
// console.log(btn);
console.log(pera);

for(var x=0; x<buttons.length; x++){
 buttons[x].addEventListener('click',function(e){
  buttonText = e.target.innerText;
  //  console.log(buttonText)
  if(buttonText == 'X'){
    buttonText = '*';
    sceenValue += buttonText;
    pera.innerHTML = sceenValue;
  }
  else if (buttonText == 'C'){
    sceenValue = '';
    pera.innerHTML = sceenValue;

  }
  else if (buttonText == '='){
    pera.innerHTML = eval(sceenValue);
  }
  else{
    sceenValue += buttonText;
    pera.innerHTML = sceenValue;


  }
 })
}

// for(item of buttons){
 
//   item.addEventListener('click', function (e){
//     buttonText = e.target.innerText;
//     console.log(buttonText);
//   })
// }





