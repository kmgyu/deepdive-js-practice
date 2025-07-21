import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
    <Header />
    {/* <div className="app-container min-h-screen flex items-center justify-center bg-gray-900 text-white"> */}
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    {/* </div> */}
    <Footer />
    </>
  );
}
