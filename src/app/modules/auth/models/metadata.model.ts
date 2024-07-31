export interface MetadataModel {
  user: UserMetadataModel,
  modules: ModuleMetadataModel[]
}

export interface UserMetadataModel {
  idCompany: number,
  idUser: number,
  username: string,
  role: string,
  name: string,
  lastName: string,
  urlPhoto: string,
  email: string,
  address: string,
  phone: string,
  comment: string,
}

export interface ModuleMetadataModel {
  idCompany: number,
  idModule: number,
  title: string,
  description: string,
  markdownContent: string,
  urlIcon: string,
  urlLogo: string,
  urlBackground: string,
}
