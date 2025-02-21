import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import ClientPage from './ClientPage';

const AuthPage: React.FC = () => {
    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <div className="flex item-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
                    <img src="/hero.png" alt="Hero Img" />
                </div>
                <ClientPage />
            </div>
        </div>
    );
};

export default AuthPage;