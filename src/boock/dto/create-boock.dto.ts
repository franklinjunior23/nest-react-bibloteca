import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { ToTitleCase } from 'src/helper/transform/to-title-case.transform';
import { ToCapitalized } from 'src/helper/transform/toCapitalize.transform';

export class CreateBoockDto {
  @ToTitleCase()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;

  @IsString()
  editorial: string;

  @ToCapitalized()
  place: string;

  @IsString()
  @Transform(({ value }) => new Date(value).getFullYear())
  year: string;
}
