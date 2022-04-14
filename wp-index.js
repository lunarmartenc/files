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



  //////////////Firebase-Pathlod//////////////
  
  var pathlink = location.href;

  var Fpath = pathlink.replace("https://lunarmart.000webhostapp.com/index.php?=", "");
  
  
  var Fpathstore = localStorage.getItem("Fpath");


  ///////////////////Success Screen Daata///////////////
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  var Dates = m + "/" + d + "/" + y;
  
  document.getElementById("pid").innerHTML = "ID: "+Fpathstore;
  document.getElementById("pdate").innerHTML = "Date: "+Dates;
  
  ////////Firebase-Red---TokenUpdate///////////
  
  function Update(){
  
  var cont = document.getElementById("tokens").value;
  var TagFolder = 'BE-commerce/Token';
  firebase.database().ref(TagFolder).set({ 
      Testtoken : cont,
      });
  }
  
  
  ////////Firebase-Red--PostData///////////
  
  var TagFolder = 'BE-commerce/Post/'+Fpath;
  
  
  var RED = firebase.database().ref(TagFolder).child('Stutas');
              RED.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("Stutas").value = Reddata;
              });
  
  var REDA = firebase.database().ref(TagFolder).child('title');
              REDA.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("title").value = Reddata;
              }); 
        
        
        var RED1 = firebase.database().ref(TagFolder).child('content');
              RED1.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("content").value = Reddata;	
              }); 
  
  var RED2 = firebase.database().ref(TagFolder).child('catagory');
              RED2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("catagory").value = Reddata;
              });
              
