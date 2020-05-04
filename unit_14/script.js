fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&APPID=9f7778b9667431b5d15658ce9783d1a7')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        document.querySelector('.city-name').textContent = data.name
        document.querySelector('.price').innerHTML = Math.round((data.main.temp - 273)) + '&deg;'
        document.querySelector('.clouds').textContent = data.weather[0]['description']
        document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
        // https://openweathermap.org/img/wn/04n@2x.png
    })
    .catch(function () {

    })