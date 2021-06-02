# Uniswap Mainnet Fork Environment

Uses hardhat to create a mainnnet fork and transfer 11 million UNI token to your address for testing.

## Configuration

Rename `_cfg.json` to `cfg.json`

```
{
    "testAccountAddress": "", // The account you want to receive the UNI tokens at
    "archiveNodeEndpoint": "" // The endpoint of an archive node (Recommended: Alchemy)
}
```

## Commands

Running mainnet fork: `npx hardhat node`

Transferring UNI token: `npx hardhat run scripts/transfer-uni.js`
