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

    /**
     * @param {RegExp} name
     */
    set setFirstName(name)
    {
        let nameRegex=RegExp("[A-Z][a-z]{3,}$");
        if(nameRegex.test(name)){
            this.firstName = name;
        }else
            throw "FirstName "+name+" is invalid";
    }
    /**
     * @param {RegExp} name
     */
    set setLastName(name)
    {
        let nameRegex=RegExp("[A-Z][a-z]{3,}$");
        if(nameRegex.test(name)){
            this.lastName = name;
        }else
            throw "LastName "+name+" is invalid";
    }
    /**
     * @param {RegExp} address
     */
    set setAddress(address)
    {
        let addressRegex=RegExp("[A-Z][a-z]{4,}$");
        if(addressRegex.test(address)){
            this.address=address;
        }else
            throw "address "+address+" is invalid";
    }
    /**
     * @param {RegExp} city
     */
    set setCity(city)
    {
        let cityRegex=RegExp("[A-Z][a-z]{4,}$");
        if(cityRegex.test(city)){
            this.city=city;
        }else
            throw "city "+city+" is invalid";
    }
    /**
     * @param {RegExp} state
     */
    set setState(state)
    {
        let stateRegex=RegExp("[A-Z][a-z]{4,}$");
        if(stateRegex.test(state)){
            this.state=state;
        }else
            throw "state "+state+" is invalid";
    }
    /**
     * @param {RegExp} phn
     */
    set setPhoneNo(phn)
    {
        let phnRegex=RegExp("^\\++[91]+\\s+[789]\\d{9}$");
        if(phnRegex.test(phn)){
            this.phoneNo = phn;
        }else
            throw "phoneNo "+phn+" is invalid";
    }
    /**
     * @param {RegExp} email
     */
    set setEmail(email)
    {
        let emailRegex=RegExp("^[a-z0-9+_.-]+@+[a-z]+.+[a-z]+.+[a-z]$");
        if(emailRegex.test(email)){
            this.email=email;
        }else
            throw "Email "+email+" is invalid";
    }
    /**
     * @param {RegExp} zip
     */
    set setZip(zip)
    {
        let zipRegex=RegExp("^[1-9]{4,}$");
        if(zipRegex.test(zip)){
            this.zip=zip;
        }else
            throw "Zip "+zip+" is invalid";
    }

    toString(){
        return "firstName = "+this.firstName+" , secondName = "+this.lastName+" ,address = "+this.address+" ,city = "+this.city
                    +" , state = "+this.state+" , zip = "+this.zip+" ,phoneNo = "+this.phoneNo+" , email = "+this.email;
    } 
}

let addressBook1 = new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","8908641811","soumyars675@gmail.com");
console.log(addressBook1.toString());
let addressBook2 = new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","9937410410","sambitb@gmail.com");
console.log(addressBook2.toString());

try{
    addressBook1.setFirstName="soumya" // throws error because name should start with capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setLastName="ran" // throws error because name should start with capital letter & min 4 characters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setAddress="gff" // throws error because address should have min 4 letters & have a capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setCity="aaa" // throws error because city should have min 4 letters & have a capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setCity="111" // throws error because city should have string
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setState="abc" // throws error because state should have min 4 letters & have a capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="+91 94951" // throws error because phone no should have 10 digits
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="8908641811" // throws error because phone no should have country code
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="+91 6578641811" // throws error because phone no should have proper sim code
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="+91 65786418112" // throws error because phone no should have more than 10 digits
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setEmail="soumyars675"  // throws error because invalid email id of user without domain
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setEmail="Soumyars675@gmail.com"  // throws error because invalid email id of user having starting letter is capital
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setZip="400088A" //throws error because zip should not contain alphabets
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}

let addressBookArray = new Array();

addressBookArray.push(new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","8908641811","soumyars675@gmail.com"));
addressBookArray.push(new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","9937410410","sambitb@gmail.com"));

console.log(addressBookArray);