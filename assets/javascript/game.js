$(document).ready(function() {

var box1 = Math.floor(Math.random() * 3) + 1;
var box2 = Math.floor(Math.random() * 3) + 4;
var box3 = Math.floor(Math.random() * 3) + 7;
var box4 = Math.floor(Math.random() * 3) + 10;
var target = Math.floor(Math.random() * 102) + 19;
var score = 0;
var wins = 0;
var losses = 0;


function beginGame() {
$("#targetScore").html(target);
}

$("#box1-3").click( function() {
    score += box1;
    $("#userScore").text(score);
    if (score > target) {
        alert("too High");
        $("body").text("OVER");
        setTimeout(beginGame, 1000);
    } else if (score === target) {
        alert("You won");
        $("body").text("OVER");
        setTimeout(beginGame, 1000);
    };
});

$("#box4-6").click( function() {
    score += box2;
    $("#userScore").text(score);
    if (score > target) {
        alert("too High");
    } else if (score === target) {
        alert("You won");
    };
});

$("#box7-9").click( function() {
    score += box3;
    $("#userScore").text(score);
    if (score > target) {
        alert("too High");
    } else if (score === target) {
        alert("You won");
    };
});

$("#box10-12").click( function() {
    score += box4;
    $("#userScore").text(score);
    if (score > target) {
        alert("too High");
    } else if (score === target) {
        alert("You won");
    };
});


beginGame();

});
