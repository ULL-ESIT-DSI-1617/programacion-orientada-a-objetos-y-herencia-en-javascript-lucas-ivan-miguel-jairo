class Medida{

    constructor(dato){
         var regexp = /([-+]?\d+(?:\.\d*)?)\s*((k|m|c)?m(3)?|[CcKFfk])/;
         var m = dato.match(regexp);
         var num = m[1];
         var type = m[2];
         num = parseFloat(num);
         this.num_ = num;
         this.type_ = type;
    }
    to_s(){
        var a = this.num_.toFixed(1) + this.type_.toFixed(2);
        console.log(a)
        return a;
    }
    //Geter
    get valor(){
        return this.num_;
    }

    get tipo(){
        return this.type_;
    }

    //Seter
   set valor(value){
        this.num=value;
    }

    set tipo(value){
        this.type=value;
    }



}

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

