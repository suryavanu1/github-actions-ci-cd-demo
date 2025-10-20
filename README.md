# GitHub Actions CI/CD Demo 🚀

A full CI/CD pipeline demo using **GitHub Actions**, **Docker Hub**, and **AWS EC2**.

## Features
- Node.js Express app with Jest tests
- Dockerized build
- GitHub Actions workflow for:
  - Build + test
  - Docker image build + push to Docker Hub
  - Automatic deploy to AWS EC2

## Steps to use
1. Fork or clone this repo.
2. Add GitHub Secrets for:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`
   - `EC2_HOST`
   - `EC2_USER`
   - `EC2_KEY`
3. Push to `main` branch.
4. Watch the Actions tab — your app builds, pushes, and deploys automatically.

Visit your EC2 public IP on port 8080 to see the result.

---
Made for DevOps learners by ChatGPT.
