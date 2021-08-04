const { ethers } = require("ethers");
const abijson = require("./init_eth.js");

module.exports = function (app) {
  let mainWalletKey = "";
  let mainWallet = "";
  const port = 1337;
  const prompt = require("prompt-sync")();

  app.listen(port, () => {
    let name = prompt.hide(
      "Before we start, please provide the private keys of your Ganache instance. Example: b9b05ee7c441c04fd8ff5f419466db03d3dcf3ee347e724e7c7ea06e266280bc :"
    );
    mainWalletKey = `${name}`;
    mainWallet = new ethers.Wallet(mainWalletKey);
    console.log(
      "\n",
      "\x1b[32m",
      "\x1b[47m",
      "✅ WALLET ADDED",
      "\x1b[0m",
      "\n"
    );
    function exportTokens() {
      console.log(mainWallet, "\n");
      let tokens1prompt = prompt("Enter contract address 1 :");
      tokens1 = `${tokens1prompt}`;
      console.log("\n", "\x1b[32m", "\x1b[47m", "✅ 1/5 Set", "\x1b[0m", "\n");

      let tokens2prompt = prompt("Enter contract address 2 :");
      tokens2 = `${tokens2prompt}`;
      console.log("\n", "\x1b[32m", "\x1b[47m", "✅ 2/5 Set", "\x1b[0m", "\n");

      let tokens3prompt = prompt("Enter contract address 3 :");
      tokens3 = `${tokens3prompt}`;
      console.log("\n", "\x1b[32m", "\x1b[47m", "✅ 3/5 Set", "\x1b[0m", "\n");

      let tokens4prompt = prompt("Enter contract address 4 :");
      tokens4 = `${tokens4prompt}`;
      console.log("\n", "\x1b[32m", "\x1b[47m", "✅ 4/5 Set", "\x1b[0m", "\n");

      let tokens5prompt = prompt("Enter contract address 5 :");
      tokens5 = `${tokens5prompt}`;
      console.log("\n", "\x1b[32m", "\x1b[47m", "✅ 5/5 Set", "\x1b[0m", "\n");
      console.log(
        "\n",
        "\x1b[32m",
        "\x1b[47m",
        "🚀 Continuing..",
        "\x1b[0m",
        "\n"
      );

      return tokens1, tokens2, tokens3, tokens4, tokens5;
    }
    exportTokens();

    console.log(
      "\n",
      "\x1b[32m",
      "\x1b[47m",
      `🚀 Rabobank PoC front-end at http://localhost:${port}`,
      "\x1b[0m",
      "\n"
    );
    console.log(
      "\n",
      "\x1b[32m",
      "\x1b[47m",
      `💾 Data displayed at http://localhost:${port}/config`,
      "\x1b[0m",
      "\n"
    );

    // Ganache provider
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:7545"
    );

    const address = mainWallet.address;

    function createContract(tokens) {
      return new ethers.Contract(tokens, abijson.abi, provider);
    }
    const contract1 = createContract(tokens1);
    const contract2 = createContract(tokens2);
    const contract3 = createContract(tokens3);
    const contract4 = createContract(tokens4);
    const contract5 = createContract(tokens5);

    const getbalance1 = async () => {
      return await contract1.balanceOf(address);
    };

    getbalance1().then(function (done) {
      balance1 = done.toString();
      return balance1;
    });

    const getbalance2 = async () => {
      return await contract2.balanceOf(address);
    };

    getbalance2().then(function (done) {
      balance2 = done.toString();
      return balance2;
    });

    const getbalance3 = async () => {
      return await contract3.balanceOf(address);
    };

    getbalance3().then(function (done) {
      balance3 = done.toString();
      return balance3;
    });

    const getbalance4 = async () => {
      return await contract4.balanceOf(address);
    };

    getbalance4().then(function (done) {
      balance4 = done.toString();
      return balance4;
    });

    const getbalance5 = async () => {
      return await contract5.balanceOf(address);
    };

    getbalance5().then(function (done) {
      balance5 = done.toString();
      return balance5;
    });
  });
};
