var calcButtons = $(".card-body")
var result = $("#results")
var topNum = $("#first-number")
var operator = $("#operator")
var bottomNum = $("#second-number")
var pushNum = $("#first-number")

var numBtn = $(".number")
var opBtn = $(".operator")
var equalBtn = $(".equal")
var clearBtn = $(".clear")

var opHit = 0;
var equation = "";


numBtn.on("click", function(e) {

    e.preventDefault();
    var firstNumber = ($(this).attr("value"))
    pushNum.append(firstNumber)
})

opBtn.on("click", function(e) {
    e.preventDefault();
    if (opHit === 1){
        return;
    }
    pushNum = $("#second-number")
    var opNum = "";
    if (($(this).attr("value")) === "plus") {
        opNum = "+";
        equation = "+";
    } 
    else if (($(this).attr("value")) === "minus") {
        opNum = "-";
        equation = "-";
    }
    else if (($(this).attr("value")) === "times") {
        opNum = "x";
        equation = "*";
    }
    else if (($(this).attr("value")) === "divide") {
        opNum = "/";
        equation = "/";
    }
    operator.text(opNum);
    opHit++;
});

equalBtn.on("click", function(e) {
    e.preventDefault;
    var x = topNum.text();
    var y = bottomNum.text();
    console.log(x + equation + y);

});

opBtn.on('click', function (e) {
    e.preventDefault();
    var opNum = ($(this).attr("value"))
    operator.append(opNum)

    if (($(this).attr('value')) === 'plus') {
        opNum = '+';
    }
    else if (($(this).attr('value')) === 'minus')
     { opNum = '-'; }
    else if (($(this).attr('value')) === 'times')
     { opNum = 'x'; }
    else if (($(this).attr('value')) === 'divide')
     { opNum = '/';
    }

    else { opNum = '^'; } console.log(opNum);
});
