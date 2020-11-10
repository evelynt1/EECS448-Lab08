// function val()
// {
//     firstBox = document.getElementById("enterPassword");
//     secondBox = document.getElementById("validatePassword");

//     if(firstBox.value !== secondBox.value)
//     {
//         text = "The passwords entered do not match.";
//     }
//     else if(firstBox.value.length < 8)
//     {
//         text = "Password must be at least 8 characters long.";
//     }

    function val()
    {
        firstBox = document.getElementById("enterPassword");
        secondBox = document.getElementById("validatePassword");

        // window.confirm()
        // {
            if(firstBox.value !== secondBox.value)
            {
                text = "The passwords entered do not match.";
                alert(text);
            }
            else if(firstBox.value.length < 8)
            {
                text = "Password must be at least 8 characters long.";
                alert(text);
            }
            else if(firstBox.value.length === secondBox.value.length)
            {
                alert("Passwords match!");
            }
        // }
    }
// }

