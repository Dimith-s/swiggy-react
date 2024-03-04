
import './App.css';
import Header from './Comonents/Header';
import Body from './Comonents/Body';
import { Outlet, createBrowserRouter} from 'react-router-dom'
import About from './Comonents/About';
import Contact from './Comonents/Contact';
import Error from './Comonents/Error';
import Restmenu from './Comonents/Restmenu';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Outlet/>
    </div>
  );
}

 const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restmenu/:res_id',
        element:<Restmenu/>

      }

    ],
    errorElement:<Error/>,

  },
  
 
 ])
 
export default approuter




