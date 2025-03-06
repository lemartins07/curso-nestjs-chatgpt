import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'minha_chave_secreta',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, AuthRepository, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
