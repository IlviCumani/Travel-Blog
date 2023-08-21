// $(document).ready(function() {
//   // const popUpBtn = $('.');
//   const popUpContainer = $('#threeInOne-popup-container');
//   // console.log(popUpBtn);
//   console.log(popUpContainer);
//   let popupShown = false;
//   $('.popup-button').click(function(){
//     if(!popupShown){
//       $.get('../Views/threeInOnePage.html', function(data){
//         popUpContainer.html(data);
//         popupShown = true;
//         $('#threeinone').removeClass('inactive-popup');
//       })
//     }else{
//       $('#threeinone').toggleClass('inactive-popup');
//     }
//   })
// });
$(document).ready(function() {
  const popUpContainer = $('#threeInOne-popup-container');
  let popupShown = false;

  $('.popup-button').click(function(){
    if(!popupShown){
      $.get('../Views/threeInOnePage.html', function(data){
        popUpContainer.html(data);
        popupShown = true;
        $('#threeinone').removeClass('inactive-popup');

        // Scroll to the desired section based on the button clicked
        const buttonId = $(this).attr('id');
        const sectionId = `${buttonId}-section`;
        scrollToSection(sectionId);
      }.bind(this)); // Bind the click context to the callback function
    }else{
      $('#threeinone').toggleClass('inactive-popup');
    }
  });

  // Function to scroll to a section by its ID
  function scrollToSection(sectionId) {
    $('html, body').animate({
      scrollTop: $(`#${sectionId}`).offset().top
    }, 500); // Adjust the scrolling speed as needed
  }
});
