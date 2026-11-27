# Updating Agent Desk

Install new preview builds manually from [Agent Desk releases](https://github.com/ririo08/agent-desk/releases).
Use the current setup EXE on Windows. On Linux, replace your AppImage with one from the
[desktop build workflow](https://github.com/ririo08/agent-desk/actions/workflows/build-desktop.yml).
Close the running app before updating, and update hosts and clients together if you see a
version mismatch.

## Continue threads after restarts

**Settings → Maintenance → Continue threads after restarts** is enabled by default. After an update, crash, or reboot (once Agent Desk starts again), supported active threads automatically resume—and threads waiting on subagents or monitors are woken and notified that background work stopped.

- Threads waiting for your approval/answer/secret—or archived, snoozed, or settled—are not auto-resumed.
- After 3 consecutive crash recoveries of an unfinished turn, the thread waits for your next message.
- Updating from V1? Read [legacy thread database migration](./thread-migration.md).

## Update providers

Open **Settings → Providers** and click **Update now** on individual providers or **Update all** across connected environments. Running chats keep using their current CLI until they end; new sessions and model catalogs refresh automatically. (Provider update checks in **Settings → Maintenance** must be enabled to fetch model catalog updates.)
