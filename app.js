//Función para escribir logs del aplicativo
function log(texto){
  const fs = require('fs');
  const date = formatted_date();
  const dateHour = formatted_date_hours();
  
try {
  fs.appendFileSync(`./logs/log_${date}.txt`, `${dateHour} -> ${texto}\n`)
  console.log("Se escribio correctamente en el log");
} catch (error) {
  console.log("Error: ->",error);
}

 
}


//Función para sacar fecha formateada
function formatted_date()
{
   var result="";
   var d = new Date();
   const day = zeroFill(d.getDate(),2);
   const month = zeroFill((d.getMonth()+1), 2)
   const year = d.getFullYear()
   result += `${day}${month}${year}`
   return result;
}

//Función para sacar fecha con hora formateada 
function formatted_date_hours()
{
   var result="";
   var d = new Date();
   const day = zeroFill(d.getDate(),2);
   const month = zeroFill((d.getMonth()+1), 2);
   const year = d.getFullYear();
   const hour = zeroFill(d.getHours(),2)+":"+zeroFill(d.getMinutes(), 2)+":"+ zeroFill(d.getSeconds(), 2);

   result += `${day}/${month}/${year} ${hour}`
   return result;
}

//Función para poner ceros a la izquierda
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}

log("Escribir otra cosa 2")