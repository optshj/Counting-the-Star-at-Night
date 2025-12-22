import { placeData } from '@/shared/data/place';
import { Locate, Star } from 'lucide-react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

interface PlaceMapProps {
    mapCenter: { lat: number; lng: number };
    myLocation: { lat: number; lng: number };
    setMapCenter: (center: { lat: number; lng: number }) => void;
}
export const PlaceMap = ({ mapCenter, myLocation, setMapCenter }: PlaceMapProps) => {
    return (
        <div className="relative flex-1 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
            <Map center={mapCenter} className="h-full w-full" level={7}>
                <MapMarker position={myLocation} image={myLocationMarker} title="내 위치" />
                {placeData.map((place) => (
                    <div key={place.id}>
                        <MapMarker position={{ lat: place.lat, lng: place.lng }} image={starPlaceMarker} onClick={() => setMapCenter({ lat: place.lat, lng: place.lng })} />
                        <CustomOverlayMap position={{ lat: place.lat, lng: place.lng }} yAnchor={2.2}>
                            <div className="pointer-events-none rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md select-none">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold whitespace-nowrap text-white">{place.name}</span>
                                    <span className="flex items-center gap-1 text-xs text-yellow-400">
                                        <Star size={12} fill={'oklch(79.5% 0.184 86.047)'} /> {place.rating}
                                    </span>
                                </div>
                            </div>
                        </CustomOverlayMap>
                    </div>
                ))}
            </Map>

            <button
                role="button"
                aria-label="내 위치로 이동"
                onClick={() => setMapCenter({ ...myLocation })}
                className="absolute right-6 bottom-6 z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white shadow-xl backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/20 active:scale-95"
                title="내 위치로 이동"
            >
                <Locate />
            </button>
        </div>
    );
};

const starPlaceMarker = {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/>
            <path d="m13.56 11.747 4.332-.924"/>
            <path d="m16 21-3.105-6.21"/>
            <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l1.09.272a2 2 0 0 1-2.425-1.455z"/>
            <path d="m6.158 8.633 1.114 4.456"/>
            <path d="m8 21 3.105-6.21"/>
            <circle cx="12" cy="13" r="2"/>
        </svg>
    `)}`,
    size: { width: 36, height: 36 },
    options: {
        offset: { x: 18, y: 18 }
    }
};

const myLocationMarker = {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <defs>
                <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <circle cx="18" cy="18" r="14" fill="rgba(239, 68, 68, 0.2)" />
            <circle cx="18" cy="18" r="7" fill="#EF4444" stroke="white" stroke-width="2" filter="url(#redGlow)" />
        </svg>
    `)}`,
    size: { width: 36, height: 36 },
    options: {
        offset: { x: 18, y: 18 }
    }
};
