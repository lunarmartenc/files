$(document).ready(()=>{
  
    $('#open-sidebar').click(()=>{
       
        // add class active on #sidebar
        $('#sidebar').addClass('active');
        
        // show sidebar overlay
        $('#sidebar-overlay').removeClass('d-none');
      
     });
    
    
     $('#sidebar-overlay').click(function(){
       
        // add class active on #sidebar
        $('#sidebar').removeClass('active');
        
        // show sidebar overlay
        $(this).addClass('d-none');
      
     });
    
  });
  

  ///////////////AAPLRC=Angular Admin Product List Request Controler//////////
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


                var frb = firebase.auth();
                frb.onAuthStateChanged(user => {
                  if (user) {	  
            var Fuid = user.uid;
            var TagFolder = "BE-commerce/User/"+Fuid;
            var RED = firebase.database().ref(TagFolder).child('Position');
            RED.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			       
            if(Reddata=="Admin"){
              document.getElementById("mainWpAdmin").style.display = "block";
            }
            else{
              window.location.href = "cart.html";
            }
          }); 
        }
        else {
		window.location.href = "account.html"
                    // No user is signed in.
                  }
                });

  //////////////////////////Seals Request Panding////////////////
(function(d){

    var REDSE2 = firebase.database().ref("Admin").child('Salepending');
              REDSE2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
    var i = Reddata;
    if(i>0){
    var badge = document.getElementById('badge');  
    var int = window.setInterval(function(){
      updateBadge(i);
    }, 2000); //Update the badge ever 5 seconds
    var badgeNum;    
    function updateBadge(alertNum){//To rerun the animation the element must be re-added back to the DOM
        var badgeChild = badge.children[0];
        if(badgeChild.className==='badge-num')
              badge.removeChild(badge.children[0]);
        
        badgeNum = document.createElement('div'); 
        badgeNum.setAttribute('class','badge-num');
         badgeNum.innerText = alertNum;
        var insertedElement = badge.insertBefore(badgeNum,badge.firstChild); 
    }
    }
    
        
        });
    
    })(document);
    
    
    
    
              /////////////////////////Menu Troggel ///////////////////
           
     function Onloddata() {
    
    var rand=()=>Math.random(0).toString(36).substr(2);
    var token =(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    var randomPath = (token(40));
    
    document.getElementById("pathlink2").href = "post-new.html?="+randomPath;
    
    
    }
    
      
