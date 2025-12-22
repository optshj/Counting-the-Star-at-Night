import { useState, useEffect } from 'react';

import { getGeoLocation } from '@/shared/lib/getGeoLocation';
import { getMoonPhase } from '@/shared/lib/moonPhase';
import type { Weather } from '@/shared/types/weather';

const API_KEY = import.meta.env.VITE_OPENWEHATHERMAP_API_KEY;

export function useWeather() {
    const [data, setData] = useState<Weather | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const moon = getMoonPhase();

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const { lat, lng } = await getGeoLocation();

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);

                if (!response.ok) {
                    throw new Error('날씨 데이터를 가져오는데 실패했습니다.');
                }

                const result = await response.json();
                setData({
                    ...result,
                    moon
                });
                setError(null);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return { data, loading, error };
}
