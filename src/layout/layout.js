import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/loading';
import AuthenticationButton from '../components/buttons/authenticationButton';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import PageRoutes from './routes';
import SiteTitle from '../header/siteTitle';
import UserProfile from '../views/users/profile';

const Layout = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="app">
            <header>
                <SiteTitle />
                <AuthenticationButton />
            </header>
            <main>
                {isAuthenticated && (
                    <div className="itemOne">
                        <UserProfile user={user} />
                        <Navigation />
                    </div>
                )}
                <PageRoutes />
            </main>
            <footer>
                <Footer />
            </footer>        
        </div>
    );
}

export default Layout;