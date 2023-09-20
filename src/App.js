import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './AllPages/Home';
import Calculator from './AllPages/Calculator';
import Quote from './AllPages/Quote';
import NotFound from './AllPages/NotFound';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
