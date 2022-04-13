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


  
  var wurl = window.location.href;
  var ScellIDS = wurl.replace("https://www.lunarmart.xyz/p/sale-deatils.html?=", "")
  var TagFolder = "BE-commerce/Purchase/"+ScellIDS;
  
  
  
  ////////////////////Complite//////////////////////////
  function Complite(){
  
      firebase.database().ref(TagFolder).update({ 
          Stutashtml : "<b style='color: green'>Complite</b>",
          Stutas : "Complite",
      });
  
    var Salepending = document.getElementById("Salepending").value;
       var Fsalespending = Salepending-1;
          firebase.database().ref("Admin").update({ 
          
           Salepending :  Fsalespending,
          }); 
  
   document.getElementById("CRbtn").style.display = "none";
  
  }
  
  /////////////////////////reject//////////////////
  function Reject(){
  
  firebase.database().ref(TagFolder).update({ 
      Stutashtml : "<b style='color: red'>Reject</b>",
      Stutas: "Reject",
  });
  
  var Salepending = document.getElementById("Salepending").value;
       var Fsalespending = Salepending-1;
          firebase.database().ref("Admin").update({ 
          
           Salepending :  Fsalespending,
          });   
  
  document.getElementById("CRbtn").style.display = "none";
  }
  
  
  
  ///////////////Sale Details red///////////////
  
  var RED = firebase.database().ref(TagFolder).child('Date');
              RED.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("dates").innerHTML ="Date: "+ Reddata;
              
              }); 
  
  var RED1 = firebase.database().ref(TagFolder).child('SellID');
              RED1.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("ids").innerHTML = "ID: "+ Reddata;
  }); 
  
  
  var RED11 = firebase.database().ref(TagFolder).child('Stutas');
              RED11.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
  
              if(Reddata=="Pending"){
  
              document.getElementById("CRbtn").style.display = "block";
  
              }
              
              }); 
  
  var RED12 = firebase.database().ref(TagFolder).child('Stutashtml');
              RED12.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("stutas").innerHTML ="Stutas: "+ Reddata;
              
              });            
  
  var RED2 = firebase.database().ref(TagFolder).child('neme');
              RED2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("name").innerHTML = "Name: "+ Reddata;
  });
  
  var RED3 = firebase.database().ref(TagFolder).child('phonenumber');
              RED3.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("phnumber").innerHTML = "Phone number: "+ Reddata;
              
              });
  var RED4 = firebase.database().ref(TagFolder).child('adress');
              RED4.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("adress").innerHTML ="Adress: " +Reddata;
  });             
  
  var RED5 = firebase.database().ref(TagFolder).child('payment');
              RED5.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("pmethod").innerHTML ="Pament method: "+ Reddata;
  });
  
  var RED6 = firebase.database().ref(TagFolder).child('paymentnumber');
              RED6.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("prnumber").innerHTML = "Pament Number: "+ Reddata;
  }); 
  
  
  var RED61 = firebase.database().ref(TagFolder).child('totalitem');
              RED61.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("totalitem").innerHTML = "Total Item: "+ Reddata;
              
              });
  
  var RED7 = firebase.database().ref(TagFolder).child('serviceCharge');
              RED7.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("sercharge").innerHTML ="service Charge: "+ Reddata;
  }); 
  
  var RED8 = firebase.database().ref(TagFolder).child('subtotal');
              RED8.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("stotal").innerHTML ="Sub Total: "+ Reddata;
  }); 
  
  var RED9 = firebase.database().ref(TagFolder).child('totalprice');
              RED9.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("total").innerHTML ="Total Price: "+ Reddata;
              
              });
              
              
  
  
  
   /////////////Sase bandage and Sale pending/////////////
   (function(d){
  
  var REDSE2 = firebase.database().ref("Admin").child('Salepending');
            REDSE2.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
            document.getElementById("Salepending").value = Reddata;
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
  
/////////New post link make/////

  function Onloddata() {

    var rand=()=>Math.random(0).toString(36).substr(2);
    var token =(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    var randomPath = (token(40));
    
    document.getElementById("pathlink2").href = "post-new.html?="+randomPath;
    
    }


    ////////////////truggel menu//////////

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
      var randomPath = Date.now();
      
      document.getElementById("pathlink2").href = "post-new.html?="+randomPath;
      
      
      
      }
      
      
      
