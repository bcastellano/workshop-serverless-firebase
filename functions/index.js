const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()
db.settings({ timestampsInSnapshots: true})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addTodo = functions.https.onRequest((request, response) => {
  let todo = request.query.todo

  db.collection('todos')
    .add({text: todo})
    .then(function () {
        response.json({message: 'Document added successfully'})
    })
    .catch(function (error) {
        console.error('Error removing document: ', error)
        response.json({message: 'Document added successfully'})
    })


})
