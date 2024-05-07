
       /**
     * This function generates a table from JSON data.
     * 
     */
       function outputTable(json) {
        let element = document.getElementById("results");
        // Extract the "features" property from JSON
        let features = json.features;
        // Loop through each feature in the "features" array
        for (i=0; i<features.length; i++) {
            // Create a new table row (tr) element
            tr = document.createElement('tr');
            // Extract the "attributes" property from the feature
            let a = features[i].attributes;
            // Extract the "geometry" coordinates from the feature
            let g = features[i].geometry.coordinates;
            // Create a table data (td) element
            let td = document.createElement('td');
            td.innerHTML = a.NAME;
            tr.appendChild(td);
            // Create another table data (td) element
            td = document.createElement('td');
            td.innerHTML = a.TYPE;
            tr.appendChild(td);
            // Append the tr element to the results
            element.appendChild(tr);
            // Create another table data (td) element
            td = document.createElement('td');
            // Set the td element's innerHTML to the calculated distance
            td.innerHTML = `${d} metres` ;
            tr.appendChild(td);
        }
    }
         //This takes two arguments - eastings and northings, and sends GET request to the Bristol open data mapping service
          function query(eastings,northings) {
            let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/25/query?outFields=*&where=1%3D1&f=geojson&limit=${limit}&offset=${offset}`;
            fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }})
            .then (response => response.json())
            .then(outputTable);
          }
        

          function query(limit, offset) {
            // URL for the OPEN DATA API BRISTOL
            let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/25/query?outFields=*&where=1%3D1&f=geojson&limit=${limit}&offset=${offset}`;
            // Send a GET request to the URL
            fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }})
            // When the response is received, parse it as JSON
           .then(response => response.json())
           .then(data => {
            // Extract the features from the data
            const features = data.properties;
          features.forEach(feature => {
             // Extract properties from the feature
            const coordinates = feature.geometry.coordinates;
            const name = feature.properties.TOILET_NAME;
            const address = feature.properties.ADDRESS;
            const postcode = feature.properties.POSTCODE;
            const ward = feature.properties.WARD;
            const opening = feature.properties.OPENING;
            const male = feature.properties.MALE;
            const urinals = feature.properties.URINALS;
            const female = feature.properties.FEMALE;
            const unisex = feature.properties.UNISEX;
            const access1 = feature.properties.ACCESS1;
            const acc_info = feature.properties.ACC_INFO;
            const changingplace = feature.properties.CHANGINGPLACE;
            const auto_open = feature.properties.AUTO_OPEN;
            const pull_cord = feature.properties.PULL_CORD;
            const radar = feature.properties.RADAR;
            const babychange = feature.properties.BABYCHANGE;
            const familytoilet = feature.properties.FAMILYTOILET;
            const autoloo = feature.properties.AUTOLOO;
            const attended = feature.properties.ATTENDED;
            const fulltimestaff = feature.properties.FULLTIMESTAFF;
    
            // Create a marker and add it to the map
            const marker = new mapboxgl.Marker()
             .setLngLat(coordinates)
             .addTo(map);
    
            // Create a popup and add it to the marker
            const popup = new mapboxgl.Popup({ offset: 25 })
             .setHTML(`<h3>${name}</h3><p>Address: ${address}<br>Postcode: ${postcode}<br>Ward: ${ward}<br>Opening: ${opening}<br>Male: ${male}<br>Urinals: ${urinals}<br>Female: ${female}<br>Unisex: ${unisex}<br>Access: ${access1}<br>Accessible Info: ${acc_info}<br>Changing Place: ${changingplace}<br>Auto Open: ${auto_open}<br>Pull Cord: ${pull_cord}<br>Radar: ${radar}<br>Baby Change: ${babychange}<br>Family Toilet: ${familytoilet}<br>Autoloo: ${autoloo}<br>Attended: ${attended}<br>Full Time Staff: ${fulltimestaff}</p>`)
             .setLngLat(coordinates);
            marker.setPopup(popup);
          });
        })
       .catch(error => console.error('Error fetching data:', error));
    }

    function addMarkers(json) {
        let features = json.features;
        for (i=0; i<features.length; i++) {
          let a = features[i].properties;
          let g = features[i].geometry;
      
          // Create marker and add it to the map.
          let marker = new mapboxgl.Marker().setLngLat([g.coordinates[0], g.coordinates[1]]).addTo(map);
      
          // create the popup
          let popup = new mapboxgl.Popup({ offset: 25 })
         .setHTML(`<h3>${a.TOILET_NAME}</h3><p>Address: ${a.ADDRESS}</p>`)
         .setLngLat([g.coordinates[0], g.coordinates[1]]);
          marker.setPopup(popup);
        }
      }
      
      fetch('https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/25/query?outFields=*&where=1%3D1&f=geojson')
      .then(response => response.json())
      .then(data => {
          addMarkers(data);
        });
      
          