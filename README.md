# Rabobank Real Estate Ethereum PoC

This README file accompanies the code of this PoC. It will go through design choices and installation steps.

## Key Research Finds
- Rabobank's clients may or may not lose their private keys. Rabobank should be in charge of the private keys at all time. The wallet implemented should be custodial.
- Ether's (ETH or Ξ) price fluctuates considerably more against established fiat currencies. Properties should not be acquired in ETH but in USD. 
- 3rd party Ethereum providers (MetaMask, for example) should be avoided. Depending on such single points of failures for real estate transactions should be avoided.

> Full research, hosted on Notion, can be found [here](https://adaptive-afternoon-a8b.notion.site/Rabobank-Blockchain-Assignment-01cc04db97da4a7b8807844a7bea704f).
 


## Design Choices
- Custodial wallets generated after Rabobank's user login (UI with random reader login). Data is stored as a k/v pair with the Rabobank account numbers as the key, and the wallet as a value. These values are stored on Rabobank's side (custodial), and accessible when needed.
- Added 5 property contracts for the PoC
- In order to avoid payments in ETH, I have avoided the (financial) transaction  in ETH completely. The Ethereum blockchain is only being used as a ledger, to store and move percentages of properties in the form of a token.  Properties are deployed as individual ERC20 tokens through smart contracts with a supply of 100. 100 tokens = 100%. These tokens are sent to the main wallet of Rabobank. In the UI where a user can buy a share of a property, we would simply fetch the balance of a specific property token from our main wallet. By acquiring a percentage, a transaction would be initiated from the main wallet to the user’s wallet.
>Note: This does not verify on-chain that the user initiated the transaction, as the transaction is generated and initiated in the back-end by the main wallet and therefore likewise on the Ethereum blockchain. To conquer this, in a better version, we could generate a digital signature from the user along with metadata such as timestamps, a hash of a (digitally) signed contract, etc. and upload this to IPFS. After that, the CID of the metadata could be stored on chain/fed into the smart contract.

## User flow
![User flow](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c9e1dd0-bd1e-41c5-82af-8d57e000aa52/Untitled_%282%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210805T142853Z&X-Amz-Expires=86400&X-Amz-Signature=c5e5db18e3603fb3e8e9915107c416881cf4de30d8f8707c4b96a8d50618723c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled_%282%29.jpg%22)

## //TO-DO
- Initiate transactions on /available -> /properties
- Add some form of proof to transaction that it is being initiated by user.
- /properties page, list properties
- **Remove hard-coded contracts. Add loops, clean up code.**
- Store data in a DB. Currently stored in objects.
- CSS


## Installation
Install Truffle, Ganache-cli (and Node.js)
- Install [Ganache](https://www.trufflesuite.com/ganache) (used the GUI version) and launch. 
- Install Truffle
```bash
$ npm install -g truffle
```
- In project directory (deploy contracts)
```bash
$ truffle migrate --reset
```
- In project directory (deploy app)
```bash
npm install
```
```bash
node app.js
```
> Follow instructions in CLI after deploying app. Add private key of main wallet, add the 5 contract addresses of the hard coded contracts. (projectdir/contracts/). In order to log in, only fill in an account number, no regex applied, input like: '123' is sufficient. All other form values should be left empty. Make sure Ganache ports are correct in truffle-config.js and within the app source code, currently http://localhost:7545.


## Conclusion
This assignment had a time goal of 5 hours. I went beyond the 5 hours and I am not finished with the PoC. With this PoC, I expressed a portion of different qualities, but due to the 5 hour mark, not the possibility to excel in a specific quality, which I would be able to if the project has a long-term goal. For the current work, I am satisfied.

Questions? contact@ryanshahine.me
