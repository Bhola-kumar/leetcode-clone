import Topbar from '@/components/Topbar/Topbar';
import ProblemsTable from '@/ProblemsTable/ProblemsTable';

export default function Home() {
  return (
    <div className='bg-dark-layer-2 min-h-screen'>
      <Topbar />
      <h1 className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>&quot;QUALITY OVER QUANTITY&quot;</h1>
      <ProblemsTable />
    </div>
  );
}
