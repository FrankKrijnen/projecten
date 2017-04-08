var teller = 1;
var begonnen = false;
var speler1 = "";
var speler2 = "";
var game = 1;
var speler1_wins = 0;
var speler2_wins = 0;
var speler1_loss = 0;
var speler2_loss = 0;
var speler1_remise = 0;
var speler2_remise = 0;
var pvp = false;
var pve = false;
var ai_run = false;
var klaar = false;
var heeftgewonnen = false;
var ai_getest = false;
var ai_getest2 = false;


$(document).ready(function() {
    
    $("#pvp").click(function(){
        if (begonnen == false){
            $("#pvp").css("background-color", "green")
            document.getElementById("start").disabled = false;
            $("#popup").css({display: "flex"});
            $("#popupklein").css({display: "flex"});
            pvp = true;
};
});

    $("#pve").click(function() {
        if (begonnen == false){
            $("#pve").css("background-color", "green")
            document.getElementById("start").disabled = false;
            $("#popup").css({display: "flex"});
            $("#popupklein").css({display: "flex"});
            $("#input_speler2").val("AI");
            $("#input_speler2").attr('readonly', 'readonly');
            pve = true;
        }
    })
});



$(document).ready(function() {
    $("#popupbutton").click(function() {
        if (document.getElementById("input_speler1").value != "" && document.getElementById("input_speler2").value != ""){
        speler1 = document.getElementById("input_speler1").value + "(x)";
        speler2 = document.getElementById("input_speler2").value + "(o)";
        $("#versus").css({display: "flex"});
        $("#popup").css({display: "none"});
        $("#popupklein").css({display: "none"});
        $("#speler1_titel").html(speler1);
        $("#speler2_titel").html(speler2);
        $("#potje_num").html(game);
        $("#arrow_left").css({display: "flex"});
        $("#arrow_right").css({display: "flex"});
        }
        else {
            alert("1 of meerdere tekstvakken zijn leeg!!");
        }
    })
})
$(document).ready(function() {
    $("#volgende_btn").click(function() {
        $("#scoreboard").css({display: "none"});
        $("#popupklein").css({display: "none"});
        $("#vak1").html("");
        $("#vak2").html("");
        $("#vak3").html("");
        $("#vak4").html("");
        $("#vak5").html("");
        $("#vak6").html("");
        $("#vak7").html("");
        $("#vak8").html("");
        $("#vak9").html("");
        $("#speler1_titel").css({backgroundColor: "green"});
        $("#speler2_titel").css({backgroundColor: ""});
        game++;
        $("#potje_num").html(game);
        teller = 1;
        heeftgewonnen = false;
        klaar = false;
    })
    $("#reset").click(function() {
        location.reload();
    })
})


$(document).ready(function(){
    $("#start").click(function(){
        if (pvp == true){
            $("#start").hide();
            $("#arrow_left").css({display: "none"});
            $("#arrow_right").css({display: "none"});
            document.getElementById("start").disabled = true;
            $("#begin").animate({opacity:1, fontSize: "300px"},1000)
            $("#begin").animate({opacity:0},1000)
            $("#begin").animate({fontSize: "0px"})
            $("#speler1_titel").css({backgroundColor: "green"});
            begonnen = true;
        }
        else if (pve == true){
            $("#start").hide();
            $("#arrow_left").css({display: "none"});
            $("#arrow_right").css({display: "none"});
            document.getElementById("start").disabled = true;
            $("#begin").animate({opacity:1, fontSize: "300px"},1000)
            $("#begin").animate({opacity:0},1000)
            $("#begin").animate({fontSize: "0px"})
            $("#speler1_titel").css({backgroundColor: "green"});
            begonnen = true;
        }
    });
});
    

