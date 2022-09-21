// new one using .blob for an image
async function getImage(url) {
  try {
    const response = await fetch(url);
    console.log("It Worked!");
    if (response.ok) {
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
getData();

async function getData() {
  try {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    if (response.ok) {
      const data = await response.text();
      const table = data.trim().split(/\n/).slice(1);

      table.forEach(row => {
        const columns = row.split(",");
        const year = columns[0];
        const temp = columns[1];
        console.log(year, temp);
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
