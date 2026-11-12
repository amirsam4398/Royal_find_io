# ROYAL AI CONTINUITY PROTOCOL

## Mission
Allow ChatGPT, Claude, Gemini, Grok and GapGPT to continue the same
project across separate conversations and usage limits.

## Single Source Of Truth
GitHub repository:
https://github.com/amirsam4398/Royal_find_io

The latest verified GitHub commit and project documentation
are the shared source of truth.

## Mandatory Startup Procedure
Every AI assistant must:

1. Inspect the repository and current branch.
2. Read AGENTS.md.
3. Read AI_CONTEXT.md.
4. Read docs/PROJECT_STATUS.md.
5. Read docs/HANDOFF.md.
6. Read this protocol.
7. Inspect recent commits and working-tree changes.
8. Identify the exact next unfinished task.
9. Report its understanding before changing code.

## Work Continuity
- Continue existing work; do not restart unnecessarily.
- Do not repeat completed tasks without a reason.
- Preserve architecture, UI and existing functionality.
- Inspect files before modifying them.
- Make small, reviewable changes.
- Explain changed files and their purpose.
- Run relevant tests and production build.
- Report failures honestly.

## Git Safety
- main is the stable branch.
- Do not develop directly on main.
- Use a separate feature branch.
- Never force-push.
- Never overwrite another assistant's unmerged work.
- Check git status and remote changes before committing.
- Use Pull Requests for integration when available.
- Do not push or deploy without user authorization.

## Handoff Requirements
Before stopping work, update:

1. docs/HANDOFF.md
2. docs/PROJECT_STATUS.md
3. docs/CHANGELOG.md, if significant changes were made.

The handoff must record:
- Completed work.
- Files changed.
- Tests and their actual results.
- Current branch and commit.
- Uncommitted changes.
- Known blockers.
- Exact next task.
- Commands needed to continue.

## Conflict Prevention
Only one assistant should own code modifications at a time.
Other assistants may inspect, review and suggest changes.
If another assistant has modified the repository, inspect and reconcile
those changes before continuing.

## Credentials And Privacy
- Never request passwords in project files.
- Never commit API keys, access tokens or private credentials.
- Use environment variables for secrets.
- Never expose private user information.

## Provider Independence
Do not assume every AI provider supports the same tools,
GitHub integration, API access or file editing capabilities.
If direct repository access is unavailable, the user must provide
the relevant files or a project archive.

## Final Principle
The next assistant must be able to continue from the repository
without depending on the previous assistant's private conversation.
