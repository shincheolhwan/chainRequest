const {call, transferCoin, deployContract} = require("./function");
const constants = require('./utils/constants');
const sendTransaction = require("./function/sendTransaction");
const {formatNetChainId} = require("./utils/eth_converter");
const abiCode = require('./code/abiCode')
const {estimateGas} = require("./utils/utils");

async function index() {
    // example for call
    // await call('allowance', [constants.USER.ADDRESS, "0x0c58258486B684538168A481E0c7636AccDD1A0B"]);
    // await call('balanceOf', [constants.USER.ADDRESS]);
    // await call('decimals', []);
    // await call('name', []);
    // await call('symbol', []);
    // await call('totalSupply', []);
    // await call('signers', []);
    // await call('netChainId', []);
    // await call('wrappedAsset', ['0x00000000000000000000000000000001000000000000000000000000000007e8', '0x00000000000000000000000000000001']);
    // await call('factory', []);
    
    // example for transaction
    // await transferCoin('0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a', "500000000000000000", 1); // eth
    // await transferCoin('0x0aF3d9fD81Bd048dd68c6c6803dAF43A1b59D98d', "2000000000000000000000", 31); // ACRO
    await transferCoin('0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a', "2000000000000000000000000", 31); // ACRO
    // await transferCoin('0x0aF3d9fD81Bd048dd68c6c6803dAF43A1b59D98d', "1000000000000000000000", 32); // EQHUB
    // await sendTransaction('transfer', ['0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a', '3000000000000000000000']);
    // await sendTransaction('transferOwnership', ['0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a']);
    // await sendTransaction('approve', ['0x512A8c74823E4333c7a81205F389204BA892005D', "0xfffffffffffffffffffffffffffff"]);
    // await sendTransaction('upgradeToAndCall', ["0x58595a1a00b165d2ea23ece62a5a9d004206a15e", "0x"]);
    // await sendTransaction('upgradeToAndCall', ["0x00696b8d23abbacee970f6bfa61e61aed544b11b", "0x"]);
    // await sendTransaction('transferOwnership', ["0x8A4F8259d3979a77fA976C2bdD7F0Fa27DD394F5"]);
    
    // swap
    await sendTransaction('addLiquidity', ["0xB571AC756DbB2272B43A5C59a5c7f5D1295807A3", "0x0c58258486B684538168A481E0c7636AccDD1A0B", "1000000000000000000", "153264688000000000000", "900000000000000000", "143264688000000000000", "0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a", "1669957526698"]);
    // await sendTransaction('factory', []);
    
    // await sendTransaction('wrap', ["0x0000000000000000000000000000000000000001", "1114454474534715256882", '0x0000000000000000000000000000000b0000000000000000000000000000000b', "0x2AEA5c174C993F386d8Fc5Dbd3E47C43D7f73483"]);
    
    
    // await deployContract('zvengersNFT', [['0x11']])
    
    // const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode.gateway);
    // console.log(contract.methods['initialize'](formatNetChainId(1, 2024), ["0x0f39521a6Da5e0Aa11c045260d97e8f24BE1eCeD"], [], 0).encodeABI())
    // await deployContract('erc1967', [
    //     '0x58595a1a00b165d2ea23ece62a5a9d004206a15e',
    //     contract.methods['initialize'](formatNetChainId(1, 2024), ["0x0f39521a6Da5e0Aa11c045260d97e8f24BE1eCeD"], [], 0).encodeABI()
    // ]);
}

index();
