# FAQ

## Is Agent Desk a harness?

No. A harness turns an LLM into an agent (tools, execution loop, and results)—like Claude Code's Agent SDK or Codex App Server. Agent Desk drives those harnesses through one fast interface; it does not work without at least one installed agent.

Bring your own: Claude Code, Codex, Cursor, Grok Build, OpenCode, Google Antigravity, Kiro, Pi, Muse Code, fx, or any [ACP agent](./providers-acp.md). See [Provider setup](./install.md#providers). (Longer read: [What is a harness?](https://t3.gg/blog/post/what-is-a-harness))

## Why use Agent Desk instead of Claude Code or the Codex app?

- **Bring your own subscription**: Use Claude, Codex, and every other agent you already have installed in one place.
- **Remote-first**: Connect to your host directly from a browser or another desktop app over LAN or Tailscale.
- **Open source (MIT)**: Fork the source code under your own branding if you ever want something different.

## Can I use Agent Desk with my Claude Code subscription?

Yes.

## How much does Agent Desk cost?

Agent Desk is available under the MIT License. Your provider subscriptions or API usage are billed by the provider.

## Can I fork or redistribute Agent Desk?

The [MIT License](../../LICENSE) covers the source code. The upstream branding has its own policy. Any public fork or build must use its own branding and clearly state that it is unofficial and not affiliated with T3 Tools, Inc. See [TRADEMARK.md](../../TRADEMARK.md).

## Why is my Claude 5-hour limit draining so fast?

Since v0.1.7, Claude in Agent Desk drains your 5-hour limit at the same rate as Claude Code directly (an earlier Anthropic Agent SDK discrepancy has been resolved). If you still see it, [update Agent Desk](./updating.md) on the machine running your agents.

## How do I use Agent Desk remotely?

Pair your browser or desktop app directly with the host over LAN or Tailscale. See [Remote access](./remote-access.md).

## Will I get banned for using my subscription?

No. Agent Desk stays within the TOS of Claude Code, Codex, Google Antigravity, Grok Build, Cursor, and official ACP bindings.

## Can I add a bunch of accounts for one provider?

Agent Desk intentionally does not include an automatic multi-account switcher to avoid risking provider TOS bans. Adding a separate work/personal account is supported ([Codex](./providers-codex.md#use-multiple-accounts), [Claude](./providers-claude.md#multiple-accounts-and-presets)). For larger pools managed externally (e.g. via [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)), Agent Desk can display pooled limits under Usage ([Connect a hub](./usage.md#connect-a-cliproxyapi-hub)).

## Can I use an API key or OpenRouter instead of a subscription?

Yes. Add another provider instance in **Settings → Providers** with its own environment variables and endpoint (your subscription setup stays untouched). See [OpenRouter for Claude](./providers-claude.md#openrouter-and-local-routers) and [Providers](./install.md#providers).

## Does Agent Desk support local models?

No. Agent Desk focuses on frontier coding agents.

## Where do my code and prompts go?

Code and prompts go directly to the provider you choose. For remote access, Agent Desk supports direct connections over [LAN or Tailscale](./remote-access.md#pair-over-a-lan-or-private-network).

Agent Desk disables product analytics and external diagnostics exports. See [Privacy and diagnostics](./telemetry.md).

## Worktrees are eating my disk. How do I clean them up?

Enable automatic cleanup or run **Delete now** in **Settings → Worktrees → Cleanup**. See [Storage cleanup](./project-settings.md#storage-cleanup).

## Is there voice input?

Yes. Choose a connected environment for local transcription or configure a speech provider. See [Voice input](./voice-input.md).

## Which platforms are supported?

Desktop previews are available for Windows x64 and Linux x64. The Windows app can run agents inside WSL. See [Install](./install.md).

## Why is my provider not showing up?

Usually the provider CLI is not installed, not signed in, or not on the `PATH` of the **server machine** (especially with version managers). Authenticate on the server machine first (e.g. `codex login` or `claude auth login`) and set **Binary path** in **Settings → Providers** if needed.
