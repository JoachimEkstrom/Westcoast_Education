const Admin = function () {

    function _addAdmin(idNumber, firstName, lastName, address, phoneNumber, position){
        
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        
        this.position = position;
    }
    function _changePosition(newPos){
        this.position = newPos;

    }

    return {
        addAdmin:       _addAdmin,
        changePosition: _changePosition,
    }

}

module.exports = Admin;