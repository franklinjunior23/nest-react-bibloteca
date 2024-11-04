import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './boock/category/category.module';
import { BoockModule } from './boock/boock.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoryModule, BoockModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
