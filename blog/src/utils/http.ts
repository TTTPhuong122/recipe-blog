import axios, { AxiosInstance } from 'axios'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://rest-api-recipe-blog.vercel.app/',
      timeout: 10000
    })
  }
}
export const http = new Http().instance
