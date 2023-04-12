// Side Menu
addEventListener('resize', () => {
    const width = innerWidth;
  
    if (width < 768) {
      document.querySelector('.nav').style.display = 'none';
      document.querySelector('.navbar').style.display = 'block';
    } else {
      document.querySelector('.nav').style.display = 'flex';
      document.querySelector('.navbar').style.display = 'none';
    }
  });
  
  // side-button-effect
  
  const button = document.querySelector(".side-cont");
  
  button.addEventListener("mouseover", function() {
    // button.classList.remove("fs-3");
    button.textContent = "Side Menu";
  });
  
  button.addEventListener("mouseout", function() {
    // button.classList.add("fs-3");
    button.innerHTML = "&#8592;";
  });
  
  
  // Time
  
  setInterval(showTime, 1000);
  function showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      am_pm = "AM";
    
      if (hour > 12) {
          hour -= 12;
          am_pm = "PM";
      }
      if (hour == 0) {
          hr = 12;
          am_pm = "AM";
      }
    
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
    
      let currentTime = hour + ":" 
              + min + ":" + sec + am_pm;
    
      document.getElementById("clock")
              .innerHTML = currentTime;
  }
  showTime();
  
  