
function validateform() {

  
    var name = document.myform.fname.value;
    var email = document.myform.email.value;
    var phone = document.myform.phone.value;
    var pass = document.myform.password.value;
   if(email.indexOf("@") != email.lastIndexOf("@")){
     alert("dsd");
   }else{
     alert("hiii wrong")
   }
   
  }