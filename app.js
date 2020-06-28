function getNum(num){
    var res = document.getElementById("calcinput")
    res.value += num;
}

function clr(){
    var clr = document.getElementById("calcinput")
    clr.value = "";
}

function back(){
    var resu = document.getElementById('calcinput')
    resu.value = resu.value.slice(0,-1);
}

function getresult(){
    var result = document.getElementById("calcinput")
    result.value = eval(result.value)    
}