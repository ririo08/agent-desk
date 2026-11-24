import { afterEach, expect, it, vi } from "@effect/vitest";
import { hasCloudPublicConfig, resolveCloudPublicConfig } from "./publicConfig.ts";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

it.each([undefined, {}])(
  "ignores configured cloud credentials in browser and Electron",
  (desktopBridge) => {
    vi.stubEnv("VITE_CLERK_PUBLISHABLE_KEY", "pk_test_example");
    vi.stubEnv("VITE_CLERK_JWT_TEMPLATE", "t3-relay");
    vi.stubEnv("VITE_T3CODE_RELAY_URL", "https://relay.example.test");
    vi.stubEnv("VITE_RELAY_OTLP_TRACES_URL", "https://collector.example.test");
    vi.stubGlobal("window", { location: new URL("https://app.example.test"), desktopBridge });

    expect(hasCloudPublicConfig()).toBe(false);
    expect(resolveCloudPublicConfig()).toEqual({
      clerkPublishableKey: null,
      clerkJwtTemplate: null,
      relayUrl: null,
      relayTracing: { tracesUrl: null, tracesDataset: null, tracesToken: null },
    });
  },
);
