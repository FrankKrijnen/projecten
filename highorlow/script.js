var spelernaam = "";
var wrong = new Audio('ding.mp3');
var whoosh = new Audio('whoosh.mp3');
var sewing2 = new Audio('sewing2.mp3');
var ingamemusic = new Audio('ElevatorMusic.mp3');
var deepwhoosh = new Audio('deepwhoosh.mp3');
var puntup = new Audio('punt_01.mp3');
var puntdown = new Audio('punt_02.mp3');
var randomNum = "";
var tijd = 20;
var huidigenum = "";
var vorigenum = "";
var score = "";

$(document).ready(function(){
    
var arrow_keys_handler = function(e) {
    switch(e.keyCode){
        case 37: 
        case 39: 
        case 38:  
        case 40: // Arrow keys
        case 32: e.preventDefault(); 
        break; // Space
        default: 
        break; // do not block other keys
    }
};
window.addEventListener("keydown", arrow_keys_handler, false);
    
    
    $("#input_naam").val("");
    $("#buttonScoreboard").click(function() {
        location.reload();
    })

    
    
    $("#high").click(function() {
        if (huidigenum > vorigenum){
            goedgeraden();  
        }
    else {
        foutgeraden();
    }
    });
    $("#low").click(function() {
        if (huidigenum < vorigenum){
            goedgeraden();
        }
    else {
        foutgeraden();
    }
    });
$("#input_naam").keyup(function(event){
    if(event.keyCode == 13){
        $("#btn_naam").click();
    }
});
    
    
    
$("#btn_naam").click(function(){
    spelernaam = $("#input_naam").val(); 
        if (spelernaam != ""){
            $("#tijd2").text(tijd);
            $("#leeg").css({opacity: 0});
            $("#popup_naam").animate({marginLeft: "-550px"});
            whoosh.play();
            $("#popup_naam").animate({marginLeft: "3350px"});
            sewing2.play();
            setTimeout(function(){
                $("#popup_naam").css({display: "none"});
                $("#popup_bg").css({display: "none"});
                $("#text2").css({display: "block"});
                $("#beginnum").css({display: "block"});
                $("#naam").html(spelernaam);
                Interval1 = setInterval(function(){ numTeller() }, 100);
            },800);
            setTimeout(function() {
                $("#beginbtn").css({display: "flex"});
                clearInterval(Interval1)
                vorigenum = randomNum;
            }, 4200)
        }
        else {
            wrong.play();
            $("#leeg").css({opacity: 1});
            $("#popup_naam").effect("shake");
        }
});
    
        

    
    $("#beginbtn").click(function(){
        deepwhoosh.play();
        $("#text2").css({display: "none"});
        $("#beginbtn").css({display: "none"});
        $("#beginnum").css({display: "none"});
        $("#teller").html("3");
        $("#teller").animate({fontSize: "500px"});
        $("#teller").animate({opacity: 0});
        setTimeout(function(){
            deepwhoosh.pause();
            deepwhoosh.currentTime = 0;
            deepwhoosh.play();
            $("#teller").css({fontSize: "0px"});
            $("#teller").css({opacity: 1});
            $("#teller").html("2");
            $("#teller").animate({fontSize: "500px"});
            $("#teller").animate({opacity: 0});
            $("#teller").css({fontSize: "0px"});
        },1100);
        setTimeout(function(){
            deepwhoosh.pause();
            deepwhoosh.currentTime = 0;
            deepwhoosh.play();
            $("#teller").css({fontSize: "0px"});
            $("#teller").css({opacity: 1});
            $("#teller").html("1");
            $("#teller").animate({fontSize: "500px"});
            $("#teller").animate({opacity: 0});
            $("#teller").css({fontSize: "0px"});
        },2200);
        setTimeout(function() {
            $("#high").css({display: "block"});
            $("#low").css({display: "block"});
            $("#huidigenum").css({display: "block"});
            numMaker();
            timerVar = setInterval(function(){ timer() }, 1000);
            ingamemusic.play();
        },3500);
    });
    function timer(){

        if (tijd == 0){
            clearInterval(timerVar);
            timeIsUp();
        }
        else {
            tijd--;
            $("#tijd2").text(tijd);
        }
    }
    function timeIsUp(){
        ingamemusic.pause();
        $("#high").css({display: "none"});
        $("#huidigenum").css({display: "none"});
        $("#low").css({display: "none"});
        $("#teller2").css({display: "block"});
        $("#teller2").css({fontSize: "0px"});
        $("#teller2").css({opacity: 0});
        $("#teller2").animate({opacity: 1});
        $("#teller2").animate({fontSize: "230px"});
        setTimeout(function(){
            score = document.getElementById("punten2").innerHTML;
            puntenPop();
            $.post("highorlow.php",
            {
                naam: spelernaam,
                score: score
            });
            $("#teller2").animate({opacity: 0});
            
        },2500);
        setTimeout(function() {
            scoreboard();
        },5500);
    }
    function scoreboard(){
        $("iframe").attr("src","scoreboard.php");
        $("iframe").css({display: "block"});
        $("#popup_bg").css({display: "block"});
        $("#buttonScoreboard").css({display: "block"});
        $("#buttonScoreboard").animate({opacity: 1},"slow");
        $("iframe").animate({opacity: 1},"slow");
        
    }
    function puntenPop(){
        $(function(){
            $("#punten").animate({fontSize: '220px'}, { duration: 1000, queue: false });
            $("#punten").animate({marginTop: '320px'}, { duration: 1000, queue: false });
            $("#punten").animate({marginLeft: '80px'}, { duration: 1000, queue: false });
            $("#punten2").animate({fontSize: '220px'}, { duration: 1000, queue: false });
            $("#punten2").animate({marginTop: '330px'}, { duration: 1000, queue: false });
            $("#punten2").animate({marginLeft: '950px'}, { duration: 1000, queue: false });
            setTimeout(function(){
                $("#punten").animate({fontSize: '50px'}, { duration: 1000, queue: false });
                $("#punten").animate({marginTop: '100px'}, { duration: 1000, queue: false });
                $("#punten").animate({marginLeft: '20px'}, { duration: 1000, queue: false });
                $("#punten2").animate({fontSize: '50px'}, { duration: 1000, queue: false });
                $("#punten2").animate({marginTop: '100px'}, { duration: 1000, queue: false });
                $("#punten2").animate({marginLeft: '200px'}, { duration: 1000, queue: false }); 
            },1800);
        });
    }
    function numTeller(){
            randomNum = Math.floor((Math.random() * 100) + 1);
            $("#beginnum").text(randomNum);
            
    }
    function numMaker(){
        huidigenum = Math.floor((Math.random() * 100) + 1);
        $("#huidigenum").text(huidigenum);
    }
    function goedgeraden(){
        puntup.pause();
        puntup.currentTime = 0;
        puntup.play();
        vorigenum = huidigenum;
        numMaker();
        punterbij();
    }
    function foutgeraden(){
        puntdown.pause();
        puntdown.currentTime = 0;
        puntdown.play();
        vorigenum = huidigenum;
        numMaker();
        punteraf();
    }
    function punteraf(){
        score --;
        $("#punten2").text(score);
    }
    function punterbij(){
        score ++;
        $("#punten2").text(score);
    }
});