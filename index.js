// window.onref
const btn = document.querySelector("#citySearch")
btn.addEventListener("click",weather);
const inputCity = document.querySelector("#city")
inputCity.addEventListener("change",weather);

function showResult(result,city){
    // console.log(result)
    document.querySelector(".location").innerText= city;
    document.querySelector(".temp").innerHTML=`${result.temp}&deg;`;
    document.querySelector(".wind").innerHTML=`${result.wind_speed} KMPH`;
    document.querySelector(".humidity").innerHTML=`${result.humidity} MM`;

    if(result.humidity > 60){
        document.querySelector(".conditions").innerHTML = "&#xf013;";
    }
    if(result.humidity > 90){
        document.querySelector(".conditions").innerHTML = "&#xf019;";
    }
    if(result.temp < 10){
        document.querySelector(".conditions").innerHTML = "&#xf076;";
    }

}

async function weather(){
    const city = document.querySelector("#city").value
    console.log(typeof(city))


    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e8fbc7f4bmshfe24d4bfdc532fdp1bfb32jsnd6717d34c49f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url+city, options);
    const result = await response.json();
    // console.log(result);

    showResult(result,city);
}
catch (error) {
    console.error(error);
}

}


// const currTemp = async(position)=>{
    
//     const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '2e8fbc7f4bmshfe24d4bfdc532fdp1bfb32jsnd6717d34c49f',
//             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         // console.log(result);
//         showResult(result,'NOW');

//     } catch (error) {
//         console.error(error);
//     }
// }

// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(currTemp);
//     } else { 
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  

// const locBtn = document.querySelector("#locBtn");
// locBtn.addEventListener("click",getLocation);

