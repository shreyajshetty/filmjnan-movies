const login = document.getElementById('login')
login.addEventListener('click',function() {
const username = document.getElementById("username");
usertrim = username.value.trim()

if(usertrim!==""){

if(/^[a-zA-Z]+$/.test(usertrim)){

     console.log('Username is Proper')
    
} 
}else {
    alert('Enter the username Correctly')
}



const email = document.getElementById('email')

if(email.value != ""){
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        console.log('Email is Entered')
    }
}
    else {
    alert('Please Enter a valid Email address ')
}

if(usertrim !="" && email.value != "" ){
    alert("Submitted Successfully")
    window.location.href = "headerHtml.html";
} else {
    alert('Please ensure you have entered Username or password properly')
}

})

function loginUser() {
   
   
    
    
    return false;
  }

