export const MOONPHASE = ['삭', '초승달', '상현달', '상현망간의 달', '보름달', '하현망간의 달', '하현달', '그믐달'] as const;

export type MoonPhase = (typeof MOONPHASE)[number];
