import { Outlet } from 'react-router-dom';

import Header from './Components/Header';

import './App.css';

const App = () => (
  <>
    <Header />

    <main className='main-content'>
      <Outlet />
    </main>
  </>
);

export default App;
