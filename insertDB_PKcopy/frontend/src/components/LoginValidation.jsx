
function LoginValidation(values){
    let error = {}
    const name_pattern =  /^[a-zA-Z0-9_+-]+([a-zA-Z0-9_+-]+)$/     //アルファベットの大文字と小文字、数字、アンダースコア、プラス記号、ハイフンが使用でき、これらのどれか2文字以上を使用
    const email_pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;


    if(values.name === ""){
        error.name = "Name should not be empty"   //空の時
    }else if(!name_pattern.test(values.name)){
        error.name = "Sorry, Name is different"   //nameが正しく記述されていない時
    }
//else if(){
// //DBに登録されていない名前の時の処理
//     }
else {
        error.name = ""
    } 
    
    if(values.email === ""){                        //空の時
        error.email = "E-mail should not be empty"
    }else if(!email_pattern.test(values.email)){
        error.email = "Sorry, E-mail is different"  //emailが正しく書かれていない時
    }
//     else if(){
// //DBに登録されていない名前の時の処理
//     }
    else {
        error.email = ""
    } 

    


    return error;
}


export default LoginValidation;