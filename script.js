var calcButtons = $(".card-body")
var result = $("#results")
var topNum = $("#first-number")
var operator = $("#operator")
var bottomNum = $("#second-number")

var numBtn = $(".number")
var opBtn = $(".operator")
var equalBtn = $(".equal")
var clearBtn = $(".clear")

numBtn.on("click", function(e) {
    e.preventDefault();
    var firstNumber = ($(this).attr("value"))
    topNum.append(firstNumber)

})