var RED21 = firebase.database().ref(TagFolder).child('subcatagory');
              RED21.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("subcatagory").value = Reddata;
              });            
  
  var RED3 = firebase.database().ref(TagFolder).child('ID');
              RED3.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("productID").value = Reddata;
              }); 
  
  var RED4 = firebase.database().ref(TagFolder).child('availity');
              RED4.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("availity").value = Reddata;
          });      
  
  var RED5 = firebase.database().ref(TagFolder).child('imgs');
              RED5.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("imgs").value = Reddata;	
              });   
  
  var RED6 = firebase.database().ref(TagFolder).child('imgs1');
              RED6.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("imgs1").value = Reddata;
              });   
  
  var RED7 = firebase.database().ref(TagFolder).child('imgs2');
              RED7.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("imgs2").value = Reddata;
              });       
        
  var RED8 = firebase.database().ref(TagFolder).child('imgs3');
              RED8.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("imgs3").value = Reddata;
        doTokenCheck();
              });       
  
  ////////Firebase-Red--Acess///////////
  function doTokenCheck(){
  /////////////////////////Post Content Making//////////////////////////
  var productID = document.getElementById("productID").value;
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var catagory = document.getElementById("catagory").value;
  var imgs = document.getElementById("imgs").value;
  var imgs1 = document.getElementById("imgs1").value;
  var imgs2 = document.getElementById("imgs2").value;
  var imgs3 = document.getElementById("imgs3").value;
  
  var contentHTML = '<html>'+
  '<head>'+
      '<meta charset="UTF-8">'+
      '<meta name="viewport" content="width=device-width", initial-scale="1.0">'+
  
      '<!----------Google--------->'+
      '<title>'+title+'</title>'+
      '<meta name="Description" CONTENT="'+content+'">'+
      '<meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>'+
      '<meta name="robots" content="noindex,nofollow">'+
  
      '<!----------Face-book--------->'+
      '<meta property="og:url"                content="https://www.lunarmart.xyz/" />'+
      '<meta property="og:type"               content="article" />'+
      '<meta property="og:title"              content="'+title+'" />'+
      '<meta property="og:description"        content="'+content+'" />'+
      '<meta property="og:image"              content="'+imgs+'"/>'+
  '<link href="https://lunarmartenc.github.io/files/style.css" rel="stylesheet"/>'+
  '<link rel="preconnect" href="https://fonts.googleapis.com">'+
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'+
  '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">'+
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'+
  '<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>'+
  
  '</head>'+
  '<body><div id="FullBody"><img src="'+imgs+'" width="0px">'+
     
      '<div class="conteainer"><div class="nevbar">'+
          '<div class="logo"><a href="/"><img src="https://drive.google.com/uc?export=download&id=1N7DSq9ecj8O7yxSuaZHnrxqFrgKQjrnf" width="125px" alt="none"></div>'+
          
          '<nav ><ul id="MenuItems">'+
              '<li><a href="/">Home</a></li>'+
              '<li><a href="/" style="margin-left: 15px;">Pruduct</a></li>'+
              '<li><a href="/" style="margin-left: 15px;">Contact</a></li>'+
              '<li><a href="/" style="margin-left: 15px;">About</a></li>'+
              '<li><a href="/p/account.html" style="margin-left: 15px;">Account</a></li>'+
          '</ul></nav>'+
          '<a href="/p/cart.html" class="cart"><img src="https://drive.google.com/uc?export=download&id=1JwuhTXUky7dEdHRjYmVuKNadnICZ7G91" width="30px" height="30px"><span style="display: none;" id="cardbandge" class="counter"></span></a>'+
          '<img src="https://drive.google.com/uc?export=download&id=1Mh3ComNECck578M7LByP0Tr7eIMhUsmv" class="menu-icon" onclick="menutoggle()">'+
          '</div>'+
     '</div>'+
  
  '<!--------Single products details----->'+
  
  '<div class="small-contanier single-product">'+
  
      '<div class="row">'+
          '<div class="col-2">'+
            '<img src="'+imgs+'" width="100%" id="productImg">'+
  
           '<div class="small-img-row">'+
              '<div class="small-img-col">'+
                  '<img src="'+imgs+'" width="100%" onerror="this.style.display='+"'none'"+'" class="small-img">'+
                   '</div>'+
               '<div class="small-img-col">'+
              '<img src="'+imgs1+'" width="100%" onerror="this.style.display='+"'none'"+'" class="small-img">'+
               '</div>'+
               '<div class="small-img-col">'+
                  '<img src="'+imgs2+'" width="100%" onerror="this.style.display='+"'none'"+'" class="small-img">'+
                   '</div>'+
                   '<div class="small-img-col">'+
                      '<img src="'+imgs3+'" width="100%" onerror="this.style.display='+"'none'"+'" class="small-img">'+
                       '</div>'+
           '</div>'+
           
  
          '</div>'+
          '<div class="col-2">'+
            '<p id="reletedcotagory">Home / '+catagory+'</p>'+
            '<p style="display: none;" id="ProductID">'+productID+'</p>'+
            '<h1 id="titles">'+title+'</h1>'+
            '<h4>&#2547;<b id="productPrice"></b></h4>'+
            '<select id="sizes">'+
            '<option>Select Size</option>'+
            '<option>XXL</option>'+
            '<option>XL</option>'+
            '<option>Large</option>'+
            '<option>Medium</option>'+
            '<option>Small</option>'+
            '</select>'+
            '<input type="number" value="1"  id="quantity" min="1">'+
  
            '<a class="btn" id="addcarts" style="display: none;" onclick="addCard()">Add To Cart</a>'+
            '<a class="btn" id="checkouts" style="display: none;" onclick="Checkout()" href="/p/cart.html">Check Out</a>'+
            '<br>'+
            '<h3>Product Details  <i class="fa fa-indent"></i></h3>'+
            '<p>'+content+'</p>'+
            '</div>'+
          '</div>'+
      '</div>'+
  
  '<!--------Titels----->'+
  '<div class="small-contanier">'+
     '<div class="row row-2">'+
  '<h2>Related product</h2>'+
  '<a href="/p/catagory.html?='+catagory+'">View More&#8594;</a></div>'+
  '</div>'+
  '<!--------Related products----->'+
  '<div id="Relatedproduct" class="small-contanier">'+
  
  '<div ng-controller="Maincontollerrelatedproduct" ng-init="showData()" class="row">'+
      '<div class="col-4" ng-repeat="page in pages | orderBy:sortType:!sortReverse | filter:searchFish | filter:searchProfit | pagination : currentPage*itemsPerPage | limitTo: itemsPerPage">'+
          '<a href="{{page.Postlink}}">'+
          '<img src="{{page.imgs}}" >'+
          '<h4>{{page.title}}</h4>'+
          '<div class="rating">'+
              '<p>{{page.availity}}</p>'+
          '</div>'+
          '<p>&#2547;{{page.price}}</p>'+
      '</a>'+
      '</div></div></div>'+
  '<!------Footer-Section----->'+
  '<div class="footer">'+
  '<div class="container">'+
      '<div class="row">'+
  
         '<div class="footer-col-1">'+
  '<h3>Download Our App</h3>'+
  '<div class="apps-logo">'+
  '<img src="https://drive.google.com/uc?export=download&id=14JuF-bugi7Cqzxl9_53C0rQleSWpdzIj">'+
  '</div>'+
  
  '<p>Download apps for android mobile phone</p>'+
  '</div>'+
  '<div class="footer-col-2">'+
      '<img src="https://drive.google.com/uc?export=download&id=1Au46_KU-v609tQxtl-8eX0sKmknAXAcg">'+
      
      '<p>Mymenshing Ck Gosh Rod 36A</p>'+
      '</div>'+
      '<div class="footer-col-3">'+
          '<h3>Useful Links</h3>'+
          '<ul>'+
           '<li>Cupons</li>'+
           '<li>Blog Post</li>'+
           '<li>Return Policy</li>'+
           '<li>Join Affliate</li>'+
  
          '</ul>'+
          '</div>'+
  
          '<div class="footer-col-4">'+
              '<h3>Social Links</h3>'+
              '<ul>'+
               '<li>Facebook</li>'+
               '<li>Youtube</li>'+
               '<li>Twitter</li>'+
               '<li>Instragram</li>'+
      
              '</ul>'+
              '</div></div>'+
  
      '<hr><p class="Copyright"> Copyright 2022 - LunarMart </p></hr>'+
  '</div>'+
  '</div>'+
  
  '<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>'+
  '<script src="https://lunarmartenc.github.io/files/product-details.js"></script>'+
  
  '<!-- MaterializeCSS and it"s javascript file for the visual front-end -->'+
                
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>'+
                
                
                
  '<!-- AngularJS and AngularFire for the backbone -->'+
  '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.7/angular.min.js"></script>'+
  
  '<script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>'+
  
  '<!-- FirebaseApp and FirebaseDatabase so we can communicate with the firebase service -->'+
  '<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-app.js"></script>'+
  '<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-database.js"></script>'+
  '<script src="https://lunarmartenc.github.io/files/aplrc.js"></script>'+
  
  '</div></body>'+
  
  
  ' </html>';
  
    document.getElementById("content").value = contentHTML;
  
  
  
  
  //////////////////////////////AuthToken Red live Time/////////////////////////
  var TagFolder = 'BE-commerce/Token';
  var RED = firebase.database().ref(TagFolder).child('Testtoken');
              RED.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("authToken").value = Reddata;
  
        Checktoken(Reddata);
              
              });  }  
  
  ///////////////Json--Token---Acess////////////
  function Checktoken(Reddata){
    document.getElementById("loader").style.display = "none";
  Tokenurl = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+Reddata;
  
  $.ajax({
      url: Tokenurl,
      dataType: 'json',
      success: function( data ) {
        
  $.getJSON(Tokenurl, function(data) {
          
          var tokentime= data.expires_in;
      if (tokentime<60){
     
      document.getElementById("exp").style.display = "block";
      
  
      }
    else{
      
      document.getElementById("exp").style.display = "none";
      dopublish();
  
  
    }
  
          });
        
      },
      error: function( data ) {
        document.getElementById("exp").style.display = "block";
  
      }
    });
  }
  
  //////////////////Auto-Click//////////////////
      
  var text = document.getElementById("ptlink").innerHTML;
    var wurl = position = text.search("lunarmart.xyz"); ///It's Protect To Multi post
  
  function dopublish(){
    if(wurl == -1){
  dopublish1();
  
  }
  }
  
  function dopublish1(){
  var Stutas = document.getElementById("Stutas").value;
  if (Stutas=="Draft"){
  var pathlink = location.href;
  
  var Fpath = pathlink.replace("https://lunarmart.000webhostapp.com/index.php?=", "");
  
  localStorage.setItem("Fpath", Fpath);
  
  document.getElementById("btn").click();
  }
  else {
  
    document.getElementById("loader").style.display = "none";
    document.getElementById("publishederror").style.display = "block";
  
    var RED = firebase.database().ref(TagFolder).child('Postlink');
              RED.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("errpostlink").href = Reddata;
              
              });
    
  }
  
  }
  
  
  /////////////////Page-lood...//////////////////
    //////////////////Check---Published//////////////////
  
  
    if(wurl == -1){
  ////Published---Filed
  
  }
  
  else{
  
    var plink = document.getElementById("ptlink").innerHTML;
  var TagFolder = 'BE-commerce/Post/'+Fpathstore;
  firebase.database().ref(TagFolder).update({ 
      Postlink : plink,
      Stutas : "Live",
      });
    document.getElementById("exp").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("pubpost").style.display = "block";
  
  };
  
  
  
  
  $(window).on("load",function(){
      
      setTimeout(function(){$('.done').addClass("drawn");},500)
      
  });
  
  
  
  
