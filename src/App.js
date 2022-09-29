
import './App.css';

import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>

      <Home></Home>
      <Blog></Blog>

    </div>
  );
}

export default App;
