import { WeatherInfo, WeatherScore } from '@/entities/weather';

export const HomePage = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-10 text-white">
            <div className="mt-8 mb-16 flex flex-col items-center">
                <h1 className="mb-6 text-6xl font-bold tracking-tight">
                    가장 어두운 곳에서
                    <br />
                    <span className="text-gradient">빛나는 별</span>을 찾아서
                </h1>
            </div>

            <div className="flex flex-row gap-8">
                <WeatherScore />
                <WeatherInfo />
            </div>
        </div>
    );
};
