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
