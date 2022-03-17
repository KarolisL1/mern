const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

//return a new user
app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.json({user})
})

//return a new company
app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.json({company})
})

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.json({user, company})
})



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
