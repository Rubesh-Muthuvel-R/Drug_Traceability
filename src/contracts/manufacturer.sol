// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract dummy {
    uint32 batch_no = 1;
    uint32 mindex = 1;

    struct product {
        string name;
        string manufacturing_date;
        string expiry_date;
        uint32 quantity;
        uint32 mrppt;
    }

    struct details {
        string name;
        string email;
        address manufacturerid;
    }

    mapping(uint32 => product) public manufacturer;
    mapping(uint32 => details) public manufacturer_details;
    address[] manufacturers;

    function addManufacturer(address sender) public {
        int chk = 0;
        for (uint i = 0; i < totalManufacturers(); i++) {
            if (sender == manufacturers[i]) {
                chk = 1;
                break;
            }
        }
        if (chk == 0) manufacturers.push(sender);
    }

    function totalManufacturers() public view returns (uint) {
        return manufacturers.length;
    }

    function removeManufacturer(uint256 index) public {
        address temp = manufacturers[index];
        manufacturers[index] = manufacturers[totalManufacturers() - 1];
        manufacturers[totalManufacturers() - 1] = temp;

        manufacturers.pop();
    }

    event addPdt(
        string name,
        string manufacturing_date,
        string expiry_date,
        uint32 quantity,
        uint32 mrppt,
        uint32 batch
    );

    event addManu(string name, string email, address manufacturerid);

    function addProduct(
        string memory name,
        string memory manufacturing_date,
        string memory expiry_date,
        uint32 quantity,
        uint32 mrppt
    ) public {
        manufacturer[batch_no - 1] = product(
            name,
            manufacturing_date,
            expiry_date,
            quantity,
            mrppt
        );
        batch_no++;
        emit addPdt(
            name,
            manufacturing_date,
            expiry_date,
            quantity,
            mrppt,
            batch_no
        );
    }

    function addManufacturerDetails(
        string memory name,
        string memory email,    
        address manufacturerid
    ) public {
        manufacturer_details[mindex] = details(name, email, manufacturerid);
        mindex++;
        emit addManu(name, email, manufacturerid);
    }
}
