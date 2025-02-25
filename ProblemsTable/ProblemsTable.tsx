'use client';
import { useState } from 'react';
import ProblemsTableRow from './ProblemsTableRow';
import YoutubeModal, { YoutubePlayerState } from './YoutubeModal';

const ProblemsTable = () => {
    const [youtubePlayer, setYoutubePlayer] = useState<YoutubePlayerState>({ videoId: '', isOpen: false });

    return (
        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
            <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
                    <tr>
                        <th scope='col' className='px-1 py-3 w-0 font-medium'>Status</th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>Title</th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>Difficulty</th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>Category</th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>Solution</th>
                    </tr>
                </thead>
                <ProblemsTableRow setYoutubePlayer={setYoutubePlayer} />
            </table>

            <YoutubeModal 
                youtubePlayer={youtubePlayer}
                setYoutubePlayer={setYoutubePlayer}
            />
        </div>
    );
};

export default ProblemsTable;
