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
var date = "16/9/2023";
var time = "10:00 AM";
var doctor = "Dr. Srikar";
var code = "3grk-ptk3-lv15";
const ppage = document.referrer;
const page = ppage.split("/").pop();


const check =
  "appointment.html";
  const pay = document.querySelector(".modal");
  const dashboard = document.querySelector(".dashboard");
if (page == check) {
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
    date = "16/9/2023";
    time = "11:00 AM";
    doctor = "Dr. Reshma";
    code = "tnyp-v40z-5y8b";
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
        date: "15/9/2023",
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
        <td><a href="https://demo.videosdk.live/conference-meeting/y3bw-xq5p-1yks" class="btn btn-primary">Join Meet</a></td>
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
// calendar
var cal = {
 
  sMon : false, 
  data : null, 
  sDay : 0, sMth : 0, sYear : 0, 

  // MONTHS & DAY NAMES
  months : [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  days : ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],

  
  hMth : null, hYear : null,
  hWrap : null, 
  hFormWrap : null, hForm : null, 
  hfDate : null, hfTxt : null, hfDel : null, 


  init : () => {

    cal.hMth = document.getElementById("calMonth");
    cal.hYear = document.getElementById("calYear");
    cal.hWrap = document.getElementById("calWrap");
    cal.hFormWrap = document.getElementById("calForm");
    cal.hForm = cal.hFormWrap.querySelector("form");
    cal.hfDate = document.getElementById("evtDate");
    cal.hfTxt = document.getElementById("evtTxt");
    cal.hfDel = document.getElementById("evtDel");


    let now = new Date(), nowMth = now.getMonth();
    cal.hYear.value = parseInt(now.getFullYear());
    for (let i=0; i<12; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = cal.months[i];
      if (i==nowMth) { opt.selected = true; }
      cal.hMth.appendChild(opt);
    }

    cal.hMth.onchange = cal.draw;
    cal.hYear.onchange = cal.draw;
    document.getElementById("calBack").onclick = () => cal.pshift();
    document.getElementById("calNext").onclick = () => cal.pshift(1);
    cal.hForm.onsubmit = cal.save;
    document.getElementById("evtClose").onclick = () => cal.hFormWrap.close();
    cal.hfDel.onclick = cal.del;


    if (cal.sMon) { cal.days.push(cal.days.shift()); }
    cal.draw();
  },

  pshift : forward => {
    cal.sMth = parseInt(cal.hMth.value);
    cal.sYear = parseInt(cal.hYear.value);
    if (forward) { cal.sMth++; } else { cal.sMth--; }
    if (cal.sMth > 11) { cal.sMth = 0; cal.sYear++; }
    if (cal.sMth < 0) { cal.sMth = 11; cal.sYear--; }
    cal.hMth.value = cal.sMth;
    cal.hYear.value = cal.sYear;
    cal.draw();
  },

  draw : () => {

    cal.sMth = parseInt(cal.hMth.value); 
    cal.sYear = parseInt(cal.hYear.value); 
    let daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), 
        startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), 
        endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(), 
        now = new Date(), 
        nowMth = now.getMonth(), 
        nowYear = parseInt(now.getFullYear()), 
        nowDay = cal.sMth==nowMth && cal.sYear==nowYear ? now.getDate() : null ;


    cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
    if (cal.data==null) {
      localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
      cal.data = {};
    } else { cal.data = JSON.parse(cal.data); }

    let squares = [];
    if (cal.sMon && startDay != 1) {
      let blanks = startDay==0 ? 7 : startDay ;
      for (let i=1; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && startDay != 0) {
      for (let i=0; i<startDay; i++) { squares.push("b"); }
    }

    for (let i=1; i<=daysInMth; i++) { squares.push(i); }

 
    if (cal.sMon && endDay != 0) {
      let blanks = endDay==6 ? 1 : 7-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && endDay != 6) {
      let blanks = endDay==0 ? 6 : 6-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }


    cal.hWrap.innerHTML = `<div class="calHead"></div>
    <div class="calBody">
      <div class="calRow"></div>
    </div>`;


    wrap = cal.hWrap.querySelector(".calHead");
    for (let d of cal.days) {
      let cell = document.createElement("div");
      cell.className = "calCell";
      cell.innerHTML = d;
      wrap.appendChild(cell);
    }


    wrap = cal.hWrap.querySelector(".calBody");
    row = cal.hWrap.querySelector(".calRow");
    for (let i=0; i<squares.length; i++) {

      let cell = document.createElement("div");
      cell.className = "calCell";
      if (nowDay==squares[i]) { cell.classList.add("calToday"); }
      if (squares[i]=="b") { cell.classList.add("calBlank"); }
      else {
        cell.innerHTML = `<div class="cellDate">${squares[i]}</div>`;
        if (cal.data[squares[i]]) {
          cell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cell.onclick = () => { cal.show(cell); };
      }
      row.appendChild(cell);

      if (i!=(squares.length-1) && i!=0 && (i+1)%7==0) {
        row = document.createElement("div");
        row.className = "calRow";
        wrap.appendChild(row);
      }
    }
  },
  show : cell => {
    cal.hForm.reset();
    cal.sDay = cell.querySelector(".cellDate").innerHTML;
    cal.hfDate.value = `${cal.sDay} ${cal.months[cal.sMth]} ${cal.sYear}`;
    if (cal.data[cal.sDay] !== undefined) {
      cal.hfTxt.value = cal.data[cal.sDay];
      cal.hfDel.classList.remove("hide");
    } else { cal.hfDel.classList.add("hide"); }
    cal.hFormWrap.show();
  },

  save : () => {
    cal.data[cal.sDay] = cal.hfTxt.value;
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.draw();
    cal.hFormWrap.close();
    return false;
  },
  del : () => { if (confirm("Delete event?")) {
    delete cal.data[cal.sDay];
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.draw();
    cal.hFormWrap.close();
  }}
};
window.onload = cal.init;
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
