var denom = [
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'TWENTY', value: 20 },
    { name: 'TEN', value: 10 },
    { name: 'FIVE', value: 5 },
    { name: 'ONE', value: 1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DIME', value: 0.1 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'PENNY', value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var result = { status: null, change: [] };
    var changeNeeded = cash - price;
    var register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if (register.total === changeNeeded) {
        result.status = 'CLOSED';
        result.change = cid;
        return result;
    }

    if (register.total < changeNeeded) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    var changeArray = denom.reduce(function (acc, curr) {
        var value = 0;
        while (register[curr.name] > 0 && changeNeeded >= curr.value) {
            changeNeeded -= curr.value;
            register[curr.name] -= curr.value;
            value += curr.value;
            changeNeeded = Math.round(changeNeeded * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if (changeArray.length < 1 || changeNeeded > 0) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    result.status = 'OPEN';
    result.change = changeArray;
    return result;
}
