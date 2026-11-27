# CLI reference (`t3`)

The `t3` command runs and manages Agent Desk servers, background services, remote access, threads, workflows, and diagnostics. Run `t3 --help` or `t3 <command> --help` for full flags.

See [Install Agent Desk](./install.md#command-line) for the bundled command.

## Running and connecting

| Command                  | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `t3 [path]` / `t3 start` | Start a foreground server and open the web app (optionally in a project directory).                          |
| `t3 serve`               | Start the server without opening a browser (`--lan`, `--tailscale-serve`, `--host`, `--port`, `--base-dir`). |
| `t3 app [path]`          | Open a directory as a project/thread in the running desktop app.                                             |
| `t3 status`              | Show how other devices can reach this host (`--json`).                                                       |
| `t3 pair`                | Generate a one-time pairing URL / QR code (`--tailscale`, `--scope <scope>`).                                |

## Background service and updates

| Command      | Description                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `t3 service` | Manage the background service (`install`, `status`, `restart`, `uninstall`, `protect [--undo]`). See [Background service](./background-service.md). |

## Threads, projects, and workflows

| Command       | Description                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `t3 thread`   | Script threads on the host (`start`, `send`, `show`, `list`; supports `--wait`, `--json`, `--worktree`, `--provider`, `--model`, `--option`). See [Host scripts](./outside-agents.md#host-scripts-t3-thread). |
| `t3 project`  | Manage projects on the host (e.g. `t3 project add <path> --track <folder>`).                                                                                                                                  |
| `t3 workflow` | Start and steer durable workflows (`start`, `list`, `show`, `resume`, `cancel`, `questions`, `signal`, `withdraw`, `hooks`, `store`). See [Workflows](./workflows.md).                                        |

## Environments, auth, themes, and policy

| Command          | Description                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `t3 environment` | Link or manage peer environments (`t3 environment link <addr> --pairing-code <code> --access <mode>`, `--from <file>`).                   |
| `t3 auth`        | Manage pairing codes and sessions (`pairing create`, `session list/revoke/issue`).                                                        |
| `t3 theme`       | Manage server-published themes (`set <id>`, `clear`, `show`). See [Appearance](./appearance.md#environment-themes).                       |
| `t3 policy`      | Validate, inspect, and generate MDM/GPO templates for [managed policies](./managed-policy.md) (`check`, `show`, `settings`, `templates`). |

## Diagnostics and maintenance

| Command            | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `t3 doctor`        | Inspect database size and reclaim disk space (`--dry-run`, `--fix`).                                     |
| `t3 browser setup` | One-time Linux host setup (AppArmor sandbox profile, libraries, fonts) for the headless preview browser. |
| `t3 trace summary` | Summarize local server trace latency and errors (`--since 30m`, `--limit 50`).                           |
| `t3 triage`        | Launch Claude Code, Codex, or Antigravity in your terminal with the triage playbook.                     |
