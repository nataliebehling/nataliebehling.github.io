$(document).ready(function () {
    //ID or Class name of the button goes into the first section





    $('#foodstamps').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").removeClass("invisible");

    });

    $('#income').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-income").removeClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });


    $('#asian').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-asian-pop").removeClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });



    $('#white').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-white-pop").removeClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });


    $('#hispanic').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-hispanic-pop").removeClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });


    $('#black').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").removeClass("invisible");
        $("#chicago-covid19").addClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });

    $('#covid19').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#chicago-black-pop").addClass("invisible");
        $("#chicago-covid19").removeClass("invisible");
        $("#chicago-hispanic-pop").addClass("invisible");
        $("#chicago-white-pop").addClass("invisible");
        $("#chicago-asian-pop").addClass("invisible");
        $("#chicago-income").addClass("invisible");
        $("#chicago-foodstamps").addClass("invisible");

    });


});
