Currency Service 💱

A professional Node.js + Express microservice for currency conversion.  
This service provides real-time exchange rates, a fallback mechanism for unsupported currencies, and a persistent history feature with pagination.

---

Features
- Convert between major currencies using live exchange rates
- Fallback mechanism for unsupported currencies
- History route with pagination
- JSON file persistence (lightweight and Termux-friendly)
- Docker support for easy deployment

---

Installation
Clone the repository and install dependencies:
`bash
git clone https://github.com/<username>/currency-service.git
cd currency-service
npm install
`

---

Run Service
`bash
node src/server.js
`

Service will run on http://localhost:5000

---

API Endpoints

POST /convert
Convert currency:
`json
{
  "from": "USD",
  "to": "EUR",
  "amount": 10
}
`

Response:
`json
{
  "from": "USD",
  "to": "EUR",
  "amount": 10,
  "rate": 0.87897,
  "result": 8.7897,
  "timestamp": "2026-07-27T00:40:00.000Z"
}
`

---

GET /convert/history?page=1&limit=10
View conversion history with pagination.

Response:
`json
{
  "page": 1,
  "limit": 10,
  "total": 25,
  "data": [
    {
      "from": "USD",
      "to": "EUR",
      "amount": 10,
      "rate": 0.87897,
      "result": 8.7897,
      "timestamp": "2026-07-27T00:40:00.000Z"
    }
  ]
}
`

---

Docker
Build and run the service inside a container:
`bash
docker build -t currency-service .
docker run -p 5000:5000 currency-service
`

---

License
This project is licensed under the MIT License — see the LICENSE file for details.

📜 LICENSE (MIT)
MIT License

Copyright (c) 2026 Shabani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
