import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

export class AnalyticsService extends Context.Service<
  AnalyticsService,
  {
    readonly record: (
      event: string,
      properties?: Readonly<Record<string, unknown>>,
    ) => Effect.Effect<boolean>;
    readonly flush: Effect.Effect<void>;
    readonly recordOwners: (
      owners: ReadonlyArray<{
        readonly source: "connect" | "openai" | "claude" | "device";
        readonly ownerId: string;
      }>,
      observedBy: "server" | "client",
    ) => Effect.Effect<void>;
  }
>()("t3/telemetry/AnalyticsService") {}

export const layer = Layer.succeed(AnalyticsService, {
  record: Effect.fnUntraced(function* () {
    return yield* Effect.succeed(false);
  }),
  recordOwners: Effect.fnUntraced(function* () {
    yield* Effect.void;
  }),
  flush: Effect.void,
});
