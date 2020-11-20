import { Controller, Get, Render } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Handlebars ui')
@Controller()
export class AppController {  
  @Get()
  @Render('index')
  root(): { message: string } {
    return { message: 'Hello world!' };
  }
}