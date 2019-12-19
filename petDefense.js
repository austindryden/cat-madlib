function petDefense(petName, villainName, adjective){
    let newString = `The ${adjective} ${petName} saved us from ${villainName}.`;
    return newString;
}

module.exports = petDefense;