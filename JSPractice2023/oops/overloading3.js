class india
{
    dosomething()
    {

        var fun1 = function(){
          //  console('hi..');
            return 'hi..'
        };


        var fun2 = function(a){
            console.log(a*10);
            return a*10;
        };

        var fun3 = function(a,b){
            console.log(a*b);
            return a*b;
        };
    }
}

var i = new india();

console.log(i.dosomething(10,10));
