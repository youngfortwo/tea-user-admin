var datetimeGenerator = require('tea-datetime-generator');
var token_query = require('token-query');

const accessKey="xxx";
const accessSign="xxx";
const accessTimestamp="xxx";

function generateTimestamp() {
  return Math.floor(Date.now() / 1000); // 获取当前时间的Unix时间戳（秒）
}

function login(username, password) {
  console.info('query start ' + username + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"))
  if (username === 'admin' && token === 'password') {
    var token = getTokenDetails(username,token, accessKey, accessSign, generateTimestamp())
    return { success: true, message: token };
  } 
  console.info('query: end ' + username + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"))
  return { success: false, message: 'Invalid username or password' };
}

function logout(username) {
  return { success: true, message: `User ${username} logged out successfully` };
}


function getUserById(id) {
  
  const user = users.find(user => user.id === id);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'User not found' };
  }
}

function getUserByUsername(username) {
  const user = users.find(user => user.username === username);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'User not found' };
  }
}

function getUserByEmail(email) {
  const user = users.find(user => user.email === email);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'User not found' };
  }
}

module.exports = {
  login,
  logout,
  generateTimestamp,
  getUserById,
  getUserByUsername,
  getUserByEmail
}
