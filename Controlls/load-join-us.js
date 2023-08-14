$(document).ready(function() {
    const showPopupButton = $('#temp-btn-for-test');
    const popupContainer = $('#popup-container-temp');
    console.log(showPopupButton);
    console.log(popupContainer);
    let popupLoaded = false;

    showPopupButton.click(function() {
        if (!popupLoaded) {

            $.get('../Components/JoinUs.html', function(data) {
                
                popupContainer.html(data);
                popupLoaded = true;

                $('#join-us-popup').removeClass('inactive-popup');
            });
        } else {
            
            $('#join-us-popup').toggleClass('inactive-popup');
        }
    });
});


