import type { MoonPhase } from '../types/moonPhase';

const NEWMOON_REFERENCE = new Date('1970-01-07T20:35:00Z').getTime();
const LUNARCYCLE = 2551442.8;

export const getMoonPhase = (date: Date = new Date()): MoonPhase => {
    const now = date.getTime();
    const secondsSinceNewMoon = (now - NEWMOON_REFERENCE) / 1000;
    const phaseIndex = (secondsSinceNewMoon % LUNARCYCLE) / LUNARCYCLE;

    switch (true) {
        case phaseIndex < 0.03 || phaseIndex >= 0.97:
            return '삭';
        case phaseIndex < 0.22:
            return '초승달';
        case phaseIndex < 0.28:
            return '상현달';
        case phaseIndex < 0.47:
            return '상현망간의 달';
        case phaseIndex < 0.53:
            return '보름달';
        case phaseIndex < 0.72:
            return '하현망간의 달';
        case phaseIndex < 0.78:
            return '하현달';
        default:
            return '그믐달';
    }
};
