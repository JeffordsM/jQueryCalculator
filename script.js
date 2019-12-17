var calcButtons = $(".card-body")
var result = $("#results")
var topNum = $("#first-number")
var operator = $("#operator")
var bottomNum = $("#second-number")
// var currentBox = $('.printHere')

var numBtn = $(".number")
var opBtn = $(".operator")
var equalBtn = $(".equal")
var clearBtn = $(".clear")








numBtn.on("click", function (e) {
    e.preventDefault();
    var firstNumber = ($(this).attr("value"))
    topNum.append(firstNumber)

})

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





