$(function()
{
   $('#map').gMap();
   $('#map_controls').gMap(
   {
        latitude: -35.483495,
        longitude: -51.087257,
        maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
        zoom: 8,
        controls: {
            panControl: true,
            zoomControl: false,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
   });
   $('#map_addresses').gMap({
        address: "Tehran,Iran",
        zoom: 14,
		markers:[
			{
				latitude: -35.483495,
				longitude: -51.087257,
				html: "_latlng"
			},
			{
				address: "Dastband,Tehran, Iran",
				html:"<body style='overflow='hidden''><div id='mapbox-holder' ><div id='mapbox'><h1>دبیرستان غیرانتفاعی سبحان</h1><hr><h2>شماره تماس 5642-021</h2><h2>ایمیل : info@sobhan76.ir</h2></div><div id='mappic'><img src='content-images/map.jpg' width='98' height='78'</div><div class='fixer'></div></div></body>",
				popup: true
			},
			{
				address: "Dastband,Tehran, Iran",
				html: "_address"
			}
		]
    });

	$("#map_extended").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'TERRAIN',
		markers: [
			{
				latitude: 47.670553,
				longitude: 9.588479,
				icon: {
					image: "images/gmap_pin_orange.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			},
	        {
				latitude: 35.483495,
				longitude: 51.087257
			},
			{
				latitude: 47.594996,
				longitude: 9.600708,
				icon: {
					image: "images/gmap_pin_grey.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			}
		],
		icon: {
			image: "images/gmap_pin.png", 
			iconsize: [26, 46],
			iconanchor: [12, 46]
		},
		latitude: 47.58969,
		longitude: 9.473413,
		zoom: 10
	});
	
	// Detect user location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position)
		{
			$('#map_controls').gMap('addMarker', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				content: 'You are here!',
				icon: {
					image: "images/gmap_pin.png", 
					iconsize: [26, 46],
					iconanchor: [12, 46]
				},
				popup: true
			});
			$('#map_controls').gMap('centerAt', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 8
			});
		}, function()
		{
			//console.log('Couldn\'t find you :(');
		});
	}
});