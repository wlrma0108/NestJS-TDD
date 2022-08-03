import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
  
    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
    
  }
export class AppController2{
  constructor(private readonly appService: Appservice0){}

  @Get('/hello')
    getHello(): string{
      return this.appService.getHello();
  }
}