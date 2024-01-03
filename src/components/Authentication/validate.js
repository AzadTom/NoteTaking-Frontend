
export const validateUserDetail = (userDetail)=>{

    let isValid = true;

    let error = {

        name:"",
        email:"",
        password:"",
        comfirm:""
    }

    const {name,email,password,comfirm} = userDetail;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!name)
    {   
        error.name ="please enter your fullname!";
        isValid  = false;

    }else if(!name.match(nameRegex))
    {
        error.name = "invalid fullname!";
        isValid = false;
    }


    if(!email)
    {
        error.email = "please enter your email!";
        isValid = false;
    }
    else if(!email.match(emailRegex))
    {
        error.email ="invalid email!";
        isValid = false;
    }


    if(!password)
    {
        error.password = "please enter your password!";
        isValid = false;
    }
    else if(!password.match(passwordRegex))
    {
        error.password ="password should contains uppercase letter , lowercase letter and number";
        isValid = false;
    }


    if(!comfirm)
    {
        error.comfirm = "please enter your comfirmpassword!";
        isValid = false;
    }
    else if(!comfirm.match(password))
    {
        error.comfirm = "password does not match!"
        isValid = false;
    }




    return {isValid,error};


}