$(document).ready(function() {
  const popUpBtn = $('.shortPopUp');
  const popUpContainer = $('#co');
  console.log(popUpBtn);
  console.log(popUpContainer);
  let popupShown = false;
  popUpBtn.click(function(){
    if(!popupShown){
      $.get('/Views/footer.html', function(data){
        popUpContainer.html(data);
        popupShown = true;
        $('#threeinone').removeClass('inactive-popup');
      })
    }else{
      $('#threeinone').toggleClass('inactive-popup');
    }
  })
})