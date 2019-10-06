
const drivers = [];

function lowerCaseDrivers(driversArr) {
    return driversArr.map( d => d.toLowerCase());
}

function nameToAttributes(driversArr) {
    return driversArr.map(driver => {
        let parts = driver.split(' ');
        return {firstName: parts[0], lastName: parts[1]}
    });
}

function attributesToPhrase(driversArr) {
    return driversArr.map(driver => `${driver.name} is from ${driver.hometown}`);
}