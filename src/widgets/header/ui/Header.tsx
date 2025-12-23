import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <header className={`fixed z-50 w-full px-6 py-2 transition-all duration-300`}>
            <div className={`mx-auto rounded-full px-10 transition-all duration-1000 ${isScrolled ? 'background-glass max-w-4xl' : 'max-w-7xl border border-transparent bg-transparent'}`}>
                <div className="flex h-16 items-center justify-between rounded-2xl">
                    <Link aria-label="홈으로 이동" to="/">
                        <Logo />
                    </Link>

                    <nav className="flex gap-8">
                        <Tab to="/" label="홈" />
                        <Tab to="/place" label="장소" />
                    </nav>
                </div>
            </div>
        </header>
    );
}

const Tab = ({ to, label }: { to: string; label: string }) => (
    <NavLink to={to} className={({ isActive }) => `group relative font-bold transition-all ${isActive ? 'text-blue-400' : 'text-white'}`}>
        {label}
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
    </NavLink>
);
