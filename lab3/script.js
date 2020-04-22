fetch('https://api.openweathermap.org/data/2.5/weather?lang=ru&q=Moscow&appid=d194c5a4457d9146180953f9de89a906')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.current-weather__now').innerHTML =  Math.round(data.main.temp - 273) + '&deg;' + 'C';
    document.querySelector('.current-weather__feels').innerHTML = 'Ощущается как: ' + Math.round(data.main.feels_like - 273) + '&deg;' + 'C';
    document.querySelector('.current-img').style.backgroundImage = `url(img/${data.weather[0].icon}.png)`;
})
.catch(function () {
 
}); 
fetch('https://api.openweathermap.org/data/2.5/forecast?lang=ru&q=Moscow&appid=d194c5a4457d9146180953f9de89a906')
.then(function (resp1) { return resp1.json() })
.then(function (blank) {
    console.log(blank);
    document.querySelectorAll('.current-weather__now')[1].innerHTML =  Math.round(blank.list[0].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.current-weather__feels')[1].innerHTML = 'Ощущается как: ' + Math.round(blank.list[0].main.feels_like - 273) + '&deg;' + 'C';
    document.querySelectorAll('.current-img')[1].style.backgroundImage = `url(img/${blank.list[0].weather[0].icon}.png)`;
    document.querySelectorAll('.current-weather__now')[2].innerHTML =  Math.round(blank.list[9].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.current-weather__feels')[2].innerHTML = 'Ощущается как: ' + Math.round(blank.list[9].main.feels_like - 273) + '&deg;' + 'C';
    document.querySelectorAll('.current-img')[2].style.backgroundImage = `url(img/${blank.list[9].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[4].style.backgroundImage = `url(img/${blank.list[0].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[5].style.backgroundImage = `url(img/${blank.list[1].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[6].style.backgroundImage = `url(img/${blank.list[2].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[7].style.backgroundImage = `url(img/${blank.list[3].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[0].style.backgroundImage = `url(img/${blank.list[4].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[1].style.backgroundImage = `url(img/${blank.list[5].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[2].style.backgroundImage = `url(img/${blank.list[6].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__times__article__image')[3].style.backgroundImage = `url(img/${blank.list[7].weather[0].icon}.png)`;
    document.querySelectorAll('.weather__current__degrees__article')[0].innerHTML = Math.round(blank.list[4].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[1].innerHTML = Math.round(blank.list[5].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[2].innerHTML = Math.round(blank.list[6].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[3].innerHTML = Math.round(blank.list[7].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[4].innerHTML = Math.round(blank.list[0].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[5].innerHTML = Math.round(blank.list[1].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[6].innerHTML = Math.round(blank.list[2].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__degrees__article')[7].innerHTML = Math.round(blank.list[3].main.temp - 273) + '&deg;' + 'C';
        document.querySelectorAll('.weather__current__times__article__mob-degree')[0].innerHTML = Math.round(blank.list[4].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[1].innerHTML = Math.round(blank.list[5].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[2].innerHTML = Math.round(blank.list[6].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[3].innerHTML = Math.round(blank.list[7].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[4].innerHTML = Math.round(blank.list[0].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[5].innerHTML = Math.round(blank.list[1].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[6].innerHTML = Math.round(blank.list[2].main.temp - 273) + '&deg;' + 'C';
    document.querySelectorAll('.weather__current__times__article__mob-degree')[7].innerHTML = Math.round(blank.list[3].main.temp - 273) + '&deg;' + 'C';


})
.catch(function () {
 
});
