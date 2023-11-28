import { Global, Module } from '@nestjs/common';
import AuthHelperService from './authHelper.service';

@Global() // it helps for not doing import in every module just import directly in their service or controller file to the AuthHelperService
@Module({
  providers: [AuthHelperService],
  exports: [AuthHelperService],
})
export class AuthHelperModule {}
