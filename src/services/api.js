import axios from 'axios';

const API_URL = 'https://api.reachinbox.com'; // Replace with actual API URL

export const fetchOneboxData = async () => {
  return await axios.get(`${API_URL}/onebox/list`);
};

export const fetchThreadById = async (id) => {
  return await axios.get(`${API_URL}/onebox/${id}`);
};

export const deleteThreadById = async (id) => {
  return await axios.delete(`${API_URL}/onebox/${id}`);
};

export const sendReply = async (threadId, replyData) => {
  return await axios.post(`${API_URL}/reply/${threadId}`, replyData);
}