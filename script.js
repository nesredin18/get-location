var output = document.getElementById("output");  
    function getlocation() {  
        if(navigator.geolocation){  
            navigator.geolocation.getCurrentPosition(displayPosition)  
          }  
        else  
        {  
             alert("Your browser does not support Geolocation API.")  
         }
          }  
       
     function displayPosition(position){  
    var xhr = new XMLHttpRequest();
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var url="https://geocode.maps.co/reverse?lat="+lat+"& lon="+lng;
    // Paste your LocationIQ token below.
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
  
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            var city = response.address.state_district;
            var country=response.address.country;
            var output = "<br>Your current location details<br>" + "Latitude: " + position.coords.latitude + "<br>" + "Longitude: " +    position.coords.longitude +"<br>City: " + city +"<br>Country: " + country;  
       document.getElementById("output").innerHTML = output;
       var mapurl = "https://www.google.com/maps/@" + position.coords.latitude + "," + position.coords.longitude + ",14z";
       document.getElementById("mapurl").innerHTML =  "<a href='" + mapurl +"' target='_blank'> Click here to see your location on the map.</a>";

        }
    }


     } 
