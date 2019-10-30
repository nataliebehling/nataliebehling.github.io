$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#iso1').click(function () {
        //ID or Class name of the modal you want to appear son click goes into this second area.
        $("#ap-button-iso1").addClass("visible");
        $(".ap-button-iso2").removeClass("visible");
        $(".ap-button-iso3").removeClass("visible");
        $(".sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
    });
    
    $('#iso2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#ap-button-iso1").removeClass("visible");
        $(".ap-button-iso2").addClass("visible");
        $(".ap-button-iso3").removeClass("visible");
        $(".sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
    });
    
    $('#iso3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#ap-button-iso1").removeClass("visible");
        $(".ap-button-iso2").removeClass("visible");
        $(".ap-button-iso3").addClass("visible");
        $(".sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
    });
    
    $('#iso1-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").addClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso1-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").addClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso1-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").addClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
    });
    
    $('#iso2-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").addClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso2-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").addClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso2-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").addClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso3-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").addClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso3-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").addClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    $('#iso3-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").removeClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").addClass("visible");
        
        
    });
    
    $('#iso1-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#sh-button-iso1-ap1").removeClass("visible");
        $(".sh-button-iso2-ap1").removeClass("visible");
        $(".sh-button-iso3-ap1").removeClass("visible");
        $(".sh-button-iso1-ap2").addClass("visible");
        $(".sh-button-iso1-ap3").removeClass("visible");
        $(".sh-button-iso2-ap2").removeClass("visible");
        $(".sh-button-iso2-ap3").removeClass("visible");
        $(".sh-button-iso3-ap2").removeClass("visible");
        $(".sh-button-iso3-ap3").removeClass("visible");
        
        
    });
    
    
    
    
    
   
});
