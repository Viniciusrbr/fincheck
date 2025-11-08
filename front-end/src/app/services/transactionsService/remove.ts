import { api } from '../axios'

export async function remove(transactionId: string) {
  const { data } = await api.delete(`/transactions/${transactionId}`)

  return data
}
