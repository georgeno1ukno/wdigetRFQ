import React from "react";
import QuoteDashboard from "./components/QuoteDashboard";
import RFQForm from "./components/RFQForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <RFQForm />
      <QuoteDashboard />
    </div>
  );
};

export default App;
