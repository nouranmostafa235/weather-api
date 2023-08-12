const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
async function display(){
    let responce = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=db58a7bb902a4ffba3703125231108&q=cairo&days=7`)
    let data = await responce.json();
    console.log(data)
    let box = `
    <div class="col-md-4 rounded-start-3 first text-light">
            <div class="upper d-flex justify-content-between px-3">
              <p class="my-auto">${days[new Date(`${data.forecast.forecastday[0].date}`).getDay()]}</p>
              <p class="my-auto">${new Date(`${data.forecast.forecastday[0].date}`).getDate()}${months[new Date(`${data.forecast.forecastday[0].date}`).getMonth()]}</p>
            </div>
            <div class="middle mt-3 ps-3">
              <p class="grey">${data.location.name}</p>
              <h1 class="label">${data.forecast.forecastday[0].day.maxtemp_c}&deg;C <span><img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt=""></span></h1>
              <p class="blue">${data.forecast.forecastday[0].day.condition.text}</p>
            </div>
            <div class="lower d-flex ps-3">
              <p class="me-3 grey"><span class="me-1"><img src="icon-umberella.png" alt=""></span>20%</p>
              <p class="me-3 grey"><span class="me-1"><img src="icon-wind.png" alt=""></span>18km/h</p>
              <p class="grey"><span class="me-1"><img src="icon-compass.png" alt=""></span>East</p>
            </div>
          </div>
          <div class="col-md-4 text-center text-light second">
          <div class="upper">
            <p class="my-auto">${days[new Date(`${data.forecast.forecastday[1].date}`).getDay()]}</p>
          </div>
          <div class="lower py-5">
            <img src="https:${data.forecast.forecastday[1].day.condition.icon}" class="mb-3" alt="">
            <p class="fs-4 fw-semibold">${data.forecast.forecastday[1].day.maxtemp_c}&deg;C</p>
            <p class="grey">${data.forecast.forecastday[1].day.mintemp_c}&deg;</p>
            <p class="blue">${data.forecast.forecastday[1].day.condition.text}</p>
          </div>
          </div>
          <div class="col-md-4 rounded-end-3 text-center text-light third">
            <div class="upper">
              <p class="my-auto">${days[new Date(`${data.forecast.forecastday[2].date}`).getDay()]}</p>
            </div>
            <div class="lower py-5">
              <img src="https:${data.forecast.forecastday[2].day.condition.icon}" class="mb-3" alt="">
              <p class="fs-4 fw-semibold">${data.forecast.forecastday[2].day.maxtemp_c}&deg;C</p>
              <p class="grey">${data.forecast.forecastday[2].day.mintemp_c}&deg;</p>
              <p class="blue">${data.forecast.forecastday[2].day.condition.text}</p>
            </div>
          </div>
    `
    document.getElementById('row').innerHTML = box

}
display()
async function getNews() {
    let input = document.getElementById('input').value
    let responce = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=db58a7bb902a4ffba3703125231108&q=${input}&days=7`)
    let data = await responce.json();
    console.log(data)
    let box = `
    <div class="col-md-4 rounded-start-3 first text-light">
            <div class="upper d-flex justify-content-between px-3">
              <p class="my-auto">${days[new Date(`${data.forecast.forecastday[0].date}`).getDay()]}</p>
              <p class="my-auto">${new Date(`${data.forecast.forecastday[0].date}`).getDate()}${months[new Date(`${data.forecast.forecastday[0].date}`).getMonth()]}</p>
            </div>
            <div class="middle mt-3 ps-3">
              <p class="grey">${data.location.name}</p>
              <h1 class="label">${data.forecast.forecastday[0].day.maxtemp_c}&deg;C <span><img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt=""></span></h1>
              <p class="blue">${data.forecast.forecastday[0].day.condition.text}</p>
            </div>
            <div class="lower d-flex ps-3">
              <p class="me-3 grey"><span class="me-1"><img src="icon-umberella.png" alt=""></span>20%</p>
              <p class="me-3 grey"><span class="me-1"><img src="icon-wind.png" alt=""></span>18km/h</p>
              <p class="grey"><span class="me-1"><img src="icon-compass.png" alt=""></span>East</p>
            </div>
          </div>
          <div class="col-md-4 text-center text-light second">
          <div class="upper">
            <p class="my-auto">${days[new Date(`${data.forecast.forecastday[1].date}`).getDay()]}</p>
          </div>
          <div class="lower py-5">
            <img src="https:${data.forecast.forecastday[1].day.condition.icon}" class="mb-3" alt="">
            <p class="fs-4 fw-semibold">${data.forecast.forecastday[1].day.maxtemp_c}&deg;C</p>
            <p class="grey">${data.forecast.forecastday[1].day.mintemp_c}&deg;</p>
            <p class="blue">${data.forecast.forecastday[1].day.condition.text}</p>
          </div>
          </div>
          <div class="col-md-4 rounded-end-3 text-center text-light third">
            <div class="upper">
              <p class="my-auto">${days[new Date(`${data.forecast.forecastday[2].date}`).getDay()]}</p>
            </div>
            <div class="lower py-5">
              <img src="https:${data.forecast.forecastday[2].day.condition.icon}" class="mb-3" alt="">
              <p class="fs-4 fw-semibold">${data.forecast.forecastday[2].day.maxtemp_c}&deg;C</p>
              <p class="grey">${data.forecast.forecastday[2].day.mintemp_c}&deg;</p>
              <p class="blue">${data.forecast.forecastday[2].day.condition.text}</p>
            </div>
          </div>
    `
    document.getElementById('row').innerHTML = box
}
document.getElementById('btn').addEventListener('click',getNews)