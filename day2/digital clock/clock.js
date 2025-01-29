function updateClock() {
    const now = new Date();
    const date = now.toDateString(); 
    const time = now.toLocaleTimeString(); 
  
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
  }

  setInterval(updateClock, 1000);
  
 
  updateClock();