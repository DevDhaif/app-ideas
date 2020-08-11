
  function add(a,b) {
      sum=a+b;
alert("HII"+sum);
  }
  function change(a,b,c,d)
  {
      document.getElementById("code").style.borderTopRightRadius=a+"px";
      document.getElementById("code").style.borderTopLeftRadius=b+"px";
      document.getElementById('code').style.borderBottomRightRadius=c+"px";
      document.getElementById('code').style.borderBottomLeftRadius=d+"px" ;
      document.getElementById('hh').style.color="red";
     
  }
  function tr(a,b,c,d){
    document.getElementById("code").style.borderTopRightRadius=a+"px";
    document.getElementById("code").style.borderTopLeftRadius=b+"px";
    document.getElementById('code').style.borderBottomRightRadius=c+"px";
      document.getElementById('code').style.borderBottomLeftRadius=d+"px" ;
      document.getElementById('code').value="     "+a+' px top right '+b+' px top left '+c+' px bottom right '+d+' px bottom left'  ;
      
  }
  function copied(){
    var copyText = document.getElementById("code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
   }