var bigTextArea = $("#bigtextarea");
var bigTextArea2 = $("#bigtextarea2");
document.getElementById("bigtextarea").addEventListener("inputchange", function(event) {
  bigTextArea2.val(bigTextArea.val());
  // document.getElementById("bigtextarea").autoResize();
  // document.getElementById("bigtextarea2").autoResize();
  // false to avoid refresh
  return false;
});

function check(element) {
  var textarea2 = document.getElementById("bigtextarea"),
    event = new Event('inputchange');
  textarea2.value = element.value;
  textarea2.dispatchEvent(event);
};
var text = ""
document.getElementById("bigtextarea").addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('Space pressed')
  }
})

// var $formInputs;
// $("#copy-form").submit(function() {
//     console.log("copy v="+bigTextArea.val());
//
//
//     bigTextArea2.val(bigTextArea.val());
//     console.log("after submit")
//
//     // false to avoid refresh
//     return false;
// });
