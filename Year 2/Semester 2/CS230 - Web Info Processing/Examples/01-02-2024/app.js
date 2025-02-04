document.addEventListener('DOMContentLoaded', function() {
    const counterBtn = document.getElementById('counter-btn');
    const counterDisplay = document.getElementById('counter');
    let count = 0;
  
    counterBtn.addEventListener('click', function() {
      count++;
      counterDisplay.textContent = count;
    });
  });