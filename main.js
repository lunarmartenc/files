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

document.getElementById("Mlogo").src = "https://drive.google.com/uc?export=download&id=1N7DSq9ecj8O7yxSuaZHnrxqFrgKQjrnf";
document.getElementById("Mcart").src = "https://drive.google.com/uc?export=download&id=1JwuhTXUky7dEdHRjYmVuKNadnICZ7G91";
document.getElementById("Mmenu").src = "https://drive.google.com/uc?export=download&id=1Mh3ComNECck578M7LByP0Tr7eIMhUsmv";
document.getElementById("Mplaystor").src = "https://drive.google.com/uc?export=download&id=14JuF-bugi7Cqzxl9_53C0rQleSWpdzIj";
document.getElementById("Mflogo").src = "https://drive.google.com/uc?export=download&id=1Au46_KU-v609tQxtl-8eX0sKmknAXAcg";
document.getElementById("mpay1").src = "https://drive.google.com/uc?export=download&id=1D661lDkCLKsiaKokmYpb_pSrmnaNeRKZ";
document.getElementById("mpay2").src = "https://drive.google.com/uc?export=download&id=1AppL0J5rJqds2UuSyPSpNUI7mwei0UL7";
document.getElementById("mpay3").src = "https://drive.google.com/uc?export=download&id=1OOqyqpzejjM4DEjQ4j9RZLtmKxtgHPvx";
document.getElementById("mpay4").src = "https://drive.google.com/uc?export=download&id=1R6VDkfsVkfgGYRdbeIvjO-TUuAROchls";
  
  var TagFolder = "Admin/Catagory";
  var RED1 = firebase.database().ref(TagFolder).child('catagoriimg1');
              RED1.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg1").src = Reddata;
              
              }); 
  
  var RED2 = firebase.database().ref(TagFolder).child('catagoriimg2');
              RED2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg2").src = Reddata;
              
              }); 
              
  var RED3 = firebase.database().ref(TagFolder).child('catagoriimg3');
              RED3.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg3").src = Reddata;
              
              });
              
  var RED4 = firebase.database().ref(TagFolder).child('catagorilink1');
              RED4.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("catagorilink1").href = Reddata;
              
              });             
  
  var RED5 = firebase.database().ref(TagFolder).child('catagorilink2');
              RED5.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("catagorilink2").href = Reddata;
              
              });           
  var RED6 = firebase.database().ref(TagFolder).child('catagorilink3');
              RED6.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagorilink3").href = Reddata;
              
              });   
  ///////////////////////////Cart Bandge Set///////////////
  
  var cartcheckr = localStorage.getItem("cartcheckr");
  
  if(cartcheckr==null || cartcheckr==0){
  
    }
  
    else{
      document.getElementById("cardbandge").style.display = "block";
      document.getElementById("cardbandge").innerHTML = cartcheckr;
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
  
