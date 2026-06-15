import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ProductPage from '@/pages/Products';
import CasePage from '@/pages/Cases';
import Consult from '@/pages/Consult';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:type" element={<ProductPage />} />
          <Route path="/products/:type/:id" element={<ProductPage />} />
          <Route path="/cases" element={<CasePage />} />
          <Route path="/cases/:id" element={<CasePage />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/about" element={
            <div className="min-h-screen flex items-center justify-center pt-20">
              <p className="text-steel-500">关于我们页面 - 建设中</p>
            </div>
          } />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center pt-20">
              <p className="text-steel-500">页面不存在</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}
