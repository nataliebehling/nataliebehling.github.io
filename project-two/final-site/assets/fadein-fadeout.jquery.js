$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('#iso1').click(function () {
        //ID or Class name of the modal you want to appear son click goes into this second area#
        $("#ap-button-iso1").addClass("visible");
        $("#ap-button-iso2").removeClass("visible");
        $("#ap-button-iso3").removeClass("visible");
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
    });

    $('#iso2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ap-button-iso1").removeClass("visible");
        $("#ap-button-iso2").addClass("visible");
        $("#ap-button-iso3").removeClass("visible");
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
    });

    $('#iso3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ap-button-iso1").removeClass("visible");
        $("#ap-button-iso2").removeClass("visible");
        $("#ap-button-iso3").addClass("visible");
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
    });

    $('#iso1-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").addClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").addClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").addClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")

    });

    $('#iso2-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").addClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").addClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").addClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").addClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").addClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").removeClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").addClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#sh-button-iso1-ap1").removeClass("visible");
        $("#sh-button-iso2-ap1").removeClass("visible");
        $("#sh-button-iso3-ap1").removeClass("visible");
        $("#sh-button-iso1-ap2").addClass("visible");
        $("#sh-button-iso1-ap3").removeClass("visible");
        $("#sh-button-iso2-ap2").removeClass("visible");
        $("#sh-button-iso2-ap3").removeClass("visible");
        $("#sh-button-iso3-ap2").removeClass("visible");
        $("#sh-button-iso3-ap3").removeClass("visible");
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap1-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").addClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap1-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").addClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap1-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").addClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap1-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").addClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap1-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").addClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap1-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").addClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").addClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap1-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").addClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap1-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").addClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap1-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").addClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap2-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").addClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap2-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").addClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").addClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap2-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").addClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap3-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").addClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap3-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").addClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso1-ap3-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").addClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap2-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").addClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap2-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").addClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap2-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").addClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap3-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").addClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap3-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").addClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso2-ap3-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").addClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap2-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").addClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap2-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").addClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap2-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").addClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap3-shu1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").addClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap3-shu2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").addClass("visible");
        $("#ic-iso3-ap3-sh3").removeClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")


    });

    $('#iso3-ap3-shu3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#ic-iso2-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh1").removeClass("visible");
        $("#ic-iso2-ap1-sh1").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#ic-iso1-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh1").removeClass("visible");
        $("#ic-iso1-ap1-sh2").removeClass("visible");
        $("#ic-iso1-ap1-sh3").removeClass("visible");
        $("#ic-iso2-ap2-sh1").removeClass("visible");
        $("#ic-iso2-ap2-sh2").removeClass("visible");
        $("#ic-iso2-ap2-sh3").removeClass("visible");
        $("#ic-iso2-ap1-sh2").removeClass("visible");
        $("#ic-iso2-ap3-sh2").removeClass("visible");
        $("#ic-iso1-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh1").removeClass("visible");
        $("#ic-iso3-ap3-sh2").removeClass("visible");
        $("#ic-iso3-ap3-sh3").addClass("visible");
        $("#ic-iso1-ap3-sh3").removeClass("visible");
        $("#ic-iso2-ap3-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap2-sh3").removeClass("visible");
        $("#ic-iso1-ap2-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh2").removeClass("visible");
        $("#ic-iso3-ap2-sh1").removeClass("visible");
        $("#ic-iso1-ap3-sh2").removeClass("visible");
        $("#ic-iso2-ap1-sh3").removeClass("visible");
        $("#ic-iso3-ap1-sh1").removeClass("visible");
        $("#image-iso1-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso3-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh1").addClass("invisible")
        $("#image-iso1-ap1-sh2").addClass("invisible")
        $("#image-iso1-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap2-sh1").addClass("invisible")
        $("#image-iso2-ap2-sh2").addClass("invisible")
        $("#image-iso2-ap2-sh3").addClass("invisible")
        $("#image-iso2-ap1-sh1").addClass("invisible")
        $("#image-iso2-ap1-sh2").addClass("invisible")
        $("#image-iso2-ap3-sh2").addClass("invisible")
        $("#image-iso1-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh1").addClass("invisible")
        $("#image-iso3-ap3-sh2").addClass("invisible")
        $("#image-iso3-ap3-sh3").addClass("invisible")
        $("#image-iso1-ap3-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh3").addClass("invisible")
        $("#image-iso3-ap2-sh3").addClass("invisible")
        $("#image-iso1-ap2-sh3").addClass("invisible")
        $("#image-iso3-ap1-sh2").addClass("invisible")
        $("#image-iso3-ap2-sh1").addClass("invisible")
        $("#image-iso1-ap3-sh2").addClass("invisible")
        $("#image-iso2-ap1-sh3").addClass("invisible")
        $("#image-iso2-ap3-sh1").addClass("invisible")

    });
    $('#ic-iso1-ap1-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap1-sh1").removeClass("invisible")

    });
    

    $('#ic-iso2-ap1-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap1-sh1").removeClass("invisible")

    });
    
    $('#ic-iso3-ap1-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap1-sh1").removeClass("invisible")

    });
    
    $('#ic-iso1-ap2-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap2-sh1").removeClass("invisible")

    });
    
    $('#ic-iso1-ap1-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap1-sh2").removeClass("invisible")

    });
    
    $('#ic-iso1-ap1-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap2-sh2").removeClass("invisible")

    });
    
    $('#ic-iso2-ap2-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap2-sh1").removeClass("invisible")

    });


    $('#ic-iso2-ap2-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap2-sh2").removeClass("invisible")

    });
    
    $('#ic-iso2-ap2-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap2-sh3").removeClass("invisible")

    });
    
    $('#ic-iso2-ap1-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap1-sh2").removeClass("invisible")

    });
    
    $('#ic-iso2-ap3-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap3-sh2").removeClass("invisible")

    });
    
    $('#ic-iso1-ap2-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap2-sh2").removeClass("invisible")

    });
    
    $('#ic-iso3-ap2-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap2-sh2").removeClass("invisible")

    });
    
    $('#ic-iso3-ap3-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap3-sh1").removeClass("invisible")

    });
    
     $('#ic-iso1-ap3-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap3-sh1").removeClass("invisible")

    });
        
    $('#ic-iso2-ap3-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap3-sh3").removeClass("invisible")

    });
        
    $('#ic-iso2-ap3-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap3-sh1").removeClass("invisible")

    });
        
    $('#ic-iso3-ap1-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap1-sh3").removeClass("invisible")

    });
        
    $('#ic-iso3-ap2-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap2-sh3").removeClass("invisible")

    });
        
    $('#ic-iso1-ap2-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap2-sh3").removeClass("invisible")

    });
        
    $('#ic-iso3-ap1-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap1-sh2").removeClass("invisible")

    });
        
    $('#ic-iso3-ap2-sh1').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap2-sh1").removeClass("invisible")

    });
        
    $('#ic-iso1-ap3-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso1-ap3-sh2").removeClass("invisible")

    });
        
    $('#ic-iso2-ap1-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap1-sh3").removeClass("invisible")

    });
    
    $('#ic-iso3-ap3-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap3-sh3").removeClass("invisible")

    });
    
    $('#ic-iso3-ap3-sh2').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso3-ap3-sh2").removeClass("invisible")

    });
    
    $('#ic-iso2-ap3-sh3').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area#
        $("#image-iso2-ap3-sh3").removeClass("invisible")

    });



});
