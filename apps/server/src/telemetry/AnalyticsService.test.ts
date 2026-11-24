import { assert, it } from "@effect/vitest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";

import * as Analytics from "./AnalyticsService.ts";

it.effect("analytics requires no filesystem or HTTP services even with telemetry enabled", () =>
  Effect.gen(function* () {
    const analytics = yield* Analytics.AnalyticsService;
    assert.isFalse(yield* analytics.record("test.event", { model: "test-model" }));
    yield* analytics.recordOwners([{ source: "device", ownerId: "test-id" }], "client");
    yield* analytics.flush;
  }).pipe(
    Effect.provide(Analytics.layer),
    Effect.provideService(
      ConfigProvider.ConfigProvider,
      ConfigProvider.fromEnv({
        env: {
          T3CODE_TELEMETRY_ENABLED: "true",
          T3CODE_POSTHOG_HOST: "http://127.0.0.1:4318",
        },
      }),
    ),
  ),
);
