# Flash USDT Demo — educational TRC20 token

**Not Tether. Not USDT. No dollar peg or guaranteed market value.**

This project prepares a **real**, fixed-supply TRC20 demonstration token named `Flash USDT Demo - NOT TETHER` (`FUSDTDEMO`). The token has **6 decimals** and a fixed supply of **1,000,000**. Once deployed, tokens can move between your TRON wallets with real on-chain transaction IDs.

**Status:** source code only. Creating this GitHub repository does not deploy a contract or issue tokens on TRON.

## Safety

- Do not change token metadata to impersonate official Tether USDT.
- Never commit seed phrases, private keys, API secrets or `.env` files.
- Test on Shasta before considering TRON Mainnet; deploying and transfers can incur TRX costs.
- A transaction marked SUCCESS is not proof of genuine Tether. Verify the token **contract address**.

## Source files

- `contracts/FlashUsdtDemo.sol` — fixed-supply TRC20 token based on OpenZeppelin TRON contracts.
- `tronbox-config.js` — compiler configuration, Solidity 0.8.20.
- `package.json` — pinned dependencies and compile command.
- `.github/workflows/compile.yml` — compile check on GitHub (no wallet connections or deployment).

## Compile (on Mac)

Install Node.js 20 or newer, clone/download the repository, then run:

```bash
npm install
npm run compile
```

The build will be in `build/contracts/` if compilation succeeds.

## Deployment and demonstration

1. First compile and test on the **Shasta test network** using a separate development wallet.
2. Review wallet/energy fees and the selected network before attempting any Mainnet deployment. Only you approve wallet transactions.
3. Once deployed, copy the **contract address** from your own transaction record. This address does not exist yet.
4. In **Trust Wallet** choose Import crypto → Token → Tron → TRC20, then import the deployed contract address. The wallet may not automatically display this custom token or a USD price.
5. Send a small number of your own demo tokens to your second wallet. Open the real TXID in [TRONSCAN](https://tronscan.org/) and check the sender, recipient, amount and token contract.
6. Contrast that contract with the official TRON Tether USDT address: `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`.

**This is educational sample code, not a stablecoin, investment asset or security audit.**

References:

- https://developers.tron.network/docs/issuing-trc20-tokens-tutorial
- https://docs.openzeppelin.com/tron-contracts
