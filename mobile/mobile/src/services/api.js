import axios from 'axios';

const api = axios.create({
	//Para rodar no Expo e na rede (IP da máquina):
	baseURL: 'http://192.168.100.118:3333'
});

export default api;
