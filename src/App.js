import 'antd/dist/antd.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Items from './pages/Items';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
          <Route path="/items" element={<ProtectedRoute><Items /></ProtectedRoute>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute({children}){

  if(localStorage.getItem('pos-user'))
  {
    return children
  }
  else{
    return <Navigate to='/login' />
  }

}