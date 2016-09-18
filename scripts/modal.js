    // Get the modal
    var modal = document.getElementById('overlay-container');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close-button");

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    }

	
    // Get the button that opens the modal
    var imgMap = document.getElementById("imgMap");
	
    // When the user clicks the button, open the modal
    imgMap.onclick = function() {
	  window.scroll(0,0);
      modal.style.display = "block";
    }	
	
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    var currentIndex = 0;

    $('#next-button').on('click', function () {
      if (currentIndex == 0) {
        $('#content0').css('display', 'none');
        $('#content1').css('display', 'flex');
        currentIndex++;
      } else if (currentIndex == 1) {
        $('#content1').css('display', 'none');
        $('#content2').css('display', 'flex');
        currentIndex++;
      } else if (currentIndex == 2) {
        $('#content2').css('display', 'none');
        $('#content3').css('display', 'flex');
        currentIndex++;
      } else if (currentIndex == 3) {
        $('#content3').css('display', 'none');
        $('#content4').css('display', 'flex');
        currentIndex++;
      } else if (currentIndex == 4) {
        $('#content4').css('display', 'none');
        $('#content5').css('display', 'flex');
        currentIndex++;
      } else if (currentIndex == 5) {
        $('#content5').css('display', 'none');
        $('#content6').css('display', 'flex');
        currentIndex++;
        fetchProduct();
		document.getElementById("next-button").textContent="Finish";
      } else if (currentIndex == 6) {
        $('#content0').css('display', 'none');
        $('#content1').css('display', 'none');
        $('#content2').css('display', 'none');
        $('#content3').css('display', 'none');
        $('#content4').css('display', 'none');
        $('#content5').css('display', 'none');
        modal.style.display = "none";
      }
    });

    $('#back-button').on('click', function () {
      if (currentIndex == 0) {
        $('#content0').css('display', 'flex');
        $('#content1').css('display', 'none');
        $('#content2').css('display', 'none');
        $('#content3').css('display', 'none');
        $('#content4').css('display', 'none');
        $('#content5').css('display', 'none');
        $('#content6').css('display', 'none');
		modal.style.display = "none";
      } else if (currentIndex == 1) {  
        $('#content0').css('display', 'flex');
        $('#content1').css('display', 'none');
        currentIndex--;
      } else if (currentIndex == 2) {
        $('#content1').css('display', 'flex');
        $('#content2').css('display', 'none');
        currentIndex--;
      } else if (currentIndex == 3) {
        $('#content2').css('display', 'flex');
        $('#content3').css('display', 'none');
        currentIndex--;
      } else if (currentIndex == 4) {
        $('#content3').css('display', 'flex');
        $('#content4').css('display', 'none');
        currentIndex--;
      } else if (currentIndex == 5) {
        $('#content4').css('display', 'flex');
        $('#content5').css('display', 'none');
        currentIndex--;
      } else if (currentIndex == 6) {
        $('#content5').css('display', 'flex');
        $('#content6').css('display', 'none');
		document.getElementById("next-button").textContent="Next >";   
        currentIndex--;
      }
    });
