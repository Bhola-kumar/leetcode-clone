"use client"; // This ensures the file runs as a client component

import React from 'react';
import AuthModal from '@/components/Modals/AuthModal';
import { useRecoilValue } from 'recoil';
import { authModalState } from '@/store/atoms/authModalAtom';

const ClientPage: React.FC = () => {
    const authModal = useRecoilValue(authModalState);
    return (
        <>
            {authModal.isOpen && <AuthModal />}
        </>
    );
};

export default ClientPage;