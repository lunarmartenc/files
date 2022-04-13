document.getElementById("Mlogo").src = "https://drive.google.com/uc?export=download&id=1N7DSq9ecj8O7yxSuaZHnrxqFrgKQjrnf";
document.getElementById("Mcart").src = "https://drive.google.com/uc?export=download&id=1JwuhTXUky7dEdHRjYmVuKNadnICZ7G91";
document.getElementById("Mmenu").src = "https://drive.google.com/uc?export=download&id=1Mh3ComNECck578M7LByP0Tr7eIMhUsmv";
document.getElementById("Mplaystor").src = "https://drive.google.com/uc?export=download&id=14JuF-bugi7Cqzxl9_53C0rQleSWpdzIj";
document.getElementById("Mflogo").src = "https://drive.google.com/uc?export=download&id=1Au46_KU-v609tQxtl-8eX0sKmknAXAcg";
document.getElementById("mpay1").src = "https://drive.google.com/uc?export=download&id=1D661lDkCLKsiaKokmYpb_pSrmnaNeRKZ";
document.getElementById("mpay2").src = "https://drive.google.com/uc?export=download&id=1AppL0J5rJqds2UuSyPSpNUI7mwei0UL7";
document.getElementById("mpay3").src = "https://drive.google.com/uc?export=download&id=1OOqyqpzejjM4DEjQ4j9RZLtmKxtgHPvx";
document.getElementById("mpay4").src = "https://drive.google.com/uc?export=download&id=1R6VDkfsVkfgGYRdbeIvjO-TUuAROchls";
 

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
  



///////////////////Angular img lod//////////////
     function loadImage() { 
  document.getElementById('Exclusiveproduct').style.display = 'block';
  document.getElementById('Futureproduct').style.display = 'block';
  document.getElementById('Letest').style.display = 'block';
  document.getElementById('Discountproduct').style.display = 'block';
}
