import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
            <div className="/* 💎 글래스모피즘 핵심 설정 */ /* 아주 투명한 배경 */ /* 강력한 흐림 효과 */ /* 미세한 유리 테두리 */ /* 깊이감 있는 그림자 */ flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">✨</span>
                    <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">별 보러 갈래?</span>
                </Link>

                {/* 메뉴 영역 */}
                <nav className="flex gap-8 text-sm font-medium">
                    <Link to="/" className="group relative text-slate-300 transition-colors hover:text-white">
                        홈
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
                    </Link>
                    <Link to="/place" className="group relative text-slate-300 transition-colors hover:text-white">
                        관측소
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
