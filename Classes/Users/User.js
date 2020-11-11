class User {
    constructor(idNumber, firstName, lastName, address, phoneNumber){

        
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        
        
         
    }
    changeId(idNumber){
        this.idNumber= idNumber;
        return this;
    }
    changeFirstName(n){
        this.firstName = n;
        return this;
    }
    changeLastName(l){
        this.lastName = l;
        return this;
    }
    changeAddress(a){
        this.address = a;
        return this;
    }
    changePhoneNumber(p){
        this.phoneNumber = p;
        return this;
    }


    showInfo() {
        console.log(`Idnumber: ${this.idNumber}, firstname: ${this.firstName}, lastname ${this.lastName}, address: ${this.address}, phone: ${this.phoneNumber}` )
    }


}




module.exports = User