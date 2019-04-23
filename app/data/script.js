$(function () {

    $('#submitButton').on('click', function (event) {
        console.log('click heard');
        event.preventDefault();
        var userInput = {
            name: $('#userName').val().trim(),
            photo: $('#userPhoto').val().trim(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        };

        $.post('api/friends', userInput)
            .done(function (data) {
                $('#userMatch').html(data.matchName);
                $("#userMatchImage").attr("src", data.matchImage);
                $('#modal1').modal();
            });
    });
});