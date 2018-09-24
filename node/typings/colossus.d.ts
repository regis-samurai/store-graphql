declare module 'colossus' {
  import { Context as KoaContext } from 'koa'

  export interface IOContext {
    account: string
    workspace: string
    authToken: string
    production: boolean
    params: {
      [param: string]: string
    }
    region: string
    route: {
      id: string
      declarer: string
      params: {
        [param: string]: string
      }
    },
    userAgent: string
  }

  export interface ColossusContext<T = {}> extends KoaContext {
    vtex: IOContext
    dataSources: T
  }
}
