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

//dashboard
  
  class Dashboard {
    constructor(date,time,doctor,code){
        this.date = date;
        this.time = time;
        this.doctor = doctor;
        this.code = code;
    }
}

class UI { 
    static displayDashboard() { 
      const dashboard = [
        {
          sno: '1',
          date: '12/12/2020',
          time: '12:00 PM',
          doctor: 'Dr. John',
          code: '2sgg-bn47-ltci'
          }
        ];
        dashboard.forEach((item) => UI.addItemToList(item));
    }
    static addItemToList(item) {
        const list = document.getElementById('book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${item.sno}</td>
        <td>${item.date}</td>
        <td>${item.time}</td>
        <td>${item.doctor}</td>
        <td>${item.code}</td>
        <td><a href="./video.html" class="btn btn-primary">Join Meet</a></td>
        `;
        list.appendChild(tr);

    }
}


//displayDashboard
document.addEventListener('DOMContentLoaded', UI.displayDashboard());

//Add item

// document.getElementById('book-form').addEventListener('submit', (e) => {
//   e.preventDefault();
  
//         const item = new Dashboard(date, time, doctor,code);

//   UI.addItemToList(item);
    
    
// });

//weather

const apiKey = "dab1e0cfb7b1ffef8e90df4ddce810d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const city = "Kolkata"
const temp_max = document.querySelector(".temp_max");
const temp_min = document.querySelector(".temp_min");
const icon = document.querySelector(".iconw");
const state = document.querySelector("#state");

async function getWeather() {
  const response = await fetch(`${apiUrl}&appid=${apiKey}&q=${city}`);
  const data = await response.json();
  console.log(data);
  const tempMin = Math.round(data.main.temp_min);
  const tempMax = Math.round(data.main.temp_max);
  temp_max.innerHTML = tempMax;
  temp_min.innerHTML = tempMin - 5;
  if(data.weather[0].main == "Clouds"){
    icon.src = "https://img.icons8.com/sf-black/64/FFFFFF/clouds.png";
  }else if(data.weather[0].main == "Clear"){
    icon.src = "https://img.icons8.com/external-kosonicon-outline-kosonicon/64/FFFFFF/external-clear-sky-weather-kosonicon-outline-kosonicon.png";
  }else if(data.weather[0].main == "Rain"){
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/heavy-rain.png";
  }else if(data.weather[0].main == "Drizzle"){
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/light-rain--v1.png.png";
  }else if(data.weather[0].main == "Mist"){
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/fog-day--v1.png";
  } else {
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/fog-day--v1.png";
  }
  state.innerHTML = city;
}

getWeather();
