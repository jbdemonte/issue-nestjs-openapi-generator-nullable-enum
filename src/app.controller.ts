import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloResponseDto } from './get-hello-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ operationId: 'get-hello' })
  @ApiOkResponse({ type: GetHelloResponseDto })
  getHello(): GetHelloResponseDto {
    return this.appService.getHello();
  }
}
