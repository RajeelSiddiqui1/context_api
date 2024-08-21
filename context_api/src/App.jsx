import UserConextProvider from './context/UserConextProvider';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Api from './components/Api';

function App() {
  return (
    <UserConextProvider>
      <Router>
        <div>
          <h1>Hi, My name is Rajeel Siddiqui</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Login />
                  <Profile />
                </>
              }
            />
            <Route path="/cal" element={<Calculator />} />
            <Route path="/li" element={<List />} />
            <Route path="/ap" element={<Api />} />
          </Routes>
        </div>
      </Router>
      
    </UserConextProvider>
  );
}

export default App;