$(document).ready(function() {
    
    function XofO(i){
        mystring = "#vak" + i;
        mystring2 = "vak" + i;
        gevuld = document.getElementById(mystring2).innerHTML;
        
        if (begonnen == true && teller == 1 && gevuld == ""){
            $(mystring).html("x");
            $("#speler2_titel").css({backgroundColor: "green"});
            $("#speler1_titel").css({backgroundColor: ""});
            teller = 2;
        }
        else if (begonnen == true && teller == 2 && gevuld == "" && pve == false){
            $(mystring).html("o");
            $("#speler1_titel").css({backgroundColor: "green"});
            $("#speler2_titel").css({backgroundColor: ""});
            teller = 1;
        }
        check();
        
    }
    function gewonnen(vld1,vld2,vld3){
        
        if (vld1 != "" && vld1 == vld2 && vld2 == vld3 && heeftgewonnen == false){
            klaar = true;
            heeftgewonnen = true;
            $("#gewonnen").html(vld1 + " won!")
            $("#gewonnen").animate({opacity:1, fontSize: "250px"},1000)
            $("#gewonnen").animate({opacity:0},1000)
            $("#gewonnen").animate({fontSize: "0px"})
            setTimeout(function(){$("#scoreboard").css({display: "flex"})
            $("#popupklein").css({display: "flex"}); }, 2000);
            if (vld2 == "x"){
                speler1_wins++;
                speler2_loss++;
            }
            else if (vld2 == "o"){
                speler2_wins++;
                speler1_loss++;
            }
            $("#wins_speler1").html(speler1_wins);
            $("#wins_speler2").html(speler2_wins);
            $("#loss_speler1").html(speler1_loss);
            $("#loss_speler2").html(speler2_loss);
            $("#remise_speler1").html(speler1_remise);
            $("#remise_speler2").html(speler2_remise);
            $("#score_speler1").html(speler1+":");
            $("#score_speler2").html(speler2+":");
            
        }
    }
    
    $("#vak1").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(1);
            computerzet();
        }
    })
    $("#vak2").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(2);
            computerzet();
        }
    })
    $("#vak3").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(3);
            computerzet();
        }
    })
    $("#vak4").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(4);
            computerzet();
        }
    })
    $("#vak5").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(5);
            computerzet();
        }
    })
    $("#vak6").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(6);
            computerzet();
        }
    })
    $("#vak7").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(7);
            computerzet();
        }
    })
    $("#vak8").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(8);
            computerzet();
        }
    })
    $("#vak9").click(function() {
        if (ai_run == false && begonnen == true){
            XofO(9);
            computerzet();
        }
    })
    function computerzet(){
        if (pve == true && klaar == false){
            ai_run = true;
            setTimeout(function(){
            if (document.getElementById("selectpve").value == "moeilijk"){
                ai_calc();
                teller = 1;
                $("#speler1_titel").css({backgroundColor: "green"});
                $("#speler2_titel").css({backgroundColor: ""});
                check();
                ai_run = false;
            }
            if (document.getElementById("selectpve").value == "makkelijk" || ai_getest2 == false){
            zet = Math.floor((Math.random() * 9) + 1);
                while ("" != document.getElementById("vak" + zet).innerHTML){
                    zet = Math.floor((Math.random() * 9) + 1);
                }
            document.getElementById("vak" + zet).innerHTML = "o";
            $("#speler1_titel").css({backgroundColor: "green"});
            $("#speler2_titel").css({backgroundColor: ""});
            teller = 1;
            check();
            ai_run = false;
            ai_getest2 = false;
            }
            ;}, 1500);
        }
    }
    function ai_calc(){
        var num1 = 0;
        var num2 = 0;
        var num3 = 0;
        var num4 = 0;
        var num5 = 0;
        var num6 = 0;
        var num7 = 0;
        var num8 = 0;
        var num9 = 0;
        if (document.getElementById("vak1").innerHTML == "x"){
            num1 = 1;
        }
        if (document.getElementById("vak2").innerHTML == "x"){
            num2 = 1;
        }
        if (document.getElementById("vak3").innerHTML == "x"){
            num3 = 1;
        }
        if (document.getElementById("vak4").innerHTML == "x"){
            num4 = 1;
        }
        if (document.getElementById("vak5").innerHTML == "x"){
            num5 = 1;
        }
        if (document.getElementById("vak6").innerHTML == "x"){
            num6 = 1;
        }
        if (document.getElementById("vak7").innerHTML == "x"){
            num7 = 1;
        }
        if (document.getElementById("vak8").innerHTML == "x"){
            num8 = 1;
        }
        if (document.getElementById("vak9").innerHTML == "x"){
            num9 = 1;
        }
        if (document.getElementById("vak1").innerHTML == "o"){
            num1 = 10;
        }
        if (document.getElementById("vak2").innerHTML == "o"){
            num2 = 10;
        }
        if (document.getElementById("vak3").innerHTML == "o"){
            num3 = 10;
        }
        if (document.getElementById("vak4").innerHTML == "o"){
            num4 = 10;
        }
        if (document.getElementById("vak5").innerHTML == "o"){
            num5 = 10;
        }
        if (document.getElementById("vak6").innerHTML == "o"){
            num6 = 10;
        }
        if (document.getElementById("vak7").innerHTML == "o"){
            num7 = 10;
        }
        if (document.getElementById("vak8").innerHTML == "o"){
            num8 = 10;
        }
        if (document.getElementById("vak9").innerHTML == "o"){
            num9 = 10;
        }
        ai_getest2 = false;
        ai_test(num1,num2,num3,1,2,3);
        ai_test(num4,num5,num6,4,5,6);
        ai_test(num7,num8,num9,7,8,9);
        ai_test(num1,num4,num7,1,4,7);
        ai_test(num2,num5,num8,2,5,8);
        ai_test(num3,num6,num9,3,6,9);
        ai_test(num1,num5,num9,1,5,9);
        ai_test(num3,num5,num7,3,5,7);
        if (ai_getest == true){
            document.getElementById("vak" + rtest).innerHTML = "o";
            ai_getest = false;
        }
            
        
    }

