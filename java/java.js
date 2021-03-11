function nhietDoC (doC) {
    return (doC * 1.8) + 32 + "°F";
}

console.log(nhietDoC(20));

function nhietDoF (doF) {
    return (doF - 32) / 1.8 + "°C" ;
}

console.log(nhietDoF(68));

function ngoaiTeUsd (Usd) {
    return ( Usd + " usd" + " là " + Usd * 23000 + " VND ");
}

console.log (ngoaiTeUsd(2));

function ngoaiTeEuro (Euro) {
    return ( Euro + " euro" + " là " + Euro * 27500 + " VND ") ;
}

console.log(ngoaiTeEuro(5))

function ngoaiTeVnd (Vnd) {
    return ( Vnd + " bằng " + Vnd / 23000 + " usd" + " và " + Vnd / 27500 + " Euro" );
}
console.log(ngoaiTeVnd(30000));

function theKy (year) {
    return Math.floor( year / 100 + 1);
}
console.log(theKy(1940));