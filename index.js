const { Buyer } = require('./gamepass');

const config = {
    cookie: "cookiehere",
    gamepass: {
        id: 1,              // Gamepass ID to buy
        amount: 1,          // Number of times to buy
        cooldownTime: 1     // Seconds between purchases
    }
};

async function main() {
    try {
        const buyer = new Buyer(config.cookie);
        console.log(`Starting auto-buy for gamepass ${config.gamepass.id}`);
        await buyer.autoBuy(
            config.gamepass.id,
            config.gamepass.amount,
            config.gamepass.cooldownTime
        );
        console.log('Auto-buy completed');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();