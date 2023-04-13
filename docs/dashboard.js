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
  
  





















  class Dashboard {
    constructor(date,time,doctor,link){
        this.date = date;
        this.time = time;
        this.doctor = doctor;
        this.link = link;
    }
}

class UI { 
    static displayDashboard() { 
      const dashboard = [
        {
          date: '12/12/2020',
          time: '12:00 PM',
          doctor: 'Dr. John',
          link: '2sgg-bn47-ltci'
          }
        ];
        dashboard.forEach((item) => UI.addBookToList(item));
    }
    static addBookToList(item) {
        const list = document.getElementById('book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${item.date}</td>
        <td>${item.time}</td>
        <td>${item.doctor}</td>
        <td>${item.link}</td>
        <td><a href="./video.html" class="btn btn-primary">Join Meet</a></td>
        `;
        list.appendChild(tr);

    }
}


//displayDashboard
document.addEventListener('DOMContentLoaded', UI.displayDashboard());

//Add book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
        const item = new Dashboard(date, time, doctor,link);

  UI.addBookToList(item);
    
    
});
