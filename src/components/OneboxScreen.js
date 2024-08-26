import React, { useState, useEffect } from 'react';
import { fetchOneboxData, deleteThreadById, sendReply } from '../services/api';

const OneboxScreen = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchOneboxData();
      setThreads(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteThreadById(id);
    setThreads(threads.filter(thread => thread.id !== id));
  };

  const handleReply = async (replyData) => {
    await sendReply(selectedThread.id, replyData);
    // Update UI accordingly
  };

  return (
    <div>
      <div className="thread-list">
        {threads.map(thread => (
          <div key={thread.id} className="thread-item">
            <p>{thread.subject}</p>
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
            <button onClick={() => setSelectedThread(thread)}>Reply</button>
          </div>
        ))}
      </div>
      {selectedThread && (
        <div className="reply-section">
          <fetchThreadById onSend={handleReply} />
        </div>
      )}
    </div>
  );
};

export default OneboxScreen;