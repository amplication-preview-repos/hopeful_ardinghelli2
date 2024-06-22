import { Module } from "@nestjs/common";
import { SignalModuleBase } from "./base/signal.module.base";
import { SignalService } from "./signal.service";
import { SignalController } from "./signal.controller";
import { SignalResolver } from "./signal.resolver";

@Module({
  imports: [SignalModuleBase],
  controllers: [SignalController],
  providers: [SignalService, SignalResolver],
  exports: [SignalService],
})
export class SignalModule {}
