
    class Farenheit extends Temperatura{

        constructor(dato){
            super(dato)
        }


        to_c(){

            var result;
            result = (this.valor - 32)*5/9;
            result = result.toFixed(1)+"c";

            var n = new Celsius(result);

            return n;
         }


        to_k(){

            var result;
            result = (5*(this.valor - 32)/9) + 273.15;
            result = result.toFixed(1) +"k";

            var n = new Kelvin(result);

            return n;
        }
    }