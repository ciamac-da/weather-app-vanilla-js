const key = "6QKGBuSAmtzGGxw8k4Q7x7snCrqAJMbp"


// Get weather informa
const getWeather = async (id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}

// Get city information
const getCity = async (city) => {

    const base =  "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}