import { placeData } from '@/shared/data/place';
import { Star } from 'lucide-react';

export const PlaceList = ({ setMapCenter }: { setMapCenter: (center: { lat: number; lng: number }) => void }) => {
    return (
        <div className="background-glass flex w-100 flex-col overflow-hidden rounded-2xl">
            <div className="border-b border-zinc-800 p-5">
                <h2 className="text-xl font-bold text-purple-400">별 관측 명소</h2>
                <p className="text-sm text-zinc-400">현재 위치 주변의 추천 장소입니다.</p>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {placeData.map((place) => (
                    <div
                        key={place.id}
                        aria-label={`장소 이름: ${place.name}, 별점: ${place.rating}`}
                        onClick={() => setMapCenter({ lat: place.lat, lng: place.lng })}
                        className="background-glass group cursor-pointer rounded-xl border p-4 transition-all hover:border-purple-500/50 hover:bg-zinc-800"
                    >
                        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-purple-300">{place.name}</h3>
                        <p className="mt-1 line-clamp-1 text-sm text-zinc-400">{place.description}</p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-yellow-500">
                            <Star fill={'oklch(79.5% 0.184 86.047)'} size={12} /> {place.rating}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
