document.getElementById('signinpage').onclick=function(){
    document.getElementById('id01').style.display="block";
  };document.getElementById('signuppage').onclick=function(){
    document.getElementById('id01').style.display="none";
    document.getElementById('id02').style.display="block";
  };
  var signin = document.getElementById('id01');
  var signup = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target ==signin ) {
        signin.style.display = "none";
       
    }
    else if (event.target == signup ) {
        signup.style.display = "none";
       
    }
}