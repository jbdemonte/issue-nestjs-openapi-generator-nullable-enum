import { Injectable } from '@nestjs/common';
import { GetHelloResponseDto } from './get-hello-response.dto';

@Injectable()
export class AppService {
  getHello(): GetHelloResponseDto {
    return {
      value: null,
      workaround: null,
      msg: 'Hello World!',
    };
  }
}
