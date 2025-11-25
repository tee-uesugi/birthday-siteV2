import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import QuestionScreen from "./components/QuestionScreen";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <QuestionScreen onCorrect={() => navigate("/surprise")} />
      )}
    </>
  );
}
