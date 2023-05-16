let latitude= 0;
let longitude= 0;

window.onload = function() {
                            const date = new Date();
                            const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                            document.getElementById('date').innerHTML= dateString
                           
                            if ("geolocation" in navigator) {
                                                                navigator.geolocation.getCurrentPosition(success)
                                                            } else {
                                                                    console.log("Geolocation is not available in your browser.");
                                                                   }
                           }

function success(position){
                           latitude= position.coords.latitude;
                           longitude= position.coords.longitude;
                           console.log(latitude, longitude);
                          }
                            

                            
	                          const btn = document.getElementById("getWeatherBtn")
	                          btn.addEventListener("click", function() {

                                                                     const xhr = new XMLHttpRequest();
                                                                     xhr.open("GET", `http://localhost:3000/weather/${lat}/${lon}`); 
                                                                     xhr.send();
                                                                     xhr.onload = function() {                 
                                                                                              const body = JSON.parse(xhr.responseText);
                                                                                              let temperature = body.temperature;
	                                                                                            let weatherStatus = body.weatherStatus;
                                                                                              document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°F`;
                                                                                              document.getElementById("weatherStatus").innerHTML = `Weather Status: ${weatherStatus}`;

                                                                                             }

                                                                     var location = "Santa Cruz";
                                                                     var temp = 59;
                                                                     var helloString = `Hello, in ${location} it is ${temp} Degrees`;
                                                                     console.log(helloString);                


                                                                    var forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]]
                                                                    var forecastElements = document.getElementsByClassName("forecast");
                                                                    for (var i = 0; i < forecast.length; i++) {
                                                                                                               forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "°F";
                                                                                                              }

                                                                    const xhr2 = new XMLHttpRequest();
                                                                    xhr2.open("GET", `http://localhost:3000/weather/${lat}/${lon}`); 
                                                                    xhr2.send();
                                                                    xhr2.onload = function() {                 
                                                                                              const body = JSON.parse(xhr2.responseText);
                                                                                              var forecast = body;
                                                                                              var forecastElements = document.getElementsByClassName("forecast");
	                                                                                            for (var i = 0; i < forecast.length; i++) {
                                                                                                                                         forecastElements[i].innerHTML = `${forecast[i].dayName}: ${forecast[i].temp}°F`;           
                                                                                                                                        }
		
                                                                                                    

                                                                  }
                                                                                                            
                                                                                                              
                                                                });
                          