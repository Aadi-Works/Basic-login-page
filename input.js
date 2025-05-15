let user,pass;
const form = document.getElementById("f");

function checker()
{
    if(user=="")
        {
            alert("Please enter Username");
        }
    else{
    {
        if(user.length < 6)
            {
                alert("Username must be a minimum of 6 characters.")
            }
    }
}
        if(pass=="")
        {
            alert("Please enter Password");
        }
    else{
    if(pass.length < 8)
    {
        alert("Password must be a minimum of 8 characters.")
    }
}
}


document.getElementById("sub").onclick = function(event){
    user = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    checker();
    console.log(user);
    console.log(pass);
}