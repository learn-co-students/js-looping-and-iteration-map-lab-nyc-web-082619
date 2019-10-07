lowerCaseDrivers = (drivers) => {
    return drivers.map( (drivers) => drivers.toLowerCase())
}

function nameToAttributes(array){
    return array.map((driver) => ({
        firstName: driver.split(" ")[0],
        lastName: driver.split(" ")[1]
    })
    )
}

function attributesToPhrase(array){
    return array.map( (driver) => (driver.name + " is from " + driver.hometown))
}
