var config = {
    apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
    authDomain: "effort-5efac.firebaseapp.com",
    databaseURL: "https://effort-5efac.firebaseio.com",
    projectId: "effort-5efac",
    storageBucket: "effort-5efac.appspot.com",
    messagingSenderId: "771931121287",
    appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
    measurementId: "G-GLD9CY5VPF"
  };
  firebase.initializeApp(config);
  
  
   
  
  function encodeImageFileAsURL() {
  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      localStorage.setItem("catagori", "cat1")
      document.getElementById("imgf").value = srcData;
  
      document.getElementById("btn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  }
  
  
  function encodeImageFileAsURL1() {
  
  var filesSelected = document.getElementById("inputFileToLoad1").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      localStorage.setItem("catagori", "cat2");
      document.getElementById("imgf").value = srcData;
  
      document.getElementById("btn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  }
  
  
  function encodeImageFileAsURL2() {
  
  var filesSelected = document.getElementById("inputFileToLoad2").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
  
    var fileReader = new FileReader();
  
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      localStorage.setItem("catagori", "cat3")
      document.getElementById("imgf").value = srcData;
  
      document.getElementById("btn").click();
  
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  }
  
  
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
  
       if(id=="SomeThing Wrong"){
         alert("Uplod Filed")
       }
       else{
        doSome(id);
       }
            
      
  })}}
  
  
  function doSome(id){
       document.getElementById("name").value =
  Math.floor(Math.random() * 10000000000)+".png";
  var STagFolder = 'Admin/Catagory';
  var catagori = localStorage.getItem("catagori");
  if(catagori=="cat1"){
      alert(catagori)
      var cont = document.getElementById("catagori1").value;
       var cont2 = "/p/catagory.html?="+cont;
       var cimg = "https://drive.google.com/uc?export=download&id="+id;
      firebase.database().ref(STagFolder).update({ 
          catagoriimg1 : cimg,
          catagorilink1 : cont2,
          });
      alert("Update Successfully...");
  }
  
  
  else if(catagori=="cat2"){
      var cont = document.getElementById("catagori2").value;
       var cont2 = "/p/catagory.html?="+cont;
       var cimg = "https://drive.google.com/uc?export=download&id="+id;
      firebase.database().ref(STagFolder).update({ 
          catagoriimg2 : cimg,
          catagorilink2 : cont2,
          });
      alert("Update Successfully...");
      
  }
  
  else if(catagori=="cat3"){
  
      var cont = document.getElementById("catagori3").value;
       var cont2 = "/p/catagory.html?="+cont;
       var cimg = "https://drive.google.com/uc?export=download&id="+id;
      firebase.database().ref(STagFolder).update({ 
          catagoriimg3 : cimg,
          catagorilink3 : cont2,
          });
      alert("Update Successfully...");
      
  }
  
  }
  
  
      
      
      /////////Red----Section
      var TagFolder = 'Admin/Payment';
      var RED = firebase.database().ref(TagFolder).child('ServiceCharge');
                  RED.on('value', function(snapshot) {
                  var Reddata = (snapshot.val());
                  
                  document.getElementById("servececharge").value = Reddata;
                  
                  }); 
  
   var RED = firebase.database().ref(TagFolder).child('Bikash');
                  RED.on('value', function(snapshot) {
                  var Reddata = (snapshot.val());
                  
                  document.getElementById("bikash").value = Reddata;
                            }); 
  
  var RED = firebase.database().ref(TagFolder).child('nogod');
                  RED.on('value', function(snapshot) {
                  var Reddata = (snapshot.val());
                  
                  document.getElementById("nogod").value = Reddata;
                  
                  }); 
  
   var RED = firebase.database().ref(TagFolder).child('ucash');
                  RED.on('value', function(snapshot) {
                  var Reddata = (snapshot.val());
                  
                  document.getElementById("ucash").value = Reddata;
                  
                  });    
      
      
       //////////Update---Section/////
       function servececharge(){
      
      var cont = document.getElementById("servececharge").value;
      var STagFolder = 'Admin/Payment';
      firebase.database().ref(STagFolder).update({ 
          ServiceCharge : cont,
          });
      alert("Update Successfully...");
      }
  
      function bikashc(){
      
      var cont = document.getElementById("bikash").value;
      var STagFolder = 'Admin/Payment';
      firebase.database().ref(STagFolder).update({ 
          Bikash : cont,
          });
      alert("Update Successfully...");
      }
  
      function nogodc(){
      
      var cont = document.getElementById("nogod").value;
      var STagFolder = 'Admin/Payment';
      firebase.database().ref(STagFolder).update({ 
          nogod : cont,
          });
      alert("Update Successfully...");
      }
  
      function ucashc(){
      
      var cont = document.getElementById("ucash").value;
      var STagFolder = 'Admin/Payment';
      firebase.database().ref(STagFolder).update({ 
          ucash : cont,
          });
      alert("Update Successfully...");
      }
       
      
      /////////////////Delete----Date---Section
      
      
  //////Img-Random-File-namew set
  
  document.getElementById("name").value =
  Math.floor(Math.random() * 10000000000)+".png";
  


  //////////////////Extra////////////

  var frb = firebase.auth();
frb.onAuthStateChanged(user => {
  if (user) {

    document.getElementById("mainWpAdmin").style.display = "block";
            ////
   }
            
        else {
       window.location.href = "account.html";      
    // No user is signed in.
  }
});



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

