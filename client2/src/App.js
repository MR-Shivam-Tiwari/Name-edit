import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './component/home';
import Login from "./component/loginpage"
import Register from "./component/register";

import { PrivateRoute } from './privateroute';

function App() {

  
 


  return (
    <>
    <BrowserRouter>

   <Routes>
    
   <Route path="/register" element={<Register/>}/>

<Route exact path="/home" element={ <PrivateRoute>
                                <Dashboard/>
                                </PrivateRoute>
                            
}/>
<Route path="/" element={<Login/>}/>
                   
   </Routes>

    </BrowserRouter>
   
    </>
  );
}

export default App;
