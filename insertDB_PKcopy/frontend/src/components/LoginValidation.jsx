function LoginValidation(values){
    let error = {}
    const name_pattern =  /^[a-zA-Z0-9_+-]+([a-zA-Z0-9_+-]+)$/
    const email_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;


    if(values.name === ""){
        error.name = "Name should not be empty"
    }else if(!name_pattern.test(values.name)){
        error.name = "Sorry, Name is different"
    }else {
        error.name = ""
    } 
    
    if(values.email === ""){
        error.email = "E-mail should not be empty"
    }else if(!email_pattern.test(values.email)){
        error.email = "Sorry, E-mail is different"
    }else {
        error.email = ""
    } 

    


    return error;
}


export default LoginValidation;