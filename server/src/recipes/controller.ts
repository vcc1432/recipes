import { JsonController, Get, Param, HttpCode, Body, Post } from 'routing-controllers'
import Ad from './entity'


@JsonController()
export default class AdController {

    @Get('/ads')
    async allAds() {
      const ads = await Ad.find()
      return { ads }
    }

    @Get('/ads/:id')
    async getAd(
        @Param('id') id: number
    ) {
      return await Ad.findOne(id)
    }

    @Post('/ads')
      @HttpCode(201)
      createAd(
        @Body() ad: Ad
      ) {
        return ad.save()
      }

}