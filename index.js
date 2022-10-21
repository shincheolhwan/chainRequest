const {call, transferCoin, deployContract} = require("./function");
const constants = require('./utils/constants');
const sendTransaction = require("./function/sendTransaction");
const {formatNetChainId} = require("./utils/eth_converter");
const abiCode = require('./code/abiCode')
const {estimateGas} = require("./utils/utils");

async function index() {
    // example for call
    // await call('allowance', [constants.USER.ADDRESS, constants.USER.ADDRESS]);
    // await call('balanceOf', [constants.USER.ADDRESS]);
    // await call('decimals', []);
    // await call('name', []);
    // await call('symbol', []);
    // await call('totalSupply', []);
    // await call('signers', []);
    
    // example for transaction
    // await transferCoin('0x3AECa383504A107E2A7BF66C5d1cc2e04c24B4BB', 10000000);
    // await sendTransaction('transfer', ['0x73641C1ef29880030dB90295DC6f142dD75CeeC9', "0x56bc75e2d63100000"]);
    // await sendTransaction('transferOwnership', ['0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a']);
    // await sendTransaction('approve', ['0x3D786b9c2b611352513f6694d31097cD336CC17C', "0xfffffffffffffffff"]);
    
    await deployContract('erc721', ['zalNFTToken', 'ZNT'])
    
    // const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode.gateway);
    // await deployContract('erc1967', [
    //     '0x8a9244a9fea9b988e0d79ad13bb5e1ad5e69b491',
    //     contract.methods['initialize'](formatNetChainId(1, 2023), ["0x0f39521a6Da5e0Aa11c045260d97e8f24BE1eCeD"], [], 0).encodeABI()
    // ]);
    // const abiCode = [
    //     {
    //         "inputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "approved",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "Approval",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "operator",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "approved",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "ApprovalForAll",
    //         "type": "event"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "approve",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "recipient",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "tokenURI",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "mintNFT",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "previousOwner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "OwnershipTransferred",
    //         "type": "event"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "renounceOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "safeTransferFrom",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "data",
    //                 "type": "bytes"
    //             }
    //         ],
    //         "name": "safeTransferFrom",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "operator",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "approved",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "setApprovalForAll",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "Transfer",
    //         "type": "event"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "transferFrom",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "transferOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "balanceOf",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getApproved",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "operator",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "isApprovedForAll",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "name",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "owner",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "ownerOf",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes4",
    //                 "name": "interfaceId",
    //                 "type": "bytes4"
    //             }
    //         ],
    //         "name": "supportsInterface",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "symbol",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "tokenId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "tokenURI",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ]
    // const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode.gateway);
    
    await estimateGas()
}

index();
