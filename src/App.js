
import Random from './components/Random';
import Tag from './components/Tag';
import './App.css';

function App() {
  return (
    <div className='w-full back h-screen flex flex-col relative overflow-x-hidden items-center '>
       <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px]  px-10 py-2 text-4xl font-bold '>RANDOM Gf</h1>
       <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
          <Random />
          <Tag />
       </div>
    </div>
   
  );
}

export default App;
