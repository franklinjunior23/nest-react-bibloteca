import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoockService } from './boock.service';
import { CreateBoockDto } from './dto/create-boock.dto';
import { UpdateBoockDto } from './dto/update-boock.dto';

@Controller('boock')
export class BoockController {
  constructor(private readonly boockService: BoockService) {}

  @Post()
  create(@Body() createBoockDto: CreateBoockDto) {
    return this.boockService.create(createBoockDto);
  }

  @Get()
  findAll() {
    return this.boockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoockDto: UpdateBoockDto) {
    return this.boockService.update(+id, updateBoockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boockService.remove(+id);
  }
}