function ai_test(test1,test2,test3,test11,test12,test13){
    if (ai_getest == false){
    if (test1 + test2 + test3 == 2){
            if (test1 == 0){
                rtest = test11;
                ai_getest = true;
                ai_getest2 = true;
            }
            if (test2 == 0){
                rtest = test12;
                ai_getest = true;
                ai_getest2 = true;
            }
            if (test3 == 0){
                rtest = test13;
                ai_getest = true;
                ai_getest2 = true;
            }
        }
    }
}
    
    
    
    
    
    function check(){
        gevuld1 = document.getElementById("vak1").innerHTML;
        gevuld2 = document.getElementById("vak2").innerHTML;
        gevuld3 = document.getElementById("vak3").innerHTML;
        gevuld4 = document.getElementById("vak4").innerHTML;
        gevuld5 = document.getElementById("vak5").innerHTML;
        gevuld6 = document.getElementById("vak6").innerHTML;
        gevuld7 = document.getElementById("vak7").innerHTML;
        gevuld8 = document.getElementById("vak8").innerHTML;
        gevuld9 = document.getElementById("vak9").innerHTML;
        gewonnen(gevuld1,gevuld2,gevuld3);
        gewonnen(gevuld4,gevuld5,gevuld6);
        gewonnen(gevuld7,gevuld8,gevuld9);
        gewonnen(gevuld1,gevuld4,gevuld7);
        gewonnen(gevuld2,gevuld5,gevuld8);
        gewonnen(gevuld3,gevuld6,gevuld9);
        gewonnen(gevuld1,gevuld5,gevuld9);
        gewonnen(gevuld3,gevuld5,gevuld7);
        if (heeftgewonnen == false && gevuld1 != "" && gevuld2 != "" && gevuld3 != "" && gevuld4 != "" && gevuld5 != "" && gevuld6 != "" && gevuld7 != "" && gevuld8 != "" && gevuld9 != "" ){
            klaar = true;
            $("#remise").animate({opacity:1, fontSize: "220px"},1000)
            $("#remise").animate({opacity:0},1000)
            $("#remise").animate({fontSize: "0px"})
            setTimeout(function(){$("#scoreboard").css({display: "flex"})
            $("#popupklein").css({display: "flex"}); }, 2000);
            speler1_remise++;
            speler2_remise++;
            $("#wins_speler1").html(speler1_wins);
            $("#wins_speler2").html(speler2_wins);
            $("#loss_speler1").html(speler1_loss);
            $("#loss_speler2").html(speler2_loss);
            $("#remise_speler1").html(speler1_remise);
            $("#remise_speler2").html(speler2_remise);
            $("#score_speler1").html(speler1+":");
            $("#score_speler2").html(speler2+":");
        }
    }
})
