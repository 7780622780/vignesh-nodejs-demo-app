# vignesh-nodejs-demo-app

**Automated CI/CD pipeline for a Node.js app using GitHub Actions and DockerHub.**

---

## Project Overview
Simple Node.js demo app used to demonstrate a full CI/CD pipeline: install dependencies, run tests, build a Docker image and push it to DockerHub on every push to the repository's default branch.

---

## Task Objective
This repository implements **Task 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)**:
- Runs tests using `npm test`.
- Builds a Docker image using the repository `Dockerfile`.
- Pushes the image to DockerHub.
- Trigger: push to the default branch (e.g., `main` or `master`).

---

## Files of interest
- `index.js` — app entrypoint.
- `package.json` — scripts and deps (ensure `test` and `start` scripts exist).
- `Dockerfile` — container build instructions.
- `tests/` — jest tests (if present).
- `.github/workflows/main.yml` — CI/CD workflow (create this file to enable automation).

---

## Prerequisites (for local testing)
- Node.js (v14/16/18 recommended)
- npm (or yarn)
- Docker (for building and running image)
- DockerHub account (to push images)

---

## Run locally
1. Clone repo:
   ```bash
   git clone https://github.com/<vigneshvv1003@gmail.com>/vignesh-nodejs-demo-app.git
   cd vignesh-nodejs-demo-app
