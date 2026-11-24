# Privacy and diagnostics

Agent Desk disables product analytics, agent feedback and external diagnostics exports. The server
does not read Codex or Claude login files for analytics or create a tracking ID. Old settings and
telemetry environment variables cannot enable these features.

Diagnostics in **Settings > Maintenance** still show local logs, traces and resource usage. Token
usage is available locally. The browser can send diagnostic spans to the environment it is
connected to, where the server stores them locally.

Agent Desk disables T3 Connect, relay notifications and guest links. Pair a device directly over
[LAN or Tailscale](./remote-access.md#pair-over-a-lan-or-private-network).

Providers and services you choose for your work, such as OpenAI, Anthropic and Git remotes, still
receive the requests needed to use them. Provider CLIs and extensions have their own privacy
settings. This policy covers the Agent Desk server, desktop app and bundled Web client.
