import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { PlacePage } from '@/pages/place';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { StarTrails } from '@/entities/background';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AnimatedRoutes />
            </Layout>
        </BrowserRouter>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setIsExiting(true);
        }
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (isExiting) {
            setIsExiting(false);
            setDisplayLocation(location);
        }
    };

    return (
        <div className={isExiting ? 'animate-fade-out' : 'animate-fade-in'} onAnimationEnd={handleAnimationEnd}>
            <Routes location={displayLocation}>
                <Route path="/" element={<HomePage />} />
                <Route path="/place" element={<PlacePage />} />
            </Routes>
        </div>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <StarTrails />
            <main className="pt-16">{children}</main>
            <Footer />
        </div>
    );
}
