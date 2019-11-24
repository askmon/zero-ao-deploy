const firebaseAdmin = require('firebase-admin')

const { firebase: { credentials } } = require('../../config')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(credentials),
})

const verify = token => firebaseAdmin.auth().verifyIdToken(token)

module.exports = { verify }
