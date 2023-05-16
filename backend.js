const express = require('express');
const request = require("request");
const cors = require('cors');

const app = express();
app.use(cors());
const APIKey = "498dd7baff7a6262d6c3f8e6b8f68c2e"; 

app.get('/weather/:lat/:lon', (req, res) => {
  
                                              console.log("welcome to the root!");
                                              var lat = req.params.lat;
                                              var lon = req.params.lon;
                                              console.log(lat, lon);
                                              var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
  
	                                            request(url, (error, response, body)=>{
		
		                                                                                 if(error) console.log(error);
		                                                                                 console.log(response.statusCode);
		                                                                                 body = JSON.parse(body);
                                                                                     let weatherStatus = body.weather[0].main;
                                                                                     res.send({"temperature" : body.main.temp , "weatherStatus" : weatherStatus});
		                                                                                 console.log(body.main.temp);
        
	                                                                                  });
  
                                            });

app.get('/5day/:lat/:lon', (req, res) => {
    
                                           console.log("welcome to the root!");
    
                                           var lat = req.params.lat;
                                           var lon = req.params.lon;
                                           var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
  
    
                                           request(url, (error, response, body)=>{
          
          
                                                                                  if(error) console.log(error);
                                                                                  console.log(response.statusCode);
                                                                                  body = JSON.parse(body);
                                                                                  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                                                                  let forecast = [];
          
                                                                                  let todaysDate = new Date().getDay(); 
                                                                                  for (let i = 0; i < 5; i++){ 
                                                                                                               let tempSum = 0; 
                                                                                                               let count = 0; 
                                                                                                               for (const dataPoint of body.list){ 
                                                                                                                                                   let date = new Date(dataPoint.dt * 1000) 
                                                                                                                                                   if (date.getDay() === todaysDate){ 
                                                                                                                                                                                       count++; 
                                                                                                                                                                                       tempSum += dataPoint.main.temp; 
                                                                                                                                                                                    }
                                                                                                                                                 }
                                                                                                               let day = {"dayName" : week[todaysDate] , "temp" : Math.round(tempSum/count)}
                                                                                                               forecast.push(day); 
                                                                                                               todaysDate = (todaysDate + 1) % 7;
                                                                                                             }
                                                                                     res.send(forecast);
                                                                                 });
    
                                          });

app.listen(3000, () => {
                         console.log('Example app listening on port 3000!');
                       });
