import { Controller, Get, HeaderParams, View } from '@tsed/common'

@Controller('/')
export class IndexCtrl {

  @Get('/')
  @View('index.ejs')
  get(
    @HeaderParams('x-forwarded-proto') protocol: string,
    @HeaderParams('host') host: string
  ) {
    const hostUrl = `${protocol || 'http'}://${host}`
    return {
      BASE_URL: hostUrl,
      docs: [10, 20, 3, 15]
    }
  }
}
