const Admin = (function () {

    let admins = []

    function _addAdmin(idNumber, firstName, lastName, address, phoneNumber, position){
        
        admins.push({
            idNumber: idNumber,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber,
            position: position,
        })
       
    }

    function _returnAdmins(){
        return admins
    }

    function _changePosition(newPos){
        this.position = newPos;

    }

    return {
        addAdmin:       _addAdmin,
        admins:         _returnAdmins,
        changePosition: _changePosition,
    }

})()

module.exports = Admin;