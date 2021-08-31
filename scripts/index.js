const cityForm = document.querySelector("form")
const card = document.querySelector(".card")
const details = document.querySelector(".details")



const updateUI = (data) => {

    const cityInfo = data.cityInfo
    const weather = data.weather

    // Update details template
    details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    // Remove d-none class from card and add to details
    if(card.classList.contains("d-none")) {
        card.classList.remove("d-none")
    }
}



const updateCity = async (city) => {

    const cityInfo = await getCity(city)
    const weather = await getWeather(cityInfo.Key)

    return {
        cityInfo,
        weather
    }

}

cityForm.addEventListener("submit", e => {
    e.preventDefault()
    
    // Get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // Update the UI with new city
    updateCity(city)
     .then(data => updateUI(data))
     .catch(err => console.error(err))

})