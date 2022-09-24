//function notif(){
  //window.alert('Obrigado pelo Comentário!');
  //var txt = $("#comment").val('');
                //alert(txt);//

//}
$(document).ready(function () {
            
    //This function called when the button is clicked
    $("#submit").click(function () {
        
        // val() method is used to get the values from 
       // textarea and stored in txt variable
        var txt = $("#comment").val('');
        alert('Obrigado por seu comentário!')
    });
});

function filter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ul");
  li = ul.getElementsByTagName("li");


  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (!input.value) {
          li[i].style.display = "none";
      } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
      } else {
          li[i].style.display = "none";
      }

  }
}

function alert2(){
    window.alert('Entre em contato conosco!\nNosso Email é : falecomotimize@gmail.com');
}