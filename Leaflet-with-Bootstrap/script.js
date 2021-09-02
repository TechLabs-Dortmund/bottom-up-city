var mapFirst = L.map("randommap").setView([51.51041, 7.438899], 13);
            L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(mapFirst);
            var locationCoordinates = [[51.51041, 7.438899],[51.509953,7.439148]];
            var locationNames = ["BOTTOMUP.CITY","Home at Friends"];
            var location_pos = ["Adlerstr.91","Lange Str.139"];
            for (var i = 0; i < locationNames.length; i++) {
                let marker_all = L.marker(locationCoordinates[i]).addTo(mapFirst).bindPopup("<b>" + locationNames[i] +"</b><br>"+ location_pos[i]).openPopup();
            }
/*       
            var markerBottomUpCity = L.marker([hier:Koordinaten]).bindPopup("Beschreibung");
            var hotelMarker = L.marker([hier:Koordinaten]).bindPopup("Beschreibung");
            var groupOne = L.layerGroup([markerBottomUpCity,hotelMarker]);
            groupOne.addTo(mapFirst);
            var groupOne = L.layerGroup([markerBottomUpCity,hotelMarker]);
            groupOne.addTo(mapFirst);  Example for grouping markers*/ 

            var polygonWestBahnhof = L.polygon([
                                                [51.509652,7.439007],
                                                [51.509597,7.439152],
                                                [51.509562,7.439005],
                                                [51.509646,7.438820]],
                                                {
                                                    color: "#93F311",
                                                    fillColor: "#ACF4F0",
                                                    fillOpacity: "0.3",
                                                }).addTo(mapFirst).bindPopup("S-Bahnhof West");