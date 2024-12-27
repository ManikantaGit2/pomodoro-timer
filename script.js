    let timer;
    let seconds = 1500; // 25 minutes

    function updateTimer() {
      const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      document.getElementById('timer').textContent = `${minutes}:${secs}`;
    }

    function startTimer() {
      if (!timer) {
        timer = setInterval(() => {
          if (seconds > 0) {
            seconds--;
            updateTimer();
          } else {
            clearInterval(timer);
            timer = null;
            alert('Time is up!');
          }
        }, 1000);
      }
    }

    updateTimer();