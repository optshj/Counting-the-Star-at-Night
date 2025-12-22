// 서울 시청 기준 좌표
const DEFAULT_COORDS = { lat: 37.5665, lng: 126.978 };

export const getGeoLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve(DEFAULT_COORDS);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            () => {
                resolve(DEFAULT_COORDS);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    });
};
