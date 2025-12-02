# ARKWallet
An AI powered wallet to track your expenseswith Voice Input Support and Push Notification

## Dependency
```
arcwallet
├── client
│   ├── @eslint/js@9.39.1
│   ├── @types/node@24.10.1
│   ├── @types/react-dom@19.2.3
│   ├── @types/react@19.2.7
│   ├── @vitejs/plugin-react@5.1.1
│   ├── eslint-plugin-react-hooks@7.0.1
│   ├── eslint-plugin-react-refresh@0.4.24
│   ├── eslint@9.39.1
│   ├── globals@16.5.0
│   ├── react-dom@19.2.0
│   ├── react@19.2.0
│   ├── typescript-eslint@8.48.0
│   ├── typescript@5.9.3
│   └── vite@7.2.6
└── server
    ├── dotenv@17.2.3
    ├── express@5.2.1
    └── nodemon@3.1.11
```

Expected code base structure

```
ArkWallet/
├── client/          <-- React Frontend Code
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/  (API calls to backend)
│   │   └── App.js
│   └── package.json
|
├── server/          <-- Express/Node.js Backend Code
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js    (or app.js - entry point)
│   └── package.json
|
├── .env             <-- Environment variables (sensitive data)
└── package.json     <-- Root package.json (for dev scripts, etc.)
```