import type { MoonPhase } from './moonPhase';

export type Weather = {
    clouds: {
        all: number;
    };
    visibility: number;
    main: {
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    name: string;
    moonPhase: MoonPhase;
};
