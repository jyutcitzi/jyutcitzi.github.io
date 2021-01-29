function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
    var bigTextArea2 = document.getElementById("bigtextarea2")
    bigTextArea2.style.height = "5px";
    bigTextArea2.style.height = (bigTextArea2.scrollHeight)+"px";
    // .style.height = element.style.height
}


console.log("before submit")
printLocalStorageValue();
console.log("tes2t")
var bigTextArea = $("#bigtextarea");
var bigTextArea2 = $("#bigtextarea2");
console.log("test")
// pre-fill input if previously given (i.e., exists in localStorage)
if (localStorage.bigTextArea !== "undefined") {
    bigTextArea.val(localStorage.bigTextArea);
    bigTextArea2.val(localStorage.bigTextArea2);

    auto_grow(document.getElementById("bigtextarea"));
}

var $formInputs;
$("#the-form").submit(function() {
    console.log("bigtextarea v="+bigTextArea.val());
    console.log("bigtextarea2 v="+bigTextArea2.val());

    // locally store value if given
    if (bigTextArea.val() !== null && bigTextArea.val() !== "") {
        localStorage.bigTextArea = bigTextArea.val();
        localStorage.bigTextArea2 = bigTextArea2.val();
    }

    console.log("after submit")
    printLocalStorageValue();

    // // update submit button
    // $("#submit-btn").val("submitted")

    // false to avoid refresh
    return false;
});

function printLocalStorageValue() {
    console.log("localStorage bigTextArea="+localStorage.bigTextArea);
    console.log("localStorage bigTextArea2="+localStorage.bigTextArea2);
}
