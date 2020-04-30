$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    
    
    
    
     $('#hispanic').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
             $("#chicago-hispanic-pop").removeClass("invisible");
         
    });
    
    
    $('#black').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").removeClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
         
    });
    
    $('#covid19').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").removeClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
         
    });

   
});