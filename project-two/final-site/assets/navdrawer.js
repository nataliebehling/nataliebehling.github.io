$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('.openbtn').click(function () {
        //ID or Class name of the modal you want to appear son click goes into this second area#
        $("#mySidepanel").removeClass("drawer"); 
    });
    
    $('.closebtn').click(function () {
        //ID or Class name of the modal you want to appear son click goes into this second area#
        $("#mySidepanel").addClass("drawer"); 
    });
});


//HTML CODE ASSOCIATED WITH THIS// DELETE THIS

