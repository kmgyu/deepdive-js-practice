import { useEffect, useState } from "react";

export function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/news")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data ? data.title : "불러오는 중..."}</div>;
}
