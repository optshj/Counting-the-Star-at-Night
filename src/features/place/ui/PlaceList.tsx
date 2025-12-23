import { useState, useMemo, useEffect } from 'react';
import { placeData } from '@/shared/data/place';
import { Star, Search, Bookmark, BookmarkCheck } from 'lucide-react';
import type { Place } from '@/shared/types/place';

export const PlaceList = ({ setMapCenter }: { setMapCenter: (center: { lat: number; lng: number }) => void }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState<number[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const filteredPlaces = useMemo(() => {
        const lowerQuery = searchQuery.toLowerCase();

        return placeData.filter((place) => {
            const isMatchedBySearch = place.name.toLowerCase().includes(lowerQuery);
            const isFavorite = favorites.includes(place.id);
            const passFavoriteFilter = !showFavoritesOnly || isFavorite;

            return isMatchedBySearch && passFavoriteFilter;
        });
    }, [searchQuery, favorites, showFavoritesOnly]);

    return (
        <div className="background-glass flex w-96 flex-col rounded-3xl p-5">
            <div className="space-y-4 pb-4">
                <div>
                    <span className="text-gradient text-lg font-bold">별 관측 명소</span>
                    <p className="mt-1 text-xs text-zinc-500">우주 속 나만의 관측 지점을 찾아보세요.</p>
                </div>

                <div className="flex rounded-xl border border-zinc-800 p-1">
                    <button
                        onClick={() => setShowFavoritesOnly(false)}
                        className={`flex-1 rounded-lg py-2 text-xs transition-all ${!showFavoritesOnly ? 'bg-purple-500/20 text-purple-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        전체 장소
                    </button>
                    <button
                        onClick={() => setShowFavoritesOnly(true)}
                        className={`flex-1 rounded-lg py-2 text-xs transition-all ${showFavoritesOnly ? 'bg-purple-500/20 text-purple-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        즐겨찾기
                    </button>
                </div>

                <div className="group relative">
                    <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-purple-400" size={16} />
                    <input
                        type="text"
                        placeholder={showFavoritesOnly ? '즐겨찾기 내 검색...' : '장소 검색...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2 pr-4 pl-10 text-sm text-white transition-all outline-none focus:border-purple-400 focus:bg-white/5 focus:ring-4 focus:ring-purple-400/10"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                {filteredPlaces.length > 0 ? (
                    filteredPlaces.map((place) => <ListItem key={place.id} place={place} favorites={favorites} setMapCenter={setMapCenter} setFavorites={setFavorites} />)
                ) : (
                    <div className="flex flex-col items-center gap-3 py-20 text-center">
                        <Search size={32} strokeWidth={1.5} className="text-zinc-600" />
                        <p className="text-sm text-zinc-500">
                            {showFavoritesOnly ? (searchQuery ? '즐겨찾기 중 검색 결과가 없습니다.' : '저장된 즐겨찾기가 없습니다.') : '검색 결과와 일치하는 장소가 없습니다.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

interface ListItemProps {
    place: Place;
    favorites: number[];
    setMapCenter: (center: { lat: number; lng: number }) => void;
    setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}
const ListItem = ({ place, favorites, setMapCenter, setFavorites }: ListItemProps) => {
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <div
            key={place.id}
            onClick={() => setMapCenter({ lat: place.lat, lng: place.lng })}
            className="group background-glass relative cursor-pointer rounded-2xl p-4 transition-all hover:bg-purple-400/10"
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-semibold text-white transition-colors group-hover:text-purple-300">{place.name}</h3>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-400">{place.description}</p>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setFavorites((prev) => (prev.includes(place.id) ? prev.filter((favId) => favId !== place.id) : [...prev, place.id]));
                    }}
                    className="text-zinc-500 transition-transform hover:scale-110 active:scale-95"
                >
                    {favorites.includes(place.id) ? <BookmarkCheck className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,143,255,0.6)]" size={20} fill="currentColor" /> : <Bookmark size={20} />}
                </button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-yellow-500">
                <Star fill="currentColor" size={12} />
                <span>{place.rating}</span>
            </div>
        </div>
    );
};
