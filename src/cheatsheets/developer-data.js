/**
 * DevAtlas - Developer Cheatsheets Catalog
 */

const DeveloperCheatsheets = {
  git: [
    { cmd: "git checkout -b <branch>", desc: "Create and switch to a new branch" },
    { cmd: "git commit --amend --no-edit", desc: "Amend last commit without changing commit message" },
    { cmd: "git reset --soft HEAD~1", desc: "Undo last commit while keeping changes staged" },
    { cmd: "git stash push -m 'wip'", desc: "Stash uncommitted changes with custom message" },
    { cmd: "git cherry-pick <commit-hash>", desc: "Apply changes from specific commit to current branch" },
    { cmd: "git log --oneline --graph --all", desc: "Visual branch history in terminal" }
  ],
  docker: [
    { cmd: "docker build -t <name>:<tag> .", desc: "Build an image from a Dockerfile" },
    { cmd: "docker run -d -p 8080:80 --name web app", desc: "Run container in background with port forwarding" },
    { cmd: "docker ps -a", desc: "List all containers (running and stopped)" },
    { cmd: "docker system prune -af --volumes", desc: "Clean up unused containers, networks, and images" },
    { cmd: "docker logs -f --tail 100 <container>", desc: "Follow container logs with recent 100 lines" }
  ],
  linux: [
    { cmd: "lsof -i :<port>", desc: "Find process listening on specific port" },
    { cmd: "kill -9 <pid>", desc: "Force kill process by PID" },
    { cmd: "tar -czvf archive.tar.gz /path", desc: "Create compressed tar gzip archive" },
    { cmd: "df -h", desc: "Display disk space usage in human-readable format" },
    { cmd: "grep -rnwi '/path' -e 'pattern'", desc: "Search recursively for exact word match" }
  ],
  httpStatus: [
    { code: 200, name: "OK", desc: "The request succeeded" },
    { code: 201, name: "Created", desc: "The request succeeded and a new resource was created" },
    { code: 301, name: "Moved Permanently", desc: "The URI of requested resource has changed permanently" },
    { code: 400, name: "Bad Request", desc: "The server could not understand the request due to invalid syntax" },
    { code: 401, name: "Unauthorized", desc: "Authentication credentials required or invalid" },
    { code: 403, name: "Forbidden", desc: "Client does not have access rights to content" },
    { code: 404, name: "Not Found", desc: "The server cannot find requested resource" },
    { code: 429, name: "Too Many Requests", desc: "Rate limiting threshold exceeded" },
    { code: 500, name: "Internal Server Error", desc: "Server encountered unexpected condition" },
    { code: 502, name: "Bad Gateway", desc: "Invalid response from upstream server" },
    { code: 503, name: "Service Unavailable", desc: "Server not ready to handle request (overloaded or down)" }
  ],
  regex: [
    { pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", desc: "Email address validation" },
    { pattern: "^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$", desc: "URL validation" },
    { pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", desc: "Strong password (min 8 chars, letter + number)" },
    { pattern: "^(\\d{1,3}\\.){3}\\d{1,3}$", desc: "IPv4 Address matching" },
    { pattern: "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$", desc: "Hex Color code matching" }
  ]
};

module.exports = DeveloperCheatsheets;
