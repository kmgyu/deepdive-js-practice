import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import HookExamples from '@/pages/HookExamples';
import TicTacToe from '@/pages/TicTacToe';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/hook-examples" element={<HookExamples />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      {/* 여기에 다른 페이지 라우트 추가 가능 */}
    </Routes>
  );
}

export default AppRouter;
