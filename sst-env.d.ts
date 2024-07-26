/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyWeb: {
      type: "sst.aws.Nuxt"
      url: string
    }
  }
}
export {}
