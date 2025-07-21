import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="mb-4 text-gray-700">
            예제 샘플들을 확인할 수 있습니다.
        </p>

        <button
          onClick={() => navigate('/tictactoe')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          훅 샘플 보기
        </button>

        <button
          onClick={() => navigate('/tictactoe')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          틱택토
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
