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
    get getCity()
    {
        return this.city;
    }
    get getState()
    {
        return this.state;
    }
    get getZip()
    {
        return this.zip;
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

/**
 * Adding AddressBook to an Array
 */
let addressBookArray = new Array();

addressBookArray.push(new AddressBook("Soumya","Ranjan","Jobra","Cuttack","Odisha","753007","+91 8908641811","soumyars675@gmail.com"));
addressBookArray.push(new AddressBook("Sambit","Behera","Chowdwar","Cuttack","Odisha","754205","+91 9937410410","sambitb@gmail.com"));
addressBookArray.push(new AddressBook("Nigam","Jena","Nakhara","Bhubaneswar","Odisha","748007","+91 7008646484","nigamj@gmail.com"));
addressBookArray.push(new AddressBook("Chatur","Kanth","Marathalli","Bangalore","Karnataka","560003","+91 8287434374","chaturk@gmail.com"));

console.log(addressBookArray);

/**
 * 
 * @param {*} name 
 * @param {*} data 
 * @param {*} paramName 
 */
function searchByName(name,data,paramName) {
    addressBookArray.forEach(element => {
        if (element.getFirstName == name)
        {
            editAddressBook(element,data,paramName);
        }
    });
}

/**
 * 
 * @param {*} AddressBook 
 * @param {*} data 
 * @param {*} paramName 
 */
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

/**
 * 
 * @param {*} name 
 */
function deleteAddressBook(name)
{
    addressBookArray.forEach(element => {
        if (element.getFirstName == name)
        {
            index = addressBookArray.indexOf(element);
            addressBookArray.splice(index,1);
        }
    });
}

/**
 * Getting count of array
 */
function count(addressCount){
    return ++addressCount;
}
function getCount(){
    console.log("Contact Count: "+addressBookArray.reduce(count,0)+"\n");
}

searchByName("Soumya","+91 8249837408","phoneNo");
console.log(addressBookArray);

deleteAddressBook("Nigam");
console.log(addressBookArray);

getCount();

/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} address 
 * @param {*} city 
 * @param {*} state 
 * @param {*} zip 
 * @param {*} phoneNo 
 * @param {*} email 
 */
function addContact(firstName,lastName,address,city,state,zip,phoneNo,email){
    flag = true;
    addressBookArray.filter(element => {
        if (element.getFirstName != firstName)
            flag = false;
    });
    if (!flag)
    {
        addressBookArray.push(new AddressBook(firstName,lastName,address,city,state,zip,phoneNo,email));
    }
    else
        console.log("Contact is already present")
}

addContact("Nirmal","Barik","Nayabazar","Cuttack","Odisha","753028","+91 9774845422","nabarik@gmail.com");
console.log(addressBookArray);

/**
 * 
 * @param {*} data 
 */
function searchByCity(data){
    flag = 0;
    addressBookArray.find(element => {
        if (element.getCity == data)
        {
            console.log(element);
            flag++;
        }
    });
    if (flag == 0)
        console.log("No contacts found by this city");
}

/**
 * 
 * @param {*} data 
 */
function searchByState(data){
    flag = 0;
    addressBookArray.find(element => {
        if (element.getState == data)
        {
            console.log(element);
            flag++;
        }
    });
    if (flag == 0)
        console.log("No contacts found by this state");
}

searchByCity("Cuttack");
searchByState("Karnataka");

/**
 * 
 * @param {*} cityOrState 
 * @returns 
 */
function getCountByCityState(data){
    let count = 0;
    addressBookArray.filter(element =>element.getCity == data).forEach(element=>++count);
    addressBookArray.filter(element =>element.getState == data).forEach(element=>++count);
    return count;
}
console.log("Count in Cuttack : "+getCountByCityState("Cuttack"));
console.log("Count in Karnataka : "+getCountByCityState("Karnataka"));

/**
 * Sorting the array
 */
function sortContactsByName(){
    addressBookArray.sort();
    console.log("The sorted Address Book Person Name is: ");
    console.log(addressBookArray);
 }

sortContactsByName();
 
/**
 * 
 * @param {*} type :- firstName , city , state or zip
 */
function sortContacts(type){
    switch(type){
        case "name": addressBookArray.sort((contact1,contact2) => {
                        if (contact1.getFirstName > contact2.getFirstName) return 1;
                        else if (contact1.getFirstName < contact2.getFirstName) return -1;
                        return 0;
                        }); 
                        break;
        case "city": addressBookArray.sort((contact1,contact2) => {
                        if (contact1.getCity > contact2.getCity) return 1;
                        else if (contact1.getCity < contact2.getCity) return -1;
                        return 0;
                        }); 
                        break;
        case "state": addressBookArray.sort((contact1,contact2) => {
                        if (contact1.getState > contact2.getState) return 1;
                        else if (contact1.getState < contact2.getState) return -1;
                        return 0;
                        }); 
                        break;
        case "zip": addressBookArray.sort((contact1,contact2) => {
                            return contact1.getZip - contact2.getZip;
                        }); 
                        break;
        default: console.log("Invalid type.");
    }
}

sortContacts("city");
console.log("The sorted Address Book on City is: ");
console.log(addressBookArray);

sortContacts("state");
console.log("The sorted Address Book on State is: ");
console.log(addressBookArray);

sortContacts("zip");
console.log("The sorted Address Book on Zip Code is: ");
console.log(addressBookArray);