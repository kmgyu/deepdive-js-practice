import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';

export default function App() {
  return (
    // <div className="app-container min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    // </div>
  );
}
