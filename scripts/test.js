// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
let params = require("../constructor_input");
let input = require("./inputs");

async function main() {

  // const theContract = await hre.ethers.getContractAt("Token", 0x87b43AeFB13B47a76706be6bE32116f1e694922B);
  const Box = await ethers.getContractFactory('Token');
  // const box = await Box.attach('0x13e3ffFf1c8E3d8492b0A70207a4d02aA0a8d37b') //bsctest
  const box = await Box.attach('0x649e38E6A81EF2eCE53d226B80466DBAef01De32') //rinkeby

  
  
  const arr_amount = []
  const arr_users = []

  // const n = 1773;//bsctest
  const n = 2042; //rinkeby

  for(let i =0;i<n;i++){
    arr_users[i] = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    arr_amount[i] = "5000000000000000";
}

  await box.multiSend(arr_users, arr_amount, "5000000000000000000");
  // await box.transfer("0x60C1F061B4fd365389dEFa3596FfFC8749D83b3B", "5000000000000000");



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });