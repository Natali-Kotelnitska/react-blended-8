import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf/';

export const getStatus = async () => {
  const {
    data: { answer },
  } = axios.get(`/api`);
  return answer;
};
