// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UNNY is ERC20 {
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _mint(0x73cb4083cd9F66c2c52B4B500F26b183852Ce4d1, 100000000 * 10**18);
    }
}
