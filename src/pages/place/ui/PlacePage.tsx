import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { PlaceList } from '@/entities/place';
import { getGeoLocation } from '@/shared/lib/getGeoLocation';
import { placeData } from '@/shared/data/place';

export const PlacePage = () => {
    const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({ lat: 37.5665, lng: 126.978 }); // 초기 지도 중심 좌표 (서울 시청 기준)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLocation = async () => {
            const location = await getGeoLocation();
            setMapCenter(location);
            setIsLoading(false);
        };
        fetchLocation();
    }, []);

    return (
        <div className="mx-auto flex h-[calc(100vh-64px)] max-w-7xl gap-8 py-10">
            <div className="relative flex-1 rounded-2xl">
                {!isLoading ? (
                    <Map center={mapCenter} className="h-full w-full rounded-2xl" level={7}>
                        <MapMarker
                            position={mapCenter}
                            image={{
                                src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                                size: { width: 24, height: 35 }
                            }}
                            title="내 위치"
                        />

                        {placeData.map((place) => (
                            <MapMarker key={place.id} position={{ lat: place.lat, lng: place.lng }} title={place.name} />
                        ))}
                    </Map>
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-500">위치 정보를 불러오는 중입니다...</div>
                )}
            </div>
            <PlaceList setMapCenter={setMapCenter} />
        </div>
    );
};
