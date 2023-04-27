let latitude=36.9836297;
let longitude=-121.9840388;
window.onload = function() {
                            const date = new Date();
                            const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                           }
if ("geolocation" in navigator) {
                                 navigator.geolocation.getCurrentPosition(success);
                                } 
else {
      console.log("Geolocation is not available in your browser.");
     }
function success(position){
                            latitude = position.coords.latitude;
                            longitude = position.coords.longitude;
                          }
btn.addEventListener("click", () => {
                                     let forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]]
                                     let forecastElements = document.getElementsByClassName("forecast");
                                     for (let i = 0; i < forecast.length; i++) {
                                                                                forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "°F";
                                                                               }
                                    });
    