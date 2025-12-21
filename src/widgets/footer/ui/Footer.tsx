export const Footer = () => {
    return (
        <footer className="mt-20 bg-black py-12 text-zinc-400">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold">별 보러 갈래?</span>
                        <p>© 2025 별 보러 갈래. All rights reserved.</p>
                    </div>

                    <nav className="flex items-center gap-6 text-sm">
                        <button className="transition-colors hover:text-white" aria-label="서비스 이용약관">
                            서비스 이용약관
                        </button>
                        <button className="transition-colors hover:text-white" aria-label="개인정보 처리방침">
                            개인정보 처리방침
                        </button>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
