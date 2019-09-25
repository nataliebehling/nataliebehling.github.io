$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#mrbutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrone").addClass("movemr");
        $("#mrtwo").addClass("movemr");
        $(".mr-content").removeClass("invisible");
        $(".mrs-content").addClass("invisible");
    });

    $('#mrsbutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrsone").addClass("movemrs");
        $("#mrstwo").addClass("movemrs");
        $(".mr-content").addClass("invisible");
        $(".mrs-content").removeClass("invisible");
    
    });

    $('#familybutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrsone").removeClass("movemrs");
        $("#mrstwo").removeClass("movemrs");
        $("#mrone").removeClass("movemr");
        $("#mrtwo").removeClass("movemr");
        $(".mr-content").removeClass("invisible");
        $(".mrs-content").removeClass("invisible");
    
    });

});
