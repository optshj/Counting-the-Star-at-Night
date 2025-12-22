import { Star } from 'lucide-react';
import type { Weather } from '@/shared/types/weather';

export const WeatherScore = ({ weatherData }: { weatherData: Weather }) => {
    const { totalScore, starCount, message } = calculateObservationScore(weatherData);

    return (
        <div className="group background-glass relative flex-1 overflow-hidden rounded-4xl p-10">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />
            <div className="z-10 flex h-full flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold">오늘의 관측 지수</h3>
                    <p className="mt-2 text-zinc-400">{weatherData.name}</p>
                </div>

                <div className="my-8 flex items-end gap-4">
                    <span className="text-8xl font-black tracking-tighter text-white">{totalScore}</span>
                    <div className="mb-3">
                        <span className="text-2xl font-bold text-blue-400">/ 100</span>
                        <div className="mt-1 flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`h-4 w-4 ${s <= starCount ? 'fill-blue-400 text-blue-400' : 'text-white/20'}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-lg font-medium text-zinc-400">{message}</p>
            </div>
        </div>
    );
};

function calculateObservationScore(weatherData: Weather) {
    const clouds = weatherData.clouds?.all ?? 100;
    const humidity = weatherData.main?.humidity ?? 100;
    const visibility = weatherData.visibility ?? 0;

    // 1. 운량 점수 (50점 만점)
    const cloudScore = Math.max(0, 50 - clouds * 0.5);
    // 2. 가시거리 점수 (30점 만점)
    const visibilityScore = Math.min(30, (visibility / 10000) * 30);
    // 3. 습도 점수 (20점 만점)
    const humidityScore = Math.max(0, 20 - Math.max(0, humidity - 40) * 0.3);

    const totalScore = Math.round(cloudScore + visibilityScore + humidityScore);

    let message = '';
    switch (true) {
        case totalScore >= 85:
            message = '최고의 관측 조건입니다! 은하수까지 기대해 보세요.';
            break;
        case totalScore >= 70:
            message = '구름이 적고 대기가 깨끗하여 관측하기 좋습니다.';
            break;
        case totalScore >= 50:
            message = '관측은 가능하나 대기가 다소 불안정할 수 있습니다.';
            break;
        default:
            message = '관측이 어렵습니다. 다음 기회를 노려보세요.';
            break;
    }

    return {
        totalScore,
        message,
        starCount: Math.ceil(totalScore / 20)
    };
}
