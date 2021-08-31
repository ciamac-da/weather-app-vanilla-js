const cityForm = document.querySelector("form")


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
     .then(data => console.log(data))
     .catch(err => console.error(err))

})