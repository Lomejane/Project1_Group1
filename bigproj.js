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

  var ProductImg = document.getElementById('ProductImg');
  var imgsml = document.getElementsByClassName('imgsml');

        small-img[0].onclick = function ()
        {
            ProductImg.src = imgsml[0].src;

        }
        small-img[1].onclick = function ()
        {
            ProductImg.src = imgsml[1].src;

        }
        small-img[2].onclick = function ()
        {
            ProductImg.src = imgsml[2].src;

        }
        small-img[3].onclick = function ()
        {
            ProductImg.src = imgsml[3].src;

        }