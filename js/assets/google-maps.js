function initMap() {
    // Styles a map in night mode.
    var myLatLng = { lat: 25.041809, lng: 121.543397 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#fff"
                }]
            },

            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#dddddd"
                }]
            },
            // {
            //     "featureType": "poi",
            //     "elementType": "all",
            //     "stylers": [{
            //         "visibility": "off"
            //     }]
            // },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 0
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#e51451"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]

    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'SIX DOTS IT',
    });

    marker.setIcon('/images/pin.png')
        // var map = new google.maps.Map(document.getElementById('map'), {

    //     center: { lat: 25.0418105, lng: 121.5412033 },
    //     zoom: 16,
    //     styles: [{
    //             "featureType": "administrative",
    //             "elementType": "labels.text.fill",
    //             "stylers": [{
    //                 "color": "#111"
    //             }]
    //         },
    //         {
    //             "featureType": "administrative.country",
    //             "elementType": "geometry.stroke",
    //             "stylers": [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             "featureType": "landscape",
    //             "elementType": "all",
    //             "stylers": [{
    //                 "color": "#dddddd"
    //             }]
    //         },
    //         {
    //             "featureType": "poi",
    //             "elementType": "all",
    //             "stylers": [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             "featureType": "road",
    //             "elementType": "all",
    //             "stylers": [{
    //                     "saturation": -100
    //                 },
    //                 {
    //                     "lightness": 45
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "all",
    //             "stylers": [{
    //                 "visibility": "simplified"
    //             }]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "labels.icon",
    //             "stylers": [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "all",
    //             "stylers": [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             "featureType": "water",
    //             "elementType": "all",
    //             "stylers": [{
    //                     "color": "#e51451"
    //                 },
    //                 {
    //                     "visibility": "on"
    //                 }
    //             ]
    //         }
    //     ]
    // });
}