import * as graphql from "@nestjs/graphql";
import { SignalResolverBase } from "./base/signal.resolver.base";
import { Signal } from "./base/Signal";
import { SignalService } from "./signal.service";

@graphql.Resolver(() => Signal)
export class SignalResolver extends SignalResolverBase {
  constructor(protected readonly service: SignalService) {
    super(service);
  }
}
