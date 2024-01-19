export interface ApiResponseObject<T>{
  status: number
  message: string
  object: T
  logMessage: string
  logUser: String
  logTime: Date | number[]
}

export interface ApiResponseList<T>{
  status: number
  message: string
  list: T[]
  logMessage: string
  logUser: String
  logTime: Date | number[]
}
