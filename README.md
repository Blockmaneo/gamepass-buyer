# Roblox Gamepass Buyer

A Node.js script to automatically purchase Roblox gamepasses.

## Disclaimer

- ***⚠️Use responsibly. Sharing your Roblox cookie can compromise your account. This script is provided for educational purposes only.⚠️***

## Features

- **Automatic Gamepass Purchasing**
- **Configurable Purchase Count**
- **Customizable Cooldown**
- **XSRF Token Handling**
- **Robust Error Management**

## Prerequisites

- Node.js
- Roblox `.ROBLOSECURITY` cookie
- `axios` library

## Installation

```bash
npm install axios
```

## Usage

- Replace the cookie with your Roblox authentication cookie
- Set gamepass.id to target gamepass
- **Configure purchase settings**

 ```bash
const config = {
    cookie: "YOUR_ROBLOX_COOKIE",
    gamepass: {
        id: 6632464,      // Gamepass ID
        amount: 1,         // Purchase times
        cooldownTime: 1    // Seconds between purchases
    }
};
```
