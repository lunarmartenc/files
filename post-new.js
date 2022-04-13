
  
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
  
  
  
  //////////////////Img Encode///////////////////////////
  
  function encodeImageFileAsURL() {
  
  var filesSelected = document.getElementById("file-input").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      localStorage.setItem("TargetImg", "imgs")
      document.getElementById("name").value = Date.now();
      document.getElementById("imgf").value = srcData;
      document.getElementById("imgs").src = "https://i.gifer.com/ZZ5H.gif";
      document.getElementById("Appbtn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  document.getElementById("ims").style.display = 'none';
  }
  
  
  
  function encodeImageFileAsURL1() {
  
  var filesSelected = document.getElementById("file-input1").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      localStorage.setItem("TargetImg", "imgs1")
      document.getElementById("name").value = Date.now();
      document.getElementById("imgf").value = srcData;
      document.getElementById("imgs1").src = "https://i.gifer.com/ZZ5H.gif";
      document.getElementById("Appbtn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  document.getElementById("ims1").style.display = 'none';
  }
  
  
  
  function encodeImageFileAsURL2() {
  
  var filesSelected = document.getElementById("file-input2").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      localStorage.setItem("TargetImg", "imgs2")
      document.getElementById("name").value = Date.now();
      document.getElementById("imgf").value = srcData;
      document.getElementById("imgs2").src = "https://i.gifer.com/ZZ5H.gif";
      document.getElementById("Appbtn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  document.getElementById("ims2").style.display = 'none';
  }


  function encodeImageFileAsURL3() {
  
    var filesSelected = document.getElementById("file-input3").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
    
      var fileReader = new FileReader();
    
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

        localStorage.setItem("TargetImg", "imgs3")
        document.getElementById("name").value = Date.now();
        document.getElementById("imgf").value = srcData;
        document.getElementById("imgs3").src = "https://i.gifer.com/ZZ5H.gif";
        document.getElementById("Appbtn").click();
    
      }
      fileReader.readAsDataURL(fileToLoad);
    }
    document.getElementById("ims3").style.display = 'none';
    }


//////Apps script Call

function sendEmail(e) {
  e.preventDefault();

  const POST_URL = 'https://script.google.com/macros/s/AKfycbyY-YoVwPav-zNj30yO094OhjTe5aOjmFNMTzPXnRcpz4EXHeHA18UqqIOinhMCLClO/exec';

  const postRequest = {
    name: e.target['name'].value,
    imgf: e.target['imgf'].value,
  };
  
  if(POST_URL) {
    $.post(POST_URL, JSON.stringify(postRequest))
      .then(res => {
      e.target.reset();
     var id= (res.msg); 
     
     var TargetImg = localStorage.getItem("TargetImg");
     document.getElementById(TargetImg).src = "https://drive.google.com/uc?export=download&id="+id;
    
})}}


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
              
            }
            else{
              window.location.href = "cart.html";
            }
          }); 
        }
        else {
                    // No user is signed in.
                  }
                });
  //////////////Firebase-uSER Data INFO LOAD//////////////
  
  
  
  //////////////Firebase-POST DATA  LOAD//////////////
  var pathlink2 = window.location.href;
  
  var Fpath2 = pathlink2.replace("https://lunarmart.blogspot.com/p/post-new.html?=", "");
  
  var TagFolder = "BE-commerce/Post/"+Fpath2;
        

  var RED = firebase.database().ref(TagFolder).child('title');
            RED.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("title").value = Reddata;

    
				});
        var RED = firebase.database().ref(TagFolder).child('title');
        RED.on('value', function(snapshot) {
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
			if(Reddata!==null){
			document.getElementById("catagory").value = Reddata;
    }
				});
var RED3 = firebase.database().ref(TagFolder).child('subcatagory');
        RED3.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
  
  document.getElementById("subcatagory").value = Reddata;

    });

