let tombol = document.getElementById('menu');



tombol.addEventListener('click',function(){
  let nav = document.getElementById('mncl')
  if (nav.style.display == "none"){
    nav.style.display = "block"
  }else {
    nav.style.display = "none"
  }
})