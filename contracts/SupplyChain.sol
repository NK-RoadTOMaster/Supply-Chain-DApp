// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint256 id;
        string name;
        string location;
        bool isDelivered;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount = 0;

    event ProductAdded(uint256 id, string name, string location);

    function addProduct(string memory _name, string memory _location) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _location, false);
        emit ProductAdded(productCount, _name, _location);
    }

    function markAsDelivered(uint256 _id) public {
        Product storage product = products[_id];
        require(_id > 0 && _id <= productCount, "Invalid product ID");
        product.isDelivered = true;
    }
}