var RED31 = firebase.database().ref(TagFolder).child('price');
    RED31.on('value', function(snapshot) {
    var Reddata = (snapshot.val());

document.getElementById("price").value = Reddata;

});    

var RED4 = firebase.database().ref(TagFolder).child('imgs');
    RED4.on('value', function(snapshot) {
    var Reddata = (snapshot.val());
    document.getElementById("imgs").src = Reddata;
});

var RED5 = firebase.database().ref(TagFolder).child('imgs1');
        RED5.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
  
        document.getElementById("imgs1").src = Reddata;

    });

var RED6 = firebase.database().ref(TagFolder).child('imgs2');
    RED6.on('value', function(snapshot) {
    var Reddata = (snapshot.val());

    document.getElementById("imgs2").src = Reddata;
   

});

var RED7 = firebase.database().ref(TagFolder).child('imgs3');
        RED7.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
  
        document.getElementById("imgs3").src = Reddata;

  postdatacheck();

    });


  
  function postdatacheck(){
    var REDC = firebase.database().ref(TagFolder).child('title');
    REDC.on('value', function(snapshot) {
    var Reddata = (snapshot.val());
    var title = Reddata;
    if(title==null){

    }
    else{
      document.getElementById("publishedbtn").style.display = 'block';
      document.getElementById("delatebtn").style.display = 'block';
      document.getElementById("ims").style.display = 'none';
      document.getElementById("ims1").style.display = 'none';
      document.getElementById("ims2").style.display = 'none'; 
      document.getElementById("ims3").style.display = 'none'; 
    }});

  }
  
  function savePost(){
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  var Dates = m + "/" + d + "/" + y;

  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var price = document.getElementById("price").value;
  var catagory = document.getElementById("catagory").value;
  var subcatagory = document.getElementById("subcatagory").value;
  var availity = document.getElementById("availity").value;
  
  var imgs = document.getElementById("imgs").src;
  var imgs1 = document.getElementById("imgs1").src;
  var imgs2 = document.getElementById("imgs2").src;
  var imgs3 = document.getElementById("imgs3").src;
  
  if (title=="" || content =="" || catagory =="" || price =="" || imgs ==""  || imgs == "https://lunarmart.blogspot.com/p/null"  ||  imgs =="https://i.gifer.com/ZZ5H.gif" )
  {
  
    alert("No Data Detect")
  }
  
  else{
    firebase.database().ref(TagFolder).update({ 
      title : title,
      content : content,
      price : price,
      catagory : catagory,
      Stutas : "Draft",
      ID : Fpath2,
      availity : availity,
      imgs : imgs,
      imgs1 : imgs1,
      imgs2 : imgs2,
      imgs3 : imgs3,
      Date : Dates,
      subcatagory : subcatagory,
      

      });
  
  }}
  
  function  PostDelate(){
var TagFolder = "BE-commerce/Post/"+Fpath2;
firebase.database().ref(TagFolder).remove();

window.location.href = "draf-product.html"

  }
  
  function Published(){
  
  
      location.href = "https://lunarmart.blogspot.com/p/post-published.html?="+Fpath2;
  
  
  }
  
  function dataShow(){
  
    var stock = document.getElementById("stock-options");
  
   if (stock.style.display == 'none'){
    stock.style.display = 'block';
   }
   else if (stock.style.display == 'block'){
  stock.style.display = 'none';
  }
  }
  
  
  function imgUpShow() {
    var stock = document.getElementById("img-gallary");
    if (stock.style.display == 'none'){
    stock.style.display = 'block';
   }
   else if (stock.style.display == 'block'){
  stock.style.display = 'none';
  }
  
  }
  

  function imgs(){

    document.getElementById("ims").style.display = 'block';
  }
  function imgs1(){

    document.getElementById("ims1").style.display = 'block';
  }
  function imgs2(){

    document.getElementById("ims2").style.display = 'block';
  }

  function imgs3(){

    document.getElementById("ims3").style.display = 'block';
  }

 

  /////////////////Seals Requast Bandage///////////
  
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
      

  
  
