export function getAllOpByAccount(accountNumber: number) {
    let api = '/api/bank';
    let mak = api.concat('/' + accountNumber);
    return fetch(mak, { "method": "GET" }).then(res => res.json());
}

export function addOp(e:any, buildOp: Function) {
    return fetch('/api/bank', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(buildOp())
    }).then(res => res.json()).then(response => console.log(response));
}