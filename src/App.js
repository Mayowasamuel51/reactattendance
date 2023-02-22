import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import GetUser from './components/GetUsers';
import Posts from './components/Posts';


function App() {
  return (
    <div>
      <Router>
        <Routes>


          <Route element={<Posts />} exact path="/form" />
          
          <Route element={<GetUser />} exact path="/users" />
          

        </Routes>
      </Router>
  
     
    </div>
  );
}

export default App;  

// 
// router 
// axios