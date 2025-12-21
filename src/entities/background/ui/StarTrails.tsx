import { useEffect, useRef } from 'react';

const NUM_STARS = 2000;
const OFF_SET = -300;
const BACKGROUND_COLOR = 'rgba(2, 2, 10, 0.04)';

interface Star {
    radius: number;
    angle: number;
    speed: number;
    size: number;
    colorBase: string;
    opacity: number;
    flicker: number;
    lastX: number;
    lastY: number;
}

export const StarTrails = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;

        const createStar = (maxRadius: number): Star => {
            const radius = Math.pow(Math.random(), 0.8) * maxRadius;
            const angle = Math.random() * Math.PI * 2;
            const rand = Math.random();

            // 랜덤 색상
            let hue, saturation, lightness;
            if (rand < 0.2) {
                hue = 200 + Math.random() * 40;
                saturation = 10 + Math.random() * 15;
                lightness = 92 + Math.random() * 8;
            } else if (rand < 0.6) {
                hue = 35 + Math.random() * 20;
                saturation = 50 + Math.random() * 30;
                lightness = 85 + Math.random() * 10;
            } else {
                hue = 225 + Math.random() * 20;
                saturation = 120 + Math.random() * 30;
                lightness = 80 + Math.random() * 15;
            }

            const x = OFF_SET + Math.cos(angle) * radius;
            const y = OFF_SET + Math.sin(angle) * radius;

            return {
                radius,
                angle,
                speed: 0.00005 + (radius / maxRadius) * 0.0004,
                size: Math.random() * 1.5 + 0.4,
                colorBase: `hsla(${hue}, ${saturation}%, ${lightness}%,`,
                opacity: Math.random(),
                flicker: Math.random() * 0.008 + 0.003,
                lastX: x,
                lastY: y
            };
        };

        const initStars = () => {
            const dpr = window.devicePixelRatio || 1;
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;
            const distToFarCorner = Math.sqrt(Math.pow(width - OFF_SET, 2) + Math.pow(height - OFF_SET, 2));
            const maxRadius = distToFarCorner * 1.1;

            starsRef.current = Array.from({ length: NUM_STARS }, () => createStar(maxRadius));
        };

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            initStars();
        };

        const draw = () => {
            // 잔상 효과
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const stars = starsRef.current;
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // 위치 계산
                const x = OFF_SET + Math.cos(star.angle) * star.radius;
                const y = OFF_SET + Math.sin(star.angle) * star.radius;

                // 불투명도 조절 (반짝임)
                star.opacity += star.flicker;
                if (star.opacity > 1 || star.opacity < 0.3) star.flicker *= -1;

                // 그리기
                ctx.beginPath();
                ctx.strokeStyle = `${star.colorBase}${Math.max(0.2, star.opacity)})`;
                ctx.lineWidth = star.size;
                ctx.lineCap = 'round';
                ctx.moveTo(star.lastX, star.lastY);
                ctx.lineTo(x, y);
                ctx.stroke();

                // 다음 프레임을 위한 상태 업데이트
                star.lastX = x;
                star.lastY = y;
                star.angle += star.speed;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-full w-full bg-[#02020a]" style={{ touchAction: 'none' }} />;
};
