import { ApiProperty } from '@nestjs/swagger';
import { FooBarEnum } from './foo-bar.enum';

export class GetHelloResponseDto {
  @ApiProperty({ enum: FooBarEnum, enumName: 'FooBarEnum', nullable: true })
  value!: FooBarEnum | null;

  @ApiProperty({ oneOf: [{ type: 'enum', $ref: 'FooBarEnum', nullable: true }] })
  workaround!: FooBarEnum | null;

  @ApiProperty()
  msg!: string;
}
