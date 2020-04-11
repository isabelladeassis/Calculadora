function insert(num){
  document.form.display.value = document.form.display.value + num; 
}

function equal(){
  var valor = document.form.display.value;
  if(valor){
    document.form.display.value = eval(valor);
  }
}

function clean(){
  document.form.display.value="";
}

function back(){
  var salvo = document.form.display.value;
  document.form.display.value = salvo.substring(0, salvo.length-1)
}