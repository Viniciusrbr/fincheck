import { type Category } from '../../entities/Category'
import { api } from '../axios'

type CategoriesResponse = Array<Category>

export async function getAll() {
  const { data } = await api.get<CategoriesResponse>('/categories')

  return data
}
