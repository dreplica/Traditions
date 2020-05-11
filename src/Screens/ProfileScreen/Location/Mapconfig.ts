import React from 'react';

export default function getPoint(map: mapboxgl.Map) {
    map.on('load', () => {
        console.log("is mapping")
        map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', (error: Error, image: any) => {
            if (error) {
                throw new Error('couldnt load maps')
            }
            console.log(image)
            map.addImage('seller', image)
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': null,
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [0, 0]
                            }
                        }
                    ]
                }
            })
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                    'icon-image': 'cat',
                    'icon-size': 0.25
                }
            });
        })

    })
}

