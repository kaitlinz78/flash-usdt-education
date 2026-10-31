# Deploy and send FUSDTDEMO using your own wallets

**What you will receive:** an actual TRC20 token and TRON transaction ID. **What you will NOT receive:** genuine Tether USDT or any USD value.

## Phase 1 — get a compiled, flat contract source

1. Go to [Actions](https://github.com/kaitlinz78/flash-usdt-education/actions) and open the latest **Compile educational TRC20** run.
2. Check that the run shows a green success check.
3. Download the `tron-demo-contract-build` artifact at the bottom of the run page, and unzip it.
4. Locate `FlashUsdtDemo.flattened.sol`. This file contains the contract and its OpenZeppelin dependencies in one source file for TronIDE. The artifact also includes the compiler-produced ABI/bytecode.

If no successful action is visible, **stop**; the project has not passed compilation.

## Phase 2 — deploy

1. On your Mac, create a **fresh development wallet** using the [official TronLink extension](https://www.tronlink.org/); do not import your main Trust Wallet seed.
2. First select **Shasta Testnet** in TronLink. Use test TRX from the Shasta faucet.
3. Open [TronIDE](https://www.tronide.io/). Import `FlashUsdtDemo.flattened.sol` into the editor and select **Solidity 0.8.20** with optimizer **enabled, runs 200**. Compile the `FlashUsdtDemo` contract.
4. Open **Deploy & Run Transactions**; select **Injected TronWeb**, check network/account and choose `FlashUsdtDemo`.
5. Review TRX costs/fee limit, click **Deploy** and independently verify the signature request in TronLink.
6. Verify **SUCCESS** on the target network and copy the newly deployed **contract address**. A deployment is not successful just because a button was clicked.

Only repeat deployment on **TRON Mainnet** when you have safely completed Shasta testing and are ready to pay real TRX fees. A fee limit is a maximum cap, **not a prediction of actual fees**. Never sign a transaction you do not understand.

See the [TRON deployment guide](https://developers.tron.network/docs/deploying).

## Phase 3 — receive in Trust Wallet

1. Open Trust Wallet → Manage/import custom crypto → select **Tron (TRC20)**.
2. Paste **your new deployed FUSDTDEMO contract address**, NOT the official Tether address.
3. Confirm the token metadata reads `Flash USDT Demo - NOT TETHER`, `FUSDTDEMO`, 6 decimals. If metadata differs, stop and investigate.
4. Use the **TRON address** of the receiving Trust Wallet account; keep sufficient TRX available in the sending account for transaction fees.
5. Send a **small number of demo tokens first**, then look up the TXID on [TRONSCAN](https://tronscan.org/) and inspect the token transfer and contract address.
6. Never mistake a successful token transfer for a USD-equivalent asset.

## Real USDT comparison

Official USDT on TRON: `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`. Compare token contract addresses, not logos, screenshots, transaction-status badges, or token names.

**No private keys or seed phrases belong in GitHub, CI variables, or this chat.**
