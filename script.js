function insereNaTela(num){
  document.form.display.value = document.form.display.value + num; 
}

function calcula(){
  var valor = document.form.display.value;
  if(valor){
    document.form.display.value = eval(valor);
  }
}

function apagarEssaPorraToda(){
  document.form.display.value="";
}

function apaga1caractere(){
  var salvo = document.form.display.value;
  document.form.display.value = salvo.substring(0, salvo.length-1)
}