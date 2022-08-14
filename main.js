function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  // <!-- for dropdown list hover -->

  $(document).ready(function(){
      $(".dropdown").hover(function(){
          var dropdownMenu = $(this).children(".dropdown-menu");
          if(dropdownMenu.is(":visible")){
              dropdownMenu.parent().toggleClass("open");
          }
      });
  });     
  