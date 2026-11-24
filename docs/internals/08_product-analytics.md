# Product analytics

Agent Desk disables analytics at the production service boundary. The disabled layer requires no
filesystem, HTTP client or configurable transport. Avoid evaluating analytics-only inputs before
calling the service. This is especially important for provider credentials and device identity.
Authentication, locally displayed provider usage and local diagnostics have separate paths.

The desktop and server keep local traces and resource diagnostics. Web spans reach the connected
environment's local trace sink. External OTLP, relay trace export and endpoint checks have no
production transport. Feedback and relay publishing are disabled at their service boundaries.
