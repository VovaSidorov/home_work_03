
// DZ03


// Ввод текста
// function enterText(){
//      text = prompt("Введите текст");
//      return text;
// }


// Ввод символа
function enterSymbol(){
     symbol1 = prompt("Enter a lowercase letter");
     return symbol1;
}

// // Проверка кол-ва символов
function colSymbol(symbol){
   console.log(typeof(symbol));
   arr = symbol.split('');
   console.log(arr);
   console.log(arr.length);
   if (arr.length === 1){
     return symbol;
   }
   else {
     alert('You have entered more than one character, try again.');
     return location.reload();
   }
}


function validationSymbol(symbol){
  pr_symbol = parseInt(symbol);
if (pr_symbol==symbol){
  alert("You entered a number, try again");
  return location.reload();
}
else if (symbol == "*" || symbol == "+" || symbol == "-" || symbol == "/" || symbol == "=" || symbol == "." || symbol == "?" || symbol == "/" )
{                                
  alert("You entered a sign, try again");
  return location.reload();
}
else
{
  if (symbol == symbol.toLocaleUpperCase()){
    alert("You entered a large letter, try again");
    return location.reload();
  }
  else {
    return symbol;
  }
}
}


var str = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

var arrSymbol = validationSymbol(colSymbol(enterSymbol()));

var arr_str =str.split('');

arr_str.forEach(function(el,i,arr){
    console.log(el);
    if (str[i]==arrSymbol){
     arr[i]=el[0].toUpperCase();
              }
});
console.log(arr_str.join(''));


    

