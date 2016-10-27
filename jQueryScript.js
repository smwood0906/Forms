// turn background color of input box yellow when clicked into

$('input[type=text]').focus(function () {
    $(this).css("backgroundColor", "yellow");
});

// return background color of input box to white when it is not in use
$('input[type=text]').blur(function () {
    $(this).css("backgroundColor", "white");
});

// when Submit button is clicked validate that all input fields are not , display error messages if empty
$('#submit').click(function () {
        event.preventDefault();

        var firstname = $("#firstname").val()
        var lastname = $("#lastname").val()

// verify that field is not empty by checking the length of the value is greater than 0.
//If field is empty, use jQuery to change HTML to display error message

        if (firstname.length > 0) {
            $("#firstNameError").html("");
        } else {
            $("#firstNameError").html("This field cannot be blank.").css("color", "red");
        }
        ;
        if (lastname.length > 0) {
            $("#lastname").html("");
        } else {
            $("#lastNameError").html("This field cannot be blank.").css("color", "red");
        }
        ;
    }
)
;

//use Regex to verify that a valid email has been entered. Use keyup function to check as user is typing
$('#email').keyup(function () {
    var email = $('#email').val();
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

//if email fails Regex validation display error message and red X glyphicon, if email is valid display green check glyphicon
    if (!regex.test(email)) {
        $('#emailError').html("Please enter a valid email address.");
        $('#errIcon').html('<i style="color:red" class="glyphicon glyphicon-remove"></i>');
    } else {
        $('#emailError').html("");
        $('#errIcon').html('<i style="color:green" class="glyphicon glyphicon-ok"></i>');
    }
});

//use Regex to validate phone number
$('#phone').keyup(function () {
    var phone = $("#phone").val();
    var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!reg.test(phone)) {
        $('#phoneError').html("Please enter a valid phone number");
        $('#errIcon2').html('<i style="color:red" class="glyphicon glyphicon-remove"></i>');
    }
    else {
        $('#phoneError').html("");
        $('#errIcon2').html('<i style="color:green" class="glyphicon glyphicon-ok"></i>');
    }
})
;


