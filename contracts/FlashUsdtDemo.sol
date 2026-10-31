// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {TRC20} from "@openzeppelin/tron-contracts/token/TRC20/TRC20.sol";

/// @notice Educational TRC20 demonstration token. NOT issued by Tether.
/// @dev 1,000,000 whole demo tokens with 6 decimals. No additional minting.
contract FlashUsdtDemo is TRC20 {
    constructor() TRC20("Flash USDT Demo - NOT TETHER", "FUSDTDEMO") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }
}
