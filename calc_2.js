// Event binding
// we are attaching an event with a function
// whenever event is triggered, the function will be called

// adding load event - we want to load HTML first
// window.addEventListener("load", function() {
//     document.querySelector("#btn-1").addEventListener("click", add);
// });

window.addEventListener("load", initEvents);

var box_1;
var box_2;

function initEvents() {
    box_1 = document.querySelector("#box_1");
    box_2 = document.querySelector("#box_2");

    document.querySelector("#btn-1").addEventListener("click", calc);
    document.querySelector("#btn-2").addEventListener("click", calc);
    document.querySelector("#btn-3").addEventListener("click", calc);
    document.querySelector("#btn-4").addEventListener("click", calc);
}

function calc() {

    // this refers to current object
    // here this refers to the button on which user will click
    // console.log(this);
    // console.log(this.innerText);

    var operator = this.innerText;
    if(operator == "+") {
        result = parseInt(box_1.value) + parseInt(box_2.value);
    }
    else if(operator == "-") {
        result = parseInt(box_1.value) - parseInt(box_2.value);
    }
    else if(operator == "/") {
        result = parseInt(box_1.value) / parseInt(box_2.value);
    }
    else if(operator == "*") {
        result = parseInt(box_1.value) * parseInt(box_2.value);
    }

    document.querySelector("#result").innerText = result;
}
