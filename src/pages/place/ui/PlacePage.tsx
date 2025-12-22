import { useState, useEffect } from 'react';

import { PlaceList, PlaceMap } from '@/entities/place';
import { getGeoLocation } from '@/shared/lib/getGeoLocation';

export const PlacePage = () => {
    const [myLocation, setMyLocation] = useState<{ lat: number; lng: number }>({ lat: 37.5665, lng: 126.978 });
    const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({ lat: 37.5665, lng: 126.978 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLocation = async () => {
            const location = await getGeoLocation();
            setMyLocation(location);
            setMapCenter(location);
            setIsLoading(false);
        };
        fetchLocation();
    }, []);

    if (isLoading) {
        return <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] text-zinc-500">위치 정보를 불러오는 중입니다...</div>;
    }

    return (
        <div className="mx-auto flex h-[calc(100vh-64px)] max-w-7xl gap-8 px-4 py-10">
            <PlaceMap mapCenter={mapCenter} myLocation={myLocation} setMapCenter={setMapCenter} />
            <PlaceList setMapCenter={setMapCenter} />
        </div>
    );
};
