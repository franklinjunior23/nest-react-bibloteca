import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly PrismaService: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getBoockNew() {
    return await this.PrismaService.boock.findMany({
      orderBy: {
        createdAt: 'desc', // Ordena por la fecha de creación, de más reciente a más antiguo
      },
      take: 10, // Limita el resultado a los 10 registros más recientes
    });
  }
}
