$(document).ready(function() {
  // $(this).on("input", function (event) {
  //   console.log(event);//input event and all data about event
  //   console.log(event.target)//selects textarea specifically
  //   console.log(event.target.parent.counter); //
  //   console.log(event.originalEvent.data); //key pressed
  //   if (event.originalEvent.data !== null) {
  //     $('#counter').on('input', function () {
  //       counter.val()--;
  //     })
  //   } else if (event.originalEvent.data === null) {
  //     counter++;
  //   }
  const count = $(".counter").val();
  $('#tweet-text').keyup(() => {
    let string = $("#tweet-text").val();
    $('.counter').val(count - string.length)
  });
  //add in colour changing
  if (count < 0) {
    $(`.counter`).css('color', 'red')
  }
  if (count >= 0) {
    $(`.counter`).css('color', 'rgb(182, 176, 167)')
  }
});


//should try to replace direct references to counter using this
//will likely need to use binding to keep this right


// document.addEventListener('input', function () {
//   console.log(this);
// });