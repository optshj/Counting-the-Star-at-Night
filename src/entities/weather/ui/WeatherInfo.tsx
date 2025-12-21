import { Cloud, Moon, Wind, MapPin } from 'lucide-react';

export const WeatherInfo = () => {
    return (
        <div className="background-glass flex-1 rounded-4xl p-10">
            <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold">기상 정보</h3>

            <div className="grid grid-cols-1 gap-4">
                <WeatherItem icon={<Cloud />} label="운량" value="12%" color="text-slate-400" />
                <WeatherItem icon={<Moon />} label="달 위상" value="초승달" color="text-yellow-400" />
                <WeatherItem icon={<Wind />} label="습도/풍속" value="45% / 1.2m/s" color="text-teal-400" />
                <WeatherItem icon={<MapPin />} label="광공해 지수" value="Low (Level 2)" color="text-green-400" />
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
    <div className="background-glass flex items-center justify-between rounded-2xl p-4">
        <div className="flex items-center gap-3">
            <div className={`${color} opacity-80`}>{icon}</div>
            <span className="text-zinc-300">{label}</span>
        </div>
        <span className="font-bold">{value}</span>
    </div>
);
