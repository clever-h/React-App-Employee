import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertrations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/details/:empid" element={<EmpDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
