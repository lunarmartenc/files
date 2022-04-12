 var config = {
    apiKey: "AIzaSyDtjDsi9I3ODEHeVwu-36blfr2eVratWLk",
    authDomain: "lunarmart-e2410.firebaseapp.com",
    databaseURL: "https://lunarmart-e2410-default-rtdb.firebaseio.com",
    projectId: "lunarmart-e2410",
    storageBucket: "lunarmart-e2410.appspot.com",
    messagingSenderId: "168416542459",
    appId: "1:168416542459:web:f87ecc908ab27668b27a5e",
    measurementId: "G-1SR896B8LE"
        };
firebase.initializeApp(config);

   
var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicatior = document.getElementById("Indicatior");
   
     
     function AccountRegister(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       document.getElementById("errorlog").style.display = "block";
       document.getElementById("errorlog").innerHTML =  errorMessage;
       // ...
       });

   
       firebase.auth().onAuthStateChanged(user => {
         if (user) {
           var d = new Date();
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var m = months[d.getMonth()];
            var e = d.getFullYear();
            var n = d.getDate(); 
            var Y5 = (m)+" "+(n)+" "+(e);
     
           var Fname = document.getElementById("username").value;
           var passw = document.getElementById("psw").value;
           var phoneNumber = document.getElementById("phoneNumber").value;
           var adress = document.getElementById("adress").value;
           var Femail = user.email;
           var FB_photoUrl = user.photoURL;
           var FemailVerified = user.emailVerified;
           var Fuid = user.uid;
           Duid = "BE-commerce/User/"+(Fuid);
        firebase.database().ref(Duid).update({
                     Name : Fname,
                     Email : Femail,
                     password : passw,
                     Position : "Premium",
                     phoneNumber: phoneNumber,
                     AC : 5,
                     Id : Fuid,
                     point: 0,
                     Totalpoint: 5,
                     Costpoint: 0,
                     Joindate: Y5,
                     adress: adress,
   
                   });
    Regform.style.transform = "translateX(300px)"
    Loginform.style.transform = "translateX(300px)"
    Indicatior.style.transform = "translateX(0px)"
   
          }
                   
                   else {
                    Regform.style.transform = "translateX(0px)"
                    Loginform.style.transform = "translateX(0px)"
                    Indicatior.style.transform = "translateX(100px)"
   
                   
                   }
                   
                   });
   
     }
   
     firebase.auth().onAuthStateChanged(user => {
       if (user) {
        Regform.style.transform = "translateX(300px)"
        Loginform.style.transform = "translateX(300px)"
        Indicatior.style.transform = "translateX(0px)"
   
          }
                   
                   else {
                   
                    Regform.style.transform = "translateX(0px)"
                    Loginform.style.transform = "translateX(0px)"
                    Indicatior.style.transform = "translateX(100px)"
                   
                   
        }
               
               });

       
     
function AccountLogin(){

                var userEmail = document.getElementById("logemail").value;
                var userPass = document.getElementById("logpsw").value;
                
                firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("errorlog").style.display = "block";
                document.getElementById("errorlog").innerHTML =  errorMessage;
                
                // ...
                });

                var frb = firebase.auth();
                frb.onAuthStateChanged(user => {
                  if (user) {

             var Fuid = user.uid;
            var TagFolder = "BE-commerce/User/"+Fuid;
            var RED = firebase.database().ref(TagFolder).child('Position');
            RED.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			       
            if(Reddata=="Admin"){
              window.location.href = "wp-admin.html";
            }
            else{
              window.location.href = "cart.html";
            }
          });
                            ////
                   }
                            
                        else {
                    // No user is signed in.
                  }
                });

                }
             


    var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){

if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";

}

else{


    MenuItems.style.maxHeight = "0px";
}

    }


//////------------Js For Toggel From--////

var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicatior = document.getElementById("Indicatior");

function register(){
    Regform.style.transform = "translateX(0px)"
    Loginform.style.transform = "translateX(0px)"
    Indicatior.style.transform = "translateX(100px)"
}

function login(){
    Regform.style.transform = "translateX(300px)"
    Loginform.style.transform = "translateX(300px)"
    Indicatior.style.transform = "translateX(0px)"

}
