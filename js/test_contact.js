function test_button(){
    var nom = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('Message').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var state=true
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("msgError").innerHTML = "";
     
        if (nom === '') {
            console.log("empty name");
            document.getElementById("nameError").innerHTML = "/ Name Empty";
            state=false;
        } 
        if(emailRegex.test(email)===false){
            console.log("email non compliant");
            document.getElementById("emailError").innerHTML = "/ Email Not Compliant";
            state=false
        }
        if (email === '') {
            console.log("empty email");
            document.getElementById("emailError").innerHTML = "/ Email Empty";
            state=false;
        } 
        if (msg === '' ) {
            document.getElementById("msgError").innerHTML = "/ Message Empty";
            state=false;
        } 
        if (state==true)
        {
            console.log("button true");
            document.getElementById("send").disabled = false;
        }
        else
        {
            console.log("button false");
            document.getElementById("send").disabled = true;
        }
    }