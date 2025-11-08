import { type BankAccount } from '../../entities/BankAccount'
import { api } from '../axios'
type BankAccountsResponse = Array<BankAccount>

export async function getAll() {
  const { data } = await api.get<BankAccountsResponse>('/bank-accounts')

  return data
}
