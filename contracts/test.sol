pragma solidity 0.8.10;

import "./IApeRouter02.sol";
import "./IERC20.sol";

contract ApeSwapFarm {
    IApeRouter02 apeRouter =
        IApeRouter02(0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607);

    address[] tokens = [
        0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270,
        0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063,
        0x5d47bAbA0d66083C52009271faF3F50DCc01023C
    ];

    constructor() {}

    function deposit() external payable {
        apeRouter.swapExactETHForTokens{value: msg.value}(
            msg.value,
            tokens,
            msg.sender,
            block.timestamp
        );
    }

    fallback() external payable {}
}
