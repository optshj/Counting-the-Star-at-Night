import { Cloud, MapPin, Eye } from 'lucide-react';
import { MoonIcon } from './MoonIcon';
import type { Weather } from '@/shared/types/weather';

export const WeatherInfo = ({ weatherData }: { weatherData: Weather }) => {
    return (
        <div className="background-glass background-glass flex-1 rounded-4xl p-10 text-white">
            <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold">기상 정보</h3>

            <div className="grid grid-cols-1 gap-4">
                <WeatherItem icon={<Cloud />} label="운량" value={`${weatherData.clouds.all}%`} color="text-slate-400" />
                <WeatherItem icon={<Eye />} label="가시거리" value={`${(weatherData.visibility / 1000).toFixed(1)}km`} color="text-blue-400" />
                <WeatherItem icon={<MoonIcon phase={weatherData.moon.phaseIndex} />} label="달 위상" value={weatherData.moon.moonPhase} color="text-yellow-400" />
                <WeatherItem icon={<MapPin />} label="기압" value={`${weatherData.main.pressure} hPa`} color="text-green-400" />
            </div>
        </div>
    );
};

interface WeatherItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
}
const WeatherItem = ({ icon, label, value, color }: WeatherItemProps) => (
    <div className="background-glass flex items-center justify-between rounded-2xl px-4 py-3">
        <div className="flex items-center gap-3">
            <div className={`${color} opacity-80`}>{icon}</div>
            <span className="text-sm text-zinc-400">{label}</span>
        </div>
        <span className="font-semibold">{value}</span>
    </div>
);
