$('#weatherDashboard').delegate("div","click", function(){
    alert("hey its working");
    event.preventDefault();
   window.location = $(this).find("a").attr("https://nivolving.github.io/WeatherDashboard/");
 
   
});

//console.log("hello");