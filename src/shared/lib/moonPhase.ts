import type { MoonPhase } from '../types/moonPhase';

const NEWMOON_REFERENCE = new Date('1970-01-07T20:35:00Z').getTime();
const LUNARCYCLE = 2551442.8;

export const getMoonPhase = (date: Date = new Date()): { moonPhase: MoonPhase; phaseIndex: number } => {
    const now = date.getTime();
    const secondsSinceNewMoon = (now - NEWMOON_REFERENCE) / 1000;
    const phaseIndex = (secondsSinceNewMoon % LUNARCYCLE) / LUNARCYCLE;

    switch (true) {
        case phaseIndex < 0.03 || phaseIndex >= 0.97:
            return { moonPhase: '삭', phaseIndex };
        case phaseIndex < 0.22:
            return { moonPhase: '초승달', phaseIndex };
        case phaseIndex < 0.28:
            return { moonPhase: '상현달', phaseIndex };
        case phaseIndex < 0.47:
            return { moonPhase: '상현망간의 달', phaseIndex };
        case phaseIndex < 0.53:
            return { moonPhase: '보름달', phaseIndex };
        case phaseIndex < 0.72:
            return { moonPhase: '하현망간의 달', phaseIndex };
        case phaseIndex < 0.78:
            return { moonPhase: '하현달', phaseIndex };
        default:
            return { moonPhase: '그믐달', phaseIndex };
    }
};
