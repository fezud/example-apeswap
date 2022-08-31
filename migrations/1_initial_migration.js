const ApeSwapFarm = artifacts.require("ApeSwapFarm");
const IERC20 = artifacts.require("IERC20");

const maticAddress = "0x0000000000000000000000000000000000001010";
const bananaAddress = "0x5d47bAbA0d66083C52009271faF3F50DCc01023C";

const accountAddress = "0x1aBb7525470026f4CCaF404Dfb6e0f3F56f593Bc";

module.exports = async function (deployer, accounts) {
  await deployer.deploy(ApeSwapFarm);

  const maticToken = await IERC20.at(maticAddress);
  const bananaToken = await IERC20.at(bananaAddress);

  const apeSwapFarm = await ApeSwapFarm.deployed();

  let maticBalance = await maticToken.balanceOf(accountAddress);
  let bananaBalance = await bananaToken.balanceOf(accountAddress);

  console.log(`ACCOUNT (Initial) Matic: ${maticBalance}, Banana: ${bananaBalance}`);

  await apeSwapFarm.deposit({ from: accountAddress, value: 1000 }); //value - amount of MATIC sent with transaction

  maticBalance = await maticToken.balanceOf(accountAddress);
  bananaBalance = await bananaToken.balanceOf(accountAddress);

  console.log(`ACCOUNT (After deposit) Matic: ${maticBalance}, Banana: ${bananaBalance}`);
};
