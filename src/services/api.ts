import axios from 'axios'
import { SnackInterface } from '../interfaces/Snack/SnackInterface'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurguers = () => api.get<SnackInterface[]>('/burgers')
export const getPizzas = () => api.get<SnackInterface[]>('/pizzas')
export const getDrinks = () => api.get<SnackInterface[]>('/drinks')
export const getIceCreams = () => api.get<SnackInterface[]>('/ice-creams')

export default api
