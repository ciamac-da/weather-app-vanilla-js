const key = "6QKGBuSAmtzGGxw8k4Q7x7snCrqAJMbp"

const getCity = async (city) => {

    const base =  "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}
getCity("berlin")
.then(data => console.log(data))
.catch(err => console.error(err))