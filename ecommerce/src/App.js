import './App.scss';

import {BrowserRouter, RouterProvider, Route, createBrowserRouter,Outlet} from 'react-router-dom';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



const Layout =()=>{  // hay component so lezem tkoun capital letter ,wfyeh e3mal we7de tanyeh metla bas b8ayer lesem wbest3mela wfyeh 8ayer le be alba  metal Navbar wel Footer eza bade she tane bhot
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </div>
  )
}




const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[ // hyde children of this Layout
    
    //kel hol lchildren byotla3 fehhon Navbar and Footer la eno Layout hek 7ateno 
    {// the first child
      path:"/", 
      element:<Home />

    },

    {// the second child
      path:"/Products/:id", 
      element:<Products/>

    },
    
    {// the third child
      path:"/Product/:id", 
      element:<Product/>

    }



    ]
  
  },

  


])



function App() {
  return (
  <div>
<RouterProvider router={router}/>
  </div>
   
  );
}

export default App;
