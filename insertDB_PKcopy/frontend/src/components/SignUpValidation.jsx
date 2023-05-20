function SignUpValidation(values){
    let error = {}
    const name_pattern = /^[a-zA-Z0-9_+-]+([a-zA-Z0-9_+-]+)$/
    const email_1_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const email_2_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (values.name === "") {
        error.name = "Name should not be empty";
      } else if (!name_pattern.test(values.name)) {
        error.name = "Sorry, Name is different";
      } else {
        error.name = "";
      }
      
      if (values.email_1 === "") {
        error.email_1 = "E-mail should not be empty";
      } else if (!email_1_pattern.test(values.email_1)) {
        error.email_1 = "Sorry, E-mail is different";
      } else {
        error.email_1 = "";
      }
      
      if (values.email_2 === "") {
        error.email_2 = "E-mail should not be empty";
      } else if (!email_2_pattern.test(values.email_2)) {
        error.email_2 = "Sorry, E-mail is different";
      } else {
        error.email_2 = "";
      }
      


    return error;
}


export default SignUpValidation;