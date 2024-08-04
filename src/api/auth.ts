import request from '@/utils/request'

export namespace AuthApi {
  export interface LoginApiIn {
    username: string
    password: string
  }
  export interface LoginApiOut {
    username: string
    name: string
  }

  export const login = async (data: LoginApiIn): Promise<LoginApiOut> => {
    return request.post('/api/login', data)
  }
}
