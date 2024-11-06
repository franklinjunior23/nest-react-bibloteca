import { Module } from '@nestjs/common';
import { BoockService } from './boock.service';
import { BoockController } from './boock.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BoockController],
  providers: [BoockService],
})
export class BoockModule {}
