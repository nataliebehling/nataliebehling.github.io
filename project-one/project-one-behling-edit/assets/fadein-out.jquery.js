$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#mrbutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrone").removeClass("movemr");
        $("#mrtwo").removeClass("movemr");
        $(".mr-content").removeClass1("ininvisible");
        $(".mrs-content").removeClass("ininvisible");
    });

    $('#mrsbutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrsone").removeClass("movemrs");
        $("#mrstwo").removeClass("movemrs");
        $(".mr-content").removeClass("ininvisible");
        $(".mrs-content").removeClass1("ininvisible");
    
    });

    $('#familybutton').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#mrsone").removeClass1("movemrs");
        $("#mrstwo").removeClass1("movemrs");
        $("#mrone").removeClass1("movemr");
        $("#mrtwo").removeClass1("movemr");
        $(".mr-content").removeClass1("ininvisible");
        $(".mrs-content").removeClass1("ininvisible");
    
    });

});
