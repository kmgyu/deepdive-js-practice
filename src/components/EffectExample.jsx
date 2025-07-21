import { useEffect, useState } from "react";

export function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/news")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    useEffect 예제
  </h2>
  <p className="text-sm text-gray-500 mb-4">
    URL: <code className="text-blue-600">https://api.example.com/news</code> (실제로 실행되진 않음)
  </p>
  <div className="text-base text-gray-700">
    {data ? (
      <span className="font-medium text-green-600">{data.title}</span>
    ) : (
      <span className="text-gray-400 italic">불러오는 중...</span>
    )}
  </div>
</div>

  );
}
