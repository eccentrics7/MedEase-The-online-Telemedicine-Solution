class Dashboard {
  constructor(sno ,date, time, doctor, code) {
    this.sno = sno;
    this.date = date;
    this.time = time;
    this.doctor = doctor;
    this.code = code;
  }
}
var num = 1;
var date = "16/4/2023";
var time = "10:00 AM";
var doctor = "Dr. Srikar";
var code = "3grk-ptk3-lv15";
const ppage = document.referrer;

const check =
  "http://127.0.0.1:5500/med/MedEase-The-online-Telemedicine-Solution/docs/appointment.html";

  const pay = document.querySelector(".modal");
  const dashboard = document.querySelector(".dashboard");
if (ppage == check) {
  dashboard.style.display = "none";
  pay.style.display = "block";
  pay.style.position = "absolute";
  pay.style.top = "50%";
  pay.style.left = "50%";
  pay.style.transform = "translate(-50%, -50%)";
} else {
  dashboard.style.display = "block";
  pay.style.display = "none";
}

const checkout = document.querySelector(".checkout");

checkout.addEventListener("click", (e) => { 
  dashboard.style.display = "block";
  pay.style.display = "none";
  num = num + 1;
  if (num === 2) {
    date = "16/4/2023";
    time = "11:00 AM";
    doctor = "Dr. Reshma";
    code = "g0gs-4pix-l3jd";
  } else if (num === 3) {
    date = "17/4/2023";
    time = "12:00 AM";
    doctor = "Dr. Sri raj";
    code = "lk9z-x5bw-e371";
  }
});

checkout.addEventListener("click", (e) => { 
  e.preventDefault();

  const item = new Dashboard(num, date, time, doctor, code);

  UI.addItemToList(item);
});

class UI {
  static displayDashboard() {
    const dashboard = [
      {
        sno: "1",
        date: "15/4/2023",
        time: "10:00 AM",
        doctor: "Dr. Srikar",
        code: "3grk-ptk3-lv15"
      }
    ];
    dashboard.forEach((item) => UI.addItemToList(item));
  }
  static addItemToList(item) {
    const list = document.getElementById("book-list");
    const tr = document.createElement("tr");
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
document.addEventListener("DOMContentLoaded", UI.displayDashboard());

// Side Menu
addEventListener("resize", () => {
  const width = innerWidth;

  if (width < 768) {
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".navbar").style.display = "block";
  } else {
    document.querySelector(".nav").style.display = "flex";
    document.querySelector(".navbar").style.display = "none";
  }
});

// side-button-effect

const button = document.querySelector(".side-cont");

button.addEventListener("mouseover", function () {
  // button.classList.remove("fs-3");
  button.textContent = "Side Menu";
});

button.addEventListener("mouseout", function () {
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

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
}
showTime();

//dashboard


//weather

const apiKey = "dab1e0cfb7b1ffef8e90df4ddce810d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const city = "Kolkata";
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
  if (data.weather[0].main == "Clouds") {
    icon.src = "https://img.icons8.com/sf-black/64/FFFFFF/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src =
      "https://img.icons8.com/external-kosonicon-outline-kosonicon/64/FFFFFF/external-clear-sky-weather-kosonicon-outline-kosonicon.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/heavy-rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/light-rain--v1.png.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/fog-day--v1.png";
  } else {
    icon.src = "https://img.icons8.com/ios/50/FFFFFF/fog-day--v1.png";
  }
  state.innerHTML = city;
}
getWeather();
