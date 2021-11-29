function validate()
{

    var name = document.getElementById("u_name").value;
    var father_name = document.getElementById("f_name").value;
    var email = document.getElementById("e_mail").value;
    var birthdate = document.getElementById("dob").value;
    var mobile = document.getElementById("m_no").value;

    // validation...

    // User name validation..
    
    var regex = /^([A-Z a-z]{2,20})$/;

    if(regex.test(name))
    {
        document.getElementById("l_uname").innerHTML="Valid";
        document.getElementById("l_uname").style.visibility="visible";
        document.getElementById("l_uname").style.color="Green";
    }
    else
    {
        document.getElementById("l_uname").innerHTML="Invalid";
        document.getElementById("l_uname").style.visibility="visible";
        document.getElementById("l_uname").style.color="Red";
    }


    // Father name validation..
    
    if(regex.test(father_name))
    {
        document.getElementById("l_fname").innerHTML="Valid";
        document.getElementById("l_fname").style.visibility="visible";
        document.getElementById("l_fname").style.color="Green";
    }
    else
    {
        document.getElementById("l_fname").innerHTML="Invalid";
        document.getElementById("l_fname").style.visibility="visible";
        document.getElementById("l_fname").style.color="Red";
    }

    // E-mail validation 

    var regex = /^([a-z 0-9\.-]+)@([a-z 0-9 -]+).([a-z]{2,7})(.[a-z]{2,7})?$/;

    if(regex.test(email))
    {
        document.getElementById("l_mail").innerHTML="Valid";
        document.getElementById("l_mail").style.visibility="visible";
        document.getElementById("l_mail").style.color="Green";
    }
    else
    {
        document.getElementById("l_mail").innerHTML="Invalid";
        document.getElementById("l_mail").style.visibility="visible";
        document.getElementById("l_mail").style.color="Red";
    }

    // Date of Birth validation 

    var regex = /^(\d+)-(\d+)-(\d{4})$/;

    if(regex.test(birthdate))
    {
        document.getElementById("l_dob").innerHTML="Valid";
        document.getElementById("l_dob").style.visibility="visible";
        document.getElementById("l_dob").style.color="Green";
    }
    else
    {
        document.getElementById("l_dob").innerHTML="Invalid";
        document.getElementById("l_dob").style.visibility="visible";
        document.getElementById("l_dob").style.color="Red";
    }

    // Mobile Number validation 

    var regex_mob = /[7-9]\d{9}/;

    if(regex.test(mobile))
    {
        document.getElementById("l_mno").innerHTML="Valid";
        document.getElementById("l_mno").style.visibility="visible";
        document.getElementById("l_mno").style.color="Green";
    }
    else
    {
        document.getElementById("l_mno").innerHTML="Invalid";
        document.getElementById("l_mno").style.visibility="visible";
        document.getElementById("l_mno").style.color="Red";
    }

    
}