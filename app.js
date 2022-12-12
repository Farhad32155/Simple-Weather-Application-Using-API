const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '61fe7640cdmsh0174675333834cep14e9e4jsn1c8b88e10557',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));