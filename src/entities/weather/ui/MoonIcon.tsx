interface MoonPhaseProps {
    phase: number;
    size?: number;
}

export const MoonIcon = ({ phase, size = 24 }: MoonPhaseProps) => {
    // 1. phase를 8단계로 반올림 (0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1)
    // 0.125 간격으로 나누고 반올림한 뒤 다시 곱함
    const steppedPhase = Math.round(phase * 8) / 8;

    const radius = 50;
    const center = 50;

    // 2. 스냅된 phase로 계산
    const x = parseFloat(Math.cos(steppedPhase * 2 * Math.PI).toFixed(3));
    const isWaningSouth = steppedPhase < 0.5;

    const absX = Math.abs(x);

    const shadowPath = `
    M ${center} ${center - radius}
    A ${radius} ${radius} 0 0 ${isWaningSouth ? 0 : 1} ${center} ${center + radius}
    A ${radius * absX} ${radius} 0 0 ${x > 0 ? 0 : 1} ${center} ${center - radius}
    `;

    return (
        <div className="relative overflow-hidden rounded-full bg-black" style={{ width: size, height: size }}>
            <img src="fullmoon.png" alt="Moon" className="block h-full w-full object-cover opacity-90" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full transition-all duration-300">
                <path d={shadowPath} fill="rgba(0, 0, 0, 0.75)" className="transition-all duration-300" />
            </svg>
        </div>
    );
};
