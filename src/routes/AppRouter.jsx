import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Examples from './Examples';
import TicTacToe from './TicTacToe';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/TicTacToe" element={<TicTacToe />} />
      {/* 여기에 다른 페이지 라우트 추가 가능 */}
    </Routes>
  );
}

export default AppRouter;
