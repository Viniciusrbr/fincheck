import { api } from '../axios'

interface MeResponse {
  name: string
  email: string
}

export async function me() {
  const { data } = await api.get<MeResponse>('/users/me')
  return data
}
