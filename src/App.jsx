import React, { useState, useEffect } from "react";
import AppRouter from "./routes/App.Router";
import Loading from "./common/Loding";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AppRouter />
      )}
    </>
  );
}

export default App;
