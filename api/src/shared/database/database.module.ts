import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositores/users.repositories';
import { CategoriesRepository } from './repositores/categories.repositories';
import { BankAccountsRepository } from './repositores/bank-accounts.repositories';
import { TransactionsRepository } from './repositores/transactions.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
