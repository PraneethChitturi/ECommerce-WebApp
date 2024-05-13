
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import MidHeader from './common/MidHeader';
import TopBar from './common/TopBar';
import {Home} from './pages/index'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <TopBar />
        <MidHeader />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
