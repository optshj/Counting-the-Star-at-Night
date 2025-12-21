import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { PlacePage } from '../pages/place';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { StarTrails } from '@/entities/background';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/place" element={<PlacePage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
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
