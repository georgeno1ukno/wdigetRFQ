import React, { useState } from "react";
import { submitRFQ } from "../services/api";

const RFQForm: React.FC = () => {
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submitRFQ(emailContent);
    setEmailContent("");
    alert("RFQ submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit RFQ</h1>
      <textarea
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        placeholder="Paste the RFQ email content here"
        rows={10}
        cols={50}
      />
      <br />
      <button type="submit">Submit RFQ</button>
    </form>
  );
};

export default RFQForm;
