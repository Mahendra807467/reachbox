import React, { useState } from 'react';

const TextEditor = ({ onSend }) => {
  const [body, setBody] = useState('');

  const handleSend = () => {
    const replyData = {
      subject: "Re: [Subject]",
      body: <html>${body}</html>,
      // other required fields
    };
    onSend(replyData);
  };

  return (
    <div className="editor-container">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Write your reply..."
      />
      <button onClick={handleSend} className="mt-2 bg-blue-500 text-white p-2 rounded">Send</button>
    </div>
  );
};

export default TextEditor;