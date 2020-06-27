function getNum(num){
    var res = document.getElementById("calcinput")
    res.value += num;
}

function clr(){
    var clr = document.getElementById("calcinput")
    clr.value = "";
}


function getresult(){
    var result = document.getElementById("calcinput")
    result.value = eval(result.value)    
}