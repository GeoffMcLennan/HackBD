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
    imgMap.onclick = function () {
      window.scroll(0, 0);
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

    function toggleVisibility(nextIndex, backForth) {
      var toggleOn = $('#content' + nextIndex);
      if (backForth > 0) {
        var offTarget = nextIndex - 1;
      } else if (backForth < 0) {
        var offTarget = nextIndex + 1;
      }
      var toggleOff = $('#content' + offTarget);

      $(toggleOn).css('display', 'flex');
      $(toggleOff).css('display', 'none');
      if (nextIndex == 6) {
          fetchProduct();
      }
    }

    $('#next-button').on('click', function () {
      currentIndex++;
      toggleVisibility(currentIndex, 1);
    });

    $('#back-button').on('click', function () {
      currentIndex--;
      toggleVisibility(currentIndex, -1);
    });
