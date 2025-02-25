'use client';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import YouTube from 'react-youtube';

export interface YoutubePlayerState {
    videoId: string;
    isOpen: boolean;
}

interface YoutubeModalProps {
    youtubePlayer: YoutubePlayerState;
    setYoutubePlayer: (state: YoutubePlayerState) => void;
}

const YoutubeModal: React.FC<YoutubeModalProps> = ({ youtubePlayer, setYoutubePlayer }) => {
    const closeModal = () => {
        setYoutubePlayer({ videoId: '', isOpen: false });
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!youtubePlayer.isOpen) return null;

    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
            <div className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute" onClick={closeModal}></div>
            <div className="w-full z-50 h-full px-6 relative max-w-4xl">
                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="w-full relative">
                        <IoClose fontSize={"35"} className='cursor-pointer absolute -top-12 right-0' onClick={closeModal} />
                        <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeModal;
