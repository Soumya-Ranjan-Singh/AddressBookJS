class AddressBook{
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    toString(){
        return "firstName = "+this.firstName+" , secondName = "+this.lastName+" ,address = "+this.address+" ,city = "+this.city
                    +" , state = "+this.state+" , zip = "+this.zip+" ,phoneNo = "+this.phoneNo+" , email = "+this.email;
    } 
}

let addressBook1 =new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","8908641811","soumyars675@gmail.com");
console.log(addressBook1.toString());
let addressBook2 =new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","9937410410","sambitb@gmail.com");
console.log(addressBook2.toString());