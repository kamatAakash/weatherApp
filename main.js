const input = document.querySelector('input')
const addBtn = document.querySelector('#btn')
const output = document.querySelector('.output')

async function getData() {

  try {
    const api = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${input.value}&aqi=no`)
    const result = await api.json()


    const condition = result.current.condition.text
    console.log(condition);
    let icons = "";

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
      icons = "./images/cloudy.svg";
    }
    

    console.log(result)
    output.innerHTML=''
    output.innerHTML =
      `
        <img src=${icons}
        <div>${"Temperature: " + result.current.temp_c}</div>
        <div>${"Feels like: " + result.current.feelslike_c}</div>
        <div>${"Humidity: " + result.current.humidity}</div>
        <div>${"Condition: " + result.current.condition.text}</div>
        <div>${"City : " + result.location.name}</div>
        <div>${"Region: " + result.location.region}</div>
        <div>${"Country: " + result.location.country}</div>

`
  }catch (error) {
    console.log(error);
    output.innerHTML = `no matching Location fount`;
  }
    input.value = ''
  }

  



addBtn.addEventListener('click', getData)

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') getData()
})

const a  = 100
console.log(a);
