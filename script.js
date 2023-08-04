<script>
    document.getElementById("portrait-button").addEventListener("click", function() {
      document.title = "Portrait";
    });
  
    document.getElementById("spaces-button").addEventListener("click", function() {
      document.title = "Spaces";
    });
  
    document.getElementById("music-button").addEventListener("click", function() {
      document.title = "Music";
    });
  </script>

var buttons = document.querySelectorAll('.menu-button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    buttons.forEach(function(innerButton) {
      innerButton.classList.remove('active');
    });
    
    // Add active class to clicked button
    button.classList.add('active');
  });
});
