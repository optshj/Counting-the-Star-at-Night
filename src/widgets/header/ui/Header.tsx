import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@/entities/logo';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed z-50 w-full px-6 py-2 transition-all duration-300 ${isScrolled ? 'background-glass' : 'border border-transparent bg-transparent'}`}>
            <div className="mx-auto max-w-7xl">
                <div className="flex h-16 items-center justify-between rounded-2xl">
                    <Link aria-label="홈으로 이동" to="/">
                        <Logo />
                    </Link>

                    <nav className="flex gap-8 font-bold text-white">
                        <Link to="/" className="group relative">
                            홈
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
                        </Link>
                        <Link to="/place" className="group relative">
                            관측소
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
