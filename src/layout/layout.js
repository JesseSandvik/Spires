import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../header/header';
import Loading from '../components/loading';
import Footer from '../footer/footer';
import PageRoutes from './routes';
import Sidebar from '../sidebar/sidebar';

const Layout = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="app">
            <Header />
            <main>
                {isAuthenticated && (
                    <Sidebar />
                )}
                <PageRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;