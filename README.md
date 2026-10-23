# TRON TRC-20 Token Example — Learning Repository

**Important:** The repository name is historical. This code demonstrates a **custom learning token named MyToken (MTK)**. It is **not USDT, not Tether, not an official stablecoin**, and has no relationship with Tether or any issuer of a stablecoin. **Do not deploy or use with real funds without security review.**

中文说明：本仓库仅用于 Solidity / TronBox 的区块链智能合约学习。合约代币名称为 `MyToken`，代号 `MTK`。它**不是官方 USDT，不代表 Tether 官方项目，也不提供稳定币兑换或金融服务**。

## Contents

- [`MyToken.sol`](MyToken.sol) — teaching example with balances, allowances, transfers, and approval events; not a verified production token implementation
- [`_deploy_contracts.js`](_deploy_contracts.js) — TronBox deployment migration
- [`tronbox.js`](tronbox.js) — sample Shasta testnet configuration, including a placeholder private key that must **never** be replaced with a real credential in Git

## Intended use

This repository is a small, unreviewed demonstration. It does not establish contract security, compatibility with all token standards, successful testnet deployment, or commercial experience.

### Safer deployment hygiene

For experimentation, use testnet-only wallets with no meaningful assets, keep all signing keys in local environment variables or a dedicated secret manager, and never commit mnemonic phrases or private keys.

## Relevant Python automation work

My main GitHub engineering portfolio focuses on Python automation and test development:

- [Python Automation — API Checks & CI](https://github.com/xiaowang1688/python-automation-starter)
- [Security automation with Mythril and Python](https://github.com/xiaowang1688/smart-contract-vulnerability-scanner)
- [Portfolio overview](https://github.com/xiaowang1688/python-automation-starter/blob/main/PORTFOLIO.md)
