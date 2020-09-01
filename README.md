# aws-api-gw-lambda
[![license: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Installation
```nodejs
npm install
```
## Usage
1. Start local server
```nodejs
serverless offline
```
2. Test API for success result
```bash
curl -G --data-urlencode "message=Hello From API Gateway Lambda" http://localhost:3000/dev/greeting
```

3. Test API for failed result
```bash
curl http://localhost:3000/dev/greeting
```
