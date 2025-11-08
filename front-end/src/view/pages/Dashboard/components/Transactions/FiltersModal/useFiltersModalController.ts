import { useMemo, useState } from 'react'

import { useBankAccounts } from '../../../../../../app/hooks/useBankAccounts'

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    undefined | string
  >(undefined)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const { accounts: fetchedAccounts } = useBankAccounts()

  const accounts = useMemo(
    () => (Array.isArray(fetchedAccounts) ? fetchedAccounts : []),
    [fetchedAccounts],
  )

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? undefined : bankAccountId,
    )
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step)
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
  }
}
