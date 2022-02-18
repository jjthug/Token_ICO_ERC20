// const Token = artifacts.require("Token");
// const { assert } = require('chai');
// const truffleAssert = require('truffle-assertions');
// const { expect } = require("chai");
// const { ethers } = require("hardhat");
// //[25,25,25,25], [0,0,0,100], [30,30,0,40], [50,0,0,50]

// describe('MovieCoin', (accounts) => {
//     let token, balance;
    
//     before(async function () {
//         accounts = await web3.eth.getAccounts();
//         token = await Token.new("TestToken", "TST", 18, 5, "100000", true, "50000",
//          accounts[0], [accounts[1], accounts[2], accounts[3], accounts[4]], [0, 0, 0, 100]);
//     });

//     it('transfers correct', async() =>{
//         let totalGas = 0;

//         let resp = await token.transfer(accounts[5], "10000000000000000000000", {from: accounts[0]}); //10000 = 10000000000000000000000
//         console.log("[25,25,25,25]");
//         totalGas += resp.receipt.gasUsed;
//         console.log("transfer 1 gas: ", resp.receipt.gasUsed);
//         resp = await token.transfer(accounts[6], "1000000000000000000000", {from: accounts[5]}); //1000 = 1000000000000000000000
//         console.log("transfer 2 gas: ", resp.receipt.gasUsed);
//         resp = await token.transfer(accounts[6], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 3 gas: ", resp.receipt.gasUsed);
//         await token.changeTaxPercentages([0,0,0,100], {from:accounts[0]});


//         console.log("[0,0,0,100]");
//         await token.changeTaxPercentages([0,0,0,100], {from:accounts[0]});
//         resp = await token.transfer(accounts[7], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 2 gas: ", resp.receipt.gasUsed);
//         resp = await token.transfer(accounts[7], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 3 gas: ", resp.receipt.gasUsed);
//         await token.changeTaxPercentages([30,30,0,40], {from:accounts[0]});


//         console.log("[30,30,0,40]");
//         await token.changeTaxPercentages([30,30,0,40], {from:accounts[0]});
//         resp = await token.transfer(accounts[8], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 2 gas: ", resp.receipt.gasUsed);
//         resp = await token.transfer(accounts[8], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 3 gas: ", resp.receipt.gasUsed);
//         await token.changeTaxPercentages([50,0,0,50], {from:accounts[0]});


//         console.log("[50,0,0,50]");
//         await token.changeTaxPercentages([50,0,0,50], {from:accounts[0]});
//         resp = await token.transfer(accounts[9], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 2 gas: ", resp.receipt.gasUsed);
//         resp = await token.transfer(accounts[9], "1000000000000000000000", {from: accounts[5]});
//         console.log("transfer 3 gas: ", resp.receipt.gasUsed);


//     })

//     it('total supply equal to sum of all balances', async() =>{

//         let totalSupply = await token.totalSupply();
//         let temp;
//         assert.equal(totalSupply, "10000000000000");
//         let sum = 0;
//         for(let i =0; i< 10; i++)
//         {
//             temp = await token.balanceOf(accounts[i]);
//             sum += temp.toNumber();
//         }
//         assert.equal(sum, "10000000000000");

//     })

// })
