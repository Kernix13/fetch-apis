// new one using .blob for an image
async function getImage(url) {
  try {
    const response = await fetch(url);
    console.log("It Worked!");
    if (response.ok) {
      // the unsplash url is blocked by CORS so this is not working
      console.log(response)
      const blob = await response.blob();
      document.getElementById("fetch-image").src = URL.createObjectURL(blob);
    } else {
      console.log("Not successful");
    }
  } catch (error) {
    console.error(error);
  }
}

// removed .then() and .catch, see NOTES.md for original
getImage("https://unsplash.it/300/200");

// NASA example
/*
getData();

async function getData() {
  try {
    const response = await fetch("./data/ZonAnn.Ts+dSST.csv");
    if (response.ok) {
      const data = await response.text();
      const table = data.trim().split(/\n/).slice(1);

      table.forEach(row => {
        const columns = row.split(",");
        const year = columns[0];
        const temp = columns[1];
        // console.log(year, temp);
      });
    } else {
      console.log("Not successful");
    }
  } catch (error) {
    console.error(error);
  }
}

// sample code from chart.js
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Global Average TEmperature",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
};

const config = {
  type: "line",
  data: data,
  options: {}
};

const myChart = new Chart(document.getElementById("chart"), config);
*/

// ISS EXAMPLE
const map = L.map("issMap").setView([0, 0], 1);
const marker = L.marker([0, 0]).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function fetchISSLocation(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const { latitude, longitude } = data;
      console.log(data);
      console.log(latitude, longitude);

      // marker.setLatLng([latitude, longitude]);

      document.getElementById("lat").textContent = latitude;
      document.getElementById("lon").textContent = longitude;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchISSLocation("https://api.wheretheiss.at/v1/satellites/25544");
