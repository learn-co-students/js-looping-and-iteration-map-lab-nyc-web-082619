function lowerCaseDrivers(drivers){
    let lower;
    lower = drivers.map(function(driver){return driver.toLowerCase()})
    return lower;
}

function nameToAttributes(drivers){
    let objects;
    objects = drivers.map(function(driver){
        const splitName = driver.split(" ");
        return Object.assign({}, { firstName: splitName[0] }, { lastName: splitName[1] })
    });
    return objects;
}

function attributesToPhrase(drivers){
    let strings;
    strings = drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    });
    return strings;
}