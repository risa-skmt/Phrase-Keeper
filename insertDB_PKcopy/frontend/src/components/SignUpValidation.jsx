function SignUpValidation(values){
    let error = {}
    const name_pattern = /^[a-zA-Z0-9_+-]+([a-zA-Z0-9_+-]+)$/
    const email_1_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const email_2_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (values.name === "") {
        error.name = "Name should not be empty";
      }else {
        error.name = "";
      }
      
      if (values.email_1 === "") {
        error.email_1 = "E-mail should not be empty";
      }else {
        error.email_1 = "";
      }
      
      if (values.email_2 === "") {
        error.email_2 = "E-mail should not be empty";
      } else if (values.email_2 !== values.email_1) {
        error.email_2 = "Email didn't match";
      } else {
        error.email_2 = "";
      }
      


    return error;
}


export default SignUpValidation;