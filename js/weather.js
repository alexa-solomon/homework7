function gettingJSON(){
    //Display the forecast
    let key = '5fa5fc3ba6ebf20b6092fd10e922ffbb';
    document.querySelector('#forecast').style.display = 'block';


    //Set default location if one isn't provided
    let location;
    if (document.querySelector("#location").value == ''){
        location = 'Ann Arbor';
    }
    else{
        location = document.querySelector("#location").value;
    }
    
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.querySelector('#celcius').checked == true){
        format = 'metric';
    }
    else{
        format = 'imperial';
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    if (Number.isInteger(location)){
        query = 'https://api.openweathermap.org/data/2.5/weather?zip=' + location  + "&appid=" + key + "&units=" + format;
    }
    else{
        query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location  + "&appid=" + key + "&units=" + format;
    }
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc = json['name'];
        document.querySelector('#loc').innerHTML = loc;
        temp = json['main']['temp'];
        document.querySelector('#temp').innerHTML = temp + ' with ' + json['weather'][0]['description'];

        var img = "http://openweathermap.org/img/wn/" + json['weather'][0]['icon'] + '.png';
        var alt = json['weather'][0]['description'];
        var title = 'Weather Image';
        document.getElementById('tempImg').setAttribute('alt', alt);
        document.getElementById('tempImg').setAttribute('src', img);
        document.getElementById('tempImg').setAttribute('title', title);
    });
}
