import { WeatherInfo, WeatherScore, useWeather } from '@/entities/weather';

export const HomePage = () => {
    const { data: weatherData, loading } = useWeather();

    return (
        <div className="mx-auto max-w-7xl px-6 py-10 text-white">
            <div className="mt-8 mb-16 flex flex-col items-center">
                <h1 className="mb-6 text-center text-6xl font-bold tracking-tight">
                    가장 어두운 곳에서
                    <br />
                    <span className="text-gradient">빛나는 별</span>을 찾아서
                </h1>
            </div>

            <div className={`flex h-96 flex-row gap-8 transition-all duration-2000 ease-in-out ${loading ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'} `}>
                {weatherData && (
                    <>
                        <WeatherScore weatherData={weatherData} />
                        <WeatherInfo weatherData={weatherData} />
                    </>
                )}
            </div>
        </div>
    );
};
