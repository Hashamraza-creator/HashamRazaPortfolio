import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <Outlet /> {/* Content rendered here will not have extra <body> or <h1> tags */}
      </div>
    </div>
  );
};

export default Layout;
