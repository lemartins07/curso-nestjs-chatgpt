import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // Ativa logs no console
    });
  }
  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Prisma conectado ao banco de dados.');
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error('❌ Erro ao conectar no banco:', error.message);
      } else {
        this.logger.error('Erro desconhecido ao conectar no banco:', error);
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
