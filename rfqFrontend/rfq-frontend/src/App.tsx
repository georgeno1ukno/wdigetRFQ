import React, { useState } from "react";
import QuoteDashboard from "./components/QuoteDashboard";
import RFQForm from "./components/RFQForm";
import "./styles/App.css";

const App: React.FC = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleRFQSubmitted = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div className="App">
      <RFQForm onRFQSubmitted={handleRFQSubmitted} />
      <QuoteDashboard refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default App;
