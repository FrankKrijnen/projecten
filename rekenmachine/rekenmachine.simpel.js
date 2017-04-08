
var getal1 = "";
var getal2 = "";
var operator = "";
var isgelijkaanmemory = false;


function tienkwadraat(){
    if (getal1 != "" && operator == ""){
        var y = 10;
        for (var i = 2; i <= getal1;i++){
        y *= 10;
        }
    }
 
    getal1 = y;
    document.getElementById("invoerveld").value = getal1;
    
}
function kwadraat(){
    var z = "";
    if (getal1 != "" || getal1 != 1 && operator == ""){
        var z = "";
        z = getal1 * getal1;
    }
 
    getal1 = z
    document.getElementById("invoerveld").value = getal1;
}


function wrtl(){
    if (getal1 != "" && operator == ""){
        document.getElementById("invoerveld").value = Math.round((Math.sqrt(getal1)) *1000) /1000;
        getal1 = document.getElementById("invoerveld").value;
    }
    
}
function faculteit(){
    if (getal1 != "" && operator == "" && getal1 <= 100){
    var y = 1
    for (var i = getal1; i > 0; i--){
        y *= i;
        }
    }
    else {
        getal1 = "";
        document.getElementById("invoerveld").value = "";
    }
 
    getal1 = y;
    document.getElementById("invoerveld").value = getal1;
}
    


function invoer(nummer){
    if (operator == ""){
        if (isgelijkaanmemory == true){
            getal1 = nummer;
            document.getElementById("invoerveld").value = getal1;
            isgelijkaanmemory = false;
        }
        else{
        getal1 = getal1.toString() + nummer.toString();
        document.getElementById("invoerveld").value = getal1;
        console.log(getal1);
        }
    }
    else {
        getal2 += nummer;
        document.getElementById("invoerveld").value = getal1 + operator + getal2;
        console.log(getal2);
    }
}
function verwijder(){
    document.getElementById("invoerveld").value = "";
    getal1 = "";
    getal2 = "";
    operator = "";

}
function terug(){
    var getal1temp = "";
    var getal2temp = "";
    if (operator == "" && getal1 != "" && getal2 == ""){
        getal1temp = getal1;
        getal1temp = getal1temp.toString();
        if (getal1temp.length > 1){
        getal1temp = getal1temp.substr(0,getal1temp.length-1);
        getal1 = getal1temp;
        document.getElementById("invoerveld").value = getal1;
        console.log(getal1);
        }
        else {
            getal1 = "";
            document.getElementById("invoerveld").value = getal1;
            console.log(getal1);
        }
    }
    if (operator != "" && getal2 == ""){
        operator = "";
        document.getElementById("invoerveld").value = getal1;
    }
    if (operator != "" && getal1 != "" && getal2 != ""){
        getal2temp = getal2;
        getal2temp = getal2temp.toString();
        if (getal2temp.length > 1){
        getal2temp = getal2temp.substr(0,getal2temp.length-1);
        getal2 = getal2temp;
        document.getElementById("invoerveld").value = getal1 + operator + getal2;
        console.log(getal2);
        }
        else {
            getal2 = "";
            document.getElementById("invoerveld").value = getal1 + operator;
            console.log(getal2);
        }
    }
}
function symbool(symbol){
    
    if (operator == "" && getal1 != ""){
        operator = symbol;   
        console.log(operator);
        document.getElementById("invoerveld").value += operator;
    }
   
}
function isgelijkaan(){

    switch (operator) {
        case "+":
            getal1 = Math.round((parseFloat(getal1) + parseFloat(getal2)) *1000) /1000;
            document.getElementById("invoerveld").value = getal1;
            break;
        case "-":
            getal1 = Math.round((getal1 - getal2) *1000) /1000;
            document.getElementById("invoerveld").value = getal1;
            break;
        case "*":
            getal1 = Math.round((getal1 * getal2) *1000) /1000;
            document.getElementById("invoerveld").value = getal1;
            break;
        case "/":
            getal1 = Math.round((getal1 / getal2) *1000) /1000;
            document.getElementById("invoerveld").value = getal1;
            break;
    }  
    isgelijkaanmemory = true;
    getal2 = "";
    operator = "";
}