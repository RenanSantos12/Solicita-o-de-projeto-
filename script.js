const form   = document.getElementById('form')
const campos = document.querySelectorAll('required')
const span   = document.querySelectorAll('.span-required')

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

function SetErro(index) {
  alert(index);
}

 function nameValidade (){
  if(campos(0).value.length < 3 )
  {

    console.log('Nome deve ter 3 caracteries')

    SetErro(0);
  }

 else  {
    console.log ('Validado com suscesso')
  }
}
