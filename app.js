const { ethers } = require("ethers");
const abijson = require("./init_eth.js");

const express = require("express");
const app = express();

// Auth let for views
let authorisedAccount = null;

// Dict for storing users, no DB for PoC.
let AccountsDict = {};

// Private key (mnemonic phrase) for settings view. (user)
let walletPrivateKey = "";

// User wallet
let wallet = "";

// balances
balance1 = "Loading...";
balance2 = "Loading...";
balance3 = "Loading...";
balance4 = "Loading...";
balance5 = "Loading...";

tokens1 = "Loading...";
tokens2 = "Loading...";
tokens3 = "Loading...";
tokens4 = "Loading...";
tokens5 = "Loading...";

// Init Ganache Wallet (priv key) of Rabobank and starts listening..
require("./init_ganache.js")(app);

// Front-end engine
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index", { authorised: authorisedAccount });
  console.log(AccountsDict);
});

app.get("/auth", function (req, res) {
  authorisedAccount = req.query.InputAccount;

  if (!AccountsDict[authorisedAccount]) {
    wallet = new ethers.Wallet.createRandom();
    AccountsDict[authorisedAccount] = wallet;
  }
  res.redirect("dashboard");
});

app.get("/login", function (req, res) {
  res.render("login", { authorised: authorisedAccount });
});

app.get("/settings", function (req, res) {
  if (!wallet) {
    res.redirect("login");
  } else {
    walletPrivateKey = wallet.mnemonic[Object.keys(wallet.mnemonic)[0]];
    res.render("settings", {
      authorised: authorisedAccount,
      publickey: wallet.address,
      privatekey: walletPrivateKey,
    });
  }
});

app.get("/config", function (req, res) {
  const data = JSON.stringify(AccountsDict);
  console.table(AccountsDict);

  res.render("config", { AccountsDict: data });
});

app.get("/logout", function (req, res) {
  authorisedAccount = null;
  res.redirect("/");
});

app.get("/dashboard", function (req, res) {
  if (!authorisedAccount) {
    res.render("login");
  } else {
    res.render("dashboard", { authorised: authorisedAccount });
  }
});

app.get("/available", function (req, res) {
  if (!authorisedAccount) {
    res.render("login");
  } else {
    res.render("available", {
      authorised: authorisedAccount,
      balance1: balance1 / 100000000000,
      tokens1: tokens1,
      balance2: balance2 / 100000000000,
      tokens2: tokens2,
      balance3: balance3 / 100000000000,
      tokens3: tokens3,
      balance4: balance4 / 100000000000,
      tokens4: tokens4,
      balance5: balance5 / 100000000000,
      tokens5: tokens5,
    });
  }
});

app.get("/buy", function (req, res) {
  tokenadr = req.query.token;
  percentage = req.query.percentage;

  // Ganache provider
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:7545"
  );

  const contract = new ethers.Contract(tokens1, abijson.abi, provider);
  console.log(contract);

  res.redirect("properties");
});

app.get("/properties", function (req, res) {
  if (!authorisedAccount) {
    res.render("login");
  } else {
    res.render("properties", { authorised: authorisedAccount });
  }
});
