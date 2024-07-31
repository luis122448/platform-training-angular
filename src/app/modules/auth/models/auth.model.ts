import { MetadataModel } from "./metadata.model"

export interface ApiResponseAuth<T>{
  status: number,
  message: string,
  logMessage?: string
  logUser?: String
  logTime?: Date | number[],
  object: T | null,
  metadata: MetadataModel | null
}

export interface AuthRequestUser{
  company: string,
  coduser: string,
  password: string
}

export interface AuthRequestCode{
  company: string,
  coduser: string,
  verifyCode: string
}

export interface AuthRespnseObject{
  username?: string,
  role?: string,
  token?: string,
  refreshToken?: string
}
