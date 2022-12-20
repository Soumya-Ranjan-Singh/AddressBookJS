class AddressBook{

    /**
     * Parameters
     */
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    /**
     * 
     * @param  {...any} params for parameterized Constructor
     */
    constructor(...params)
    {
        this.setFirstName = params[0];
        this.setLastName = params[1];
        this.setAddress = params[2];
        this.setCity = params[3];
        this.setState = params[4];
        this.setZip = params[5];
        this.setPhoneNo = params[6];
        this.setEmail = params[7];
    }

    /**
     * All Getter methods @returns types
     */

    get getFirstName()
    {
        return this.firstName;
    }


    /**
     * All setter methods
     * @param {RegExp} name
     * @param {string | ((arg0: any) => void)} firstName
     */
    set setFirstName(firstName)
    {
        let nameRegex=RegExp("[A-Z][a-z]{3,}$");
        if(nameRegex.test(firstName)){
            this.firstName = firstName;
        }else
            throw "FirstName "+firstName+" is invalid";
    }
    /**
     * @param {RegExp} name
     * @param {string | ((arg0: any) => void)} lastName
     */
    set setLastName(lastName)
    {
        let nameRegex=RegExp("[A-Z][a-z]{3,}$");
        if(nameRegex.test(lastName)){
            this.lastName = lastName;
        }else
            throw "LastName "+lastName+" is invalid";
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
        let cityRegex=RegExp("^[A-Z][a-z]{4,}$");
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
     * @param {RegExp} zip
     */
    set setZip(zip)
    {
        let zipRegex=RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
        if(zipRegex.test(zip)){
            this.zip=zip;
        }else
            throw "Zip "+zip+" is invalid";
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
     * 
     * @returns toString()
     */
    
    toString(){
        return "firstName = "+this.firstName+" , secondName = "+this.lastName+" ,address = "+this.address+" ,city = "+this.city
                    +" , state = "+this.state+" , zip = "+this.zip+" ,phoneNo = "+this.phoneNo+" , email = "+this.email;
    } 
}


let addressBook1 = new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","+91 8908641811","soumyars675@gmail.com");
console.log(addressBook1.toString());
let addressBook2 = new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","+91 9937410410","sambitb@gmail.com");
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

addressBookArray.push(new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","+91 8908641811","soumyars675@gmail.com"));
addressBookArray.push(new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","+91 9937410410","sambitb@gmail.com"));
addressBookArray.push(new AddressBook("Nigam","Jena","Nakhara","Bhubaneswar","Odisha","748007","+91 7008646484","nigamj@gmail.com"));

console.log(addressBookArray);

function searchByName(name,data,paramName) {
    addressBookArray.forEach(element => {
        if (element.getFirstName == name)
        {
            editAddressBook(element,data,paramName);
        }
    });
}

function editAddressBook(addressBook,data,paramName)
{
    if (paramName == "firstName")
        addressBook.setFirstName = data;
    else if (paramName == "lastName")
        addressBook.setFirstName = data;
    else if (paramName == "address")
        addressBook.setAddress = data;
    else if (paramName == "city")
        addressBook.setCity = data;
    else if (paramName == "state")
        addressBook.setState = data;
    else if (paramName == "zip")
        addressBook.setZip = data;
    else if (paramName == "phoneNo")
        addressBook.setPhoneNo = data;
    else if (paramName == "email")
        addressBook.setEmail = data;
}

function deleteAddressBook(name)
{
    addressBookArray.forEach(element => {
        if (element.getFirstName == name)
        {
            index = addressBookArray.indexOf(element);
            addressBookArray.splice(index);
        }
    });
}

searchByName("Soumya","+91 8249837408","phoneNo");
console.log(addressBookArray);

deleteAddressBook("Nigam");
console.log(addressBookArray);