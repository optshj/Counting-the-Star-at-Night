import { Star } from 'lucide-react';

export const WeatherScore = () => {
    return (
        <div className="group background-glass relative flex-1 overflow-hidden rounded-4xl p-10">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />
            <div className="z-10 flex h-full flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold">오늘의 관측 지수</h3>
                    <p className="mt-2 text-zinc-400">주소지</p>
                </div>

                <div className="my-8 flex items-end gap-4">
                    <span className="text-8xl font-black tracking-tighter text-white">85</span>
                    <div className="mb-3">
                        <span className="text-2xl font-bold text-blue-400">/ 100</span>
                        <div className="mt-1 flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`h-4 w-4 ${s <= 4 ? 'fill-blue-400 text-blue-400' : 'text-white/20'}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-lg font-medium text-zinc-400">구름이 거의 없고 대기가 깨끗하여 육안으로도 성단 관측이 가능합니다.</p>
            </div>
        </div>
    );
};
