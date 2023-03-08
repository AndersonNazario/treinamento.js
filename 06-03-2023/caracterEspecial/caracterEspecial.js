let str = '$Ailuropoda@ melanoleuca!';
//str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
//str = str.replace(/[àáâãäå]/g, "a");
//str = str.replace(/[ÈÉÊË]/g, "E");
console.log(str.replace(/[^a-zA-Z\s]/g, ""));