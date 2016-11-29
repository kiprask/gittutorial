var UVIndexURL = 'http://api.openweathermap.org/v3/uvi/10,84/current.json?appid=c6305128c0972219019b5f073fdfa15c';


$.ajax({
		url: UVIndexURL,
		type: 'GET',
		dataType: 'json', //the jsonp did not work for some reason. stackoverflow helped to figure ou the problem.
		error: function(data){
			console.log("We got problems....");
			console.log(data);
		},
		success: function(data){
			console.log("WooHoo!!!");
			console.log(data);

			var uvindex = data.data;
			console.log (uvindex);

				$('#uvindex').html(uvindex);
			}
			
			

		// );)
}
);