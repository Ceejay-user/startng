function validate() {
    let name = document.forms.Name.value;
    let email = document.forms.email.value;
    let title = document.forms.title.value;
    let message = document.forms.Message.value;
    
    if(name == null || name.length < 4 || !isNaN(name)){
        document.getElementById("name-error").innerHTML = "* Name should be up to 4 characters";
        document.getElementById("email-error").innerHTML = "";
        document.getElementById("message-error").innerHTML = "";
        document.forms.Name.focus();
        return false;
    }
    if(email.lastIndexOf(".") !== email.length-4 || email.indexOf("@") < 1){
        document.getElementById("email-error").innerHTML = "* Please input the correct email format";
        document.getElementById("name-error").innerHTML = "";
        document.getElementById("message-error").innerHTML = "";
        document.forms.email.focus();
        return false;
    }
    if(message.length < 20){
        document.getElementById("message-error").innerHTML = "* Message should be up to 20 characters";
        document.getElementById("name-error").innerHTML = "";
        document.getElementById("email-error").innerHTML = "";
        document.forms.Message.focus();
        return false;
    }
}