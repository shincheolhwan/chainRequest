const {call, transferCoin, deployContract} = require("./function");
const constants = require('./utils/constants');
const sendTransaction = require("./function/sendTransaction");
const {formatNetChainId} = require("./utils/eth_converter");
const abiCode = require('./code/abiCode')
const {estimateGas} = require("./utils/utils");
const BigNumber = require("bignumber.js");
BigNumber.config({EXPONENTIAL_AT: 1e+9})

async function index() {
    // example for call
    // await call('allowance', [constants.USER.ADDRESS, "0x0c58258486B684538168A481E0c7636AccDD1A0B"]);
    // await call('balanceOf', ['0x2AEA5c174C993F386d8Fc5Dbd3E47C43D7f73483']);
    // await call('decimals', []);
    // await call('name', []);
    // await call('symbol', []);
    // await call('signers', []);
    // await call('netChainId', []);
    // await call('wrappedAsset', ['0x00000000000000000000000000000001000000000000000000000000000007e8', '0x00000000000000000000000000000001']);
    // await call('factory', []);
    // await call('ownerOf', [1]);

    // example for transaction
    // await transferCoin('0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a', "500000000000000000", 1);
    // await sendTransaction('transfer', ['0xe85B9fC69fE32c26eA4034445f66370104B59A32', '1000']);
    // await sendTransaction('mint', ['0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a', '1000000000000000000000000000000000000000000000']);
    // await sendTransaction('mint', ['0x358c0027e9630bCe275c7127D0F6397e054d3760', '10000000000000000000000000000000000000']);
    // await sendTransaction('transferOwnership', ['0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a']);
    // await sendTransaction('approve', ['0x512A8c74823E4333c7a81205F389204BA892005D', "0xfffffffffffffffffffffffffffff"]);
    // await sendTransaction('upgradeToAndCall', ["0x58595a1a00b165d2ea23ece62a5a9d004206a15e", "0x"]);
    // await sendTransaction('upgradeToAndCall', ["0x00696b8d23abbacee970f6bfa61e61aed544b11b", "0x"]);
    // await sendTransaction('transferOwnership', ["0x8A4F8259d3979a77fA976C2bdD7F0Fa27DD394F5"]);
    // await sendTransaction('safeTransferFrom', ['0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2', 0]);

    // example of deploy contract
    // await deployContract('state', []);
    // await deployContract('erc721', ["Whisper Mascot dNFT", "WHI", "0x9912b915b6ca02c6999a99286a1ad7652ef2032e"]);
    // await deployContract('erc20', ["EXCT", "EXCT", "0"]);
}

index();
