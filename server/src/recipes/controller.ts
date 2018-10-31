import { JsonController, Get, Param} from 'routing-controllers'
import Recipe from './entity'


@JsonController()
export default class AdController {

    @Get('/recipes')
    async allRecipes() {
      const recipes = await Recipe.find()
      return { recipes }
    }

    @Get('/recipes/:id')
    async getRecipe(
        @Param('id') id: number
    ) {
      return await Recipe.findOne(id)
    }

}