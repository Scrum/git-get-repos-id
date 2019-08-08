const get = require('./index.js').default;

get({owner: 'post', repo: 'post-stati', token: 'aecc9302275a1ce1083ecd2da01f2c23beba1381'}).then(console.log)