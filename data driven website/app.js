var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://astronomy.p.rapidapi.com/positions/%7Bplanet%7D?to_day=12&to_month=11&lat=70&lon=17.2&from_month=12&from_year=2016&to_year=2018&from_day=01",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "astronomy.p.rapidapi.com",
		"x-rapidapi-key": "34fd52e769msh2a059365a8c043ap12dfb1jsn31851066b5d2"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});