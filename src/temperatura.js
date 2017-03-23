let ejemplo= "hola";

console.log(ejemplo);

class Celsius extends Temperatura{

        constructor(dato){
            super(dato)
        }


        to_k(){

            var result;
            result = (this.valor + 273);
            result = result.toFixed(1) +"k";

            var n = new Kelvin(result);

            return n;
         }

         to_f(){

            var result;
            result = (this.valor * 1.8) + 32;
            result = result.toFixed(1) +"f";

            var n = new Farenheit(result);

            return n;
         }
    }


 class Kelvin extends Temperatura{

        constructor(dato){
            super(dato)
        }

        to_c(){

            var result;
            result = (this.valor - 273);
            result = result.toFixed(1) +"c";

            var n = new Celsius(result);

            return n;
        }

        to_f(){

            var result;
            result = 1.8*(this.valor - 273)+ 32;
            result = result.toFixed(1) + "f";

            var n = new Farenheit(result);

            return n;
        }
    }
