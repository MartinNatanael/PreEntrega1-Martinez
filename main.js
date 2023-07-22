
const button = document.getElementById('button')
button.addEventListener('click',function(){

  let value = parseInt(prompt("¿Quere calcular el costo de su prestamo?\nIngrese el monto al que desde acceder sin comas ni puntos"));
  let plan = ''
  
  if (isNaN(value) || value == "") {
  alert("Por favor Ingresa un numero valido");
  } else{
    plan = parseInt(prompt("Ingrese el Plan de cutoas que desea\nPuede elegir entre 12, 24, 36 meses"));
    function interestsCalculator(value, plan) {
      switch (plan) {
        case 12:
          return value * 2.25;
          break;
        case 24:
          return value * 2.5;
          break;
        case 36:
          return value * 2.75;
          break;
        default:
          return alert("No ingresaste un plan de pagos valido");
          break;
      }
    }
  }
  
  let result = interestsCalculator(value, plan);
  
  function amountCalculator(plan,result){
    switch (plan){
      case 12:
      return result / 12;
      break;
      case 24:
      return result/24;
      break;
      case 36:
      return result/36
      break;
      default:
          return alert("Hubo un error");
      break;
    }
  }
  
  let finalResult = amountCalculator(plan,result);
  let finalResultDecimal= finalResult.toFixed(2);
  
  alert(`Su monto final a pagar sera: $${result}\nEn ${plan} pagos de $${finalResultDecimal}`);

})

