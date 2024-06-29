import React, { useState } from "react";
import { submitRFQ } from "../services/api";

interface RFQFormProps {
  onRFQSubmitted: () => void;
}

const RFQForm: React.FC<RFQFormProps> = ({ onRFQSubmitted }) => {
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submitRFQ(emailContent);
    setEmailContent("");
    onRFQSubmitted();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Submit RFQ</h1>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Paste the RFQ email content here"
          rows={10}
        />
        <br />
        <button type="submit">Submit RFQ</button>
      </form>
    </div>
  );
};

export default RFQForm;
