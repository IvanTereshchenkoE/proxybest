type IauthData =  {
    login: string,
    password: string,
  }
type IauthDataMore = IauthData & {
    name: string,
    id: string,
}

export type {IauthData, IauthDataMore}