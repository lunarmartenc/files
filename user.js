
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
      
      function Onloddata() {
      
      var rand=()=>Math.random(0).toString(36).substr(2);
      var token =(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
      var randomPath = (token(40));
      
      document.getElementById("pathlink2").href = "post-new.html?="+randomPath;
      
      
      
      }
      
      
      
      
      var config = {
            apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
          authDomain: "effort-5efac.firebaseapp.com",
          databaseURL: "https://effort-5efac.firebaseio.com",
          projectId: "effort-5efac",
          storageBucket: "effort-5efac.appspot.com",
          messagingSenderId: "771931121287",
          appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
          measurementId: "G-GLD9CY5VPF"};
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



      
      function reply_click(clicked_id)
        {
        var Uuid = (clicked_id);
        localStorage.setItem("UserID", Uuid);
        var stockid = "stock"+Uuid;
        document.getElementById(stockid).style.display = "block";	  
        }
      
      
      function postUpdates(){
      
          var UserID = localStorage.getItem("UserID");
          var TagFolder = "BE-commerce/User/"+UserID;
          
      
          var Position = "Position"+UserID;
          var Userstutas = "Userstutas"+UserID;
      
      
          var Positiontag = document.getElementById(Position).value;
          var Userstutastag = document.getElementById(Userstutas).value;
      
          firebase.database().ref(TagFolder).update({ 
            Position : Positiontag,
            Status : Userstutastag,
            });
            var stockid = "stock"+UserID;
            document.getElementById(stockid).style.display = "none";	 
      }
      
      
      
      
      
      ////////////////////////Sale bandge Set///////////
      
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
          
