const google = window.google;

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = [];
    }

    createMarker(position) {
        const icon = {
            // url: "https://image.flaticon.com/icons/svg/1175/1175936.svg", 
            url: 'http://purepng.com/public/uploads/large/purepng.com-toilettoiletcomodhigh-comodbathroomprivy-1701528000947njkao.png',
            scaledSize: new google.maps.Size(25, 25), 
            anchor: new google.maps.Point(15, 15) 
        };

        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon,
        });
        this.markers.push(marker);
        return marker
    }

    createMarkers(toilets) {
        const icon = {
            url: "https://image.flaticon.com/icons/svg/1175/1175936.svg", 
            scaledSize: new google.maps.Size(20, 20),
            anchor: new google.maps.Point(12, 12)
        };

        const markers = this.markers;
        toilets.forEach(toilet => {
            const marker = new google.maps.Marker({
                position: {
                    lat: toilet.lat,
                    lng: toilet.lng,
                },
                map: this.map,
                icon,
            });

            markers.push(marker);
        });
    }

    removeLastMarker() {
        if (this.markers.length !== 0) {
            const marker = this.markers.pop();
            marker.setMap(null);
        }
    }
}