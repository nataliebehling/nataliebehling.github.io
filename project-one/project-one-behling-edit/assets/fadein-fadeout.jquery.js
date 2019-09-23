$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#mr-button').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".mr-content").removeClass("invisible");
        $(".mrs-content").addClass("invisible");
    });
    
     $('#mrs-button').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".mr-content").addClass("invisible");
        $(".mrs-content").removeClass("invisible");
    });
    
     $('#family-button').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".mr-content").removeClass("invisible");
        $(".mrs-content").removeClass("invisible");
    });

});
