const fs = require('fs');
const request = require('request-promise');

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json');


export const usersRepo = {
    getAll: () => users,
    getByToken: x => getByToken(x),
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    create,
    update,
    delete: _delete
};
    
function getByToken(token) {
    console.log('users-repo getByToken');
    // const res = request('GET', 'https://admin-api-et76x6ix4q-an.a.run.app/api/secure', {
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': 'Bearer ' + token,
    //     },
    // });
    // console.log(res.getBody())
    // return res.getBody();
    return new Promise((resolve,reject) => {
        var options = {
          url: 'https://admin-api-et76x6ix4q-an.a.run.app/api/secure',
          headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer ' + token,
          },
          method: 'GET',
          json: true
        }
    
        request(options).then((response) => {
            console.log(response);
            resolve(response);
        });    
    });

}
    
function create(user) {
    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}