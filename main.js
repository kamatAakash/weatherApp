const input = document.querySelector('input')
const addBtn = document.querySelector('#btn')
const output = document.querySelector('.output')

async function getData() {

  if (input.value === "") {
    alert("Please Enter City Name");
    return;
  }

  try {
    const api = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${input.value}&aqi=no`)
    const result = await api.json()


    const condition = result.current.condition.text
    console.log(condition);

    if (condition === "Partly Cloudy") {
      icons = './images/cloudy.svg';
    }
    else if (condition === "Rainy") {
      icons = "./images/rainy.svg";
    }
    else if (condition === "Mist") {
      icons = "./images/thunder.svg";
    }
    else if (condition === "Cloudy") {
      icons = "./images/snowy.svg";
    }
    else {
      icons = "./images/sunny.svg";
    }


    console.log(result);

    output.innerHTML = `
    <img src="${icons}" alt="Weather">

    <div class="weather-details">

         <h2>${result.location.name}</h2>

        <p> Temperature : ${result.current.temp_c} °C</p>

        <p> Feels Like : ${result.current.feelslike_c} °C</p>

        <p> Humidity : ${result.current.humidity}%</p>

        <p> Country : ${result.location.country}</p>

    </div>
`;
  } catch (error) {
    console.log(error);
    output.innerHTML = `<h2 class="error">No Matching Location Founded!<h2>`;
  }
  input.value = ''
}



addBtn.addEventListener('click', getData)

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') getData()
})

