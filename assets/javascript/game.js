$(document).ready(function() {
var wins = 0;
var losses = 0;
var score = 0;


function beginGame() {

    var box1 = "";
    var box2 = "";
    var box3 = "";
    var box4 = "";
    var target = "";

    


    function resetNumbers() {

        $(targetScore, box1, box2, box3, box4).empty();
        box1 = Math.floor(Math.random() * 3) + 1;
        box2 = Math.floor(Math.random() * 3) + 4;
        box3 = Math.floor(Math.random() * 3) + 7;
        box4 = Math.floor(Math.random() * 3) + 10;
        target = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").html(target);
    }

    resetNumbers();

   
   function checkIfOver() {
    if (score > target) {
        alert("too High");
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#userScore").empty();
        score = 0;
        resetNumbers();
    } else if (score === target) {
        alert("You won");
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#userScore").empty();
        score = 0;
        resetNumbers();
    };
}


$("#box1-3").click( function() {
    score += box1;
    $("#userScore").text(score);
    checkIfOver();

});

$("#box4-6").click( function() {
    score += box2;
    $("#userScore").text(score);
    checkIfOver();
});

$("#box7-9").click( function() {
    score += box3;
    $("#userScore").text(score);
    checkIfOver();
});

$("#box10-12").click( function() {
    score += box4;
    $("#userScore").text(score);
    checkIfOver();
});
}

beginGame();

});
