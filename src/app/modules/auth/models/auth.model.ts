export interface ResponseAuth {
  verifyCode?: string
  token: string
  refreshToken: string
}

export interface ApiResponseAuth {
  status: number
  message: string
  object: ResponseAuth
  logMessage: string
  logUser: String
  logTime: Date | number[]
}

export interface BasicUserModel {
  username: string
  role: string
  name: string
  lastName: string
  urlPhoto: string
  email: string
  address: string
  phone: string
  comment: string
}
