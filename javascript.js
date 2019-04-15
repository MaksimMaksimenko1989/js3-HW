'use strict'

function isNumberInRange(number){
    if (number > 0 && number < 10)
        {return true;
    }else
        {return false;
    }
}
console.log(isNumberInRange(7));



function isEven(even){
    if (even % 2 == 0) 
        {return true;
    }else 
        {return false;
    }
}
console.log(isEven(10));


var value = +prompt('value?', '');
switch (value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;    
}
console.log(value);


function min(a, b){
    if (a < b) 
        {return a;
    }else 
        {return b;
    }
}
console.log (min(-3, 4))