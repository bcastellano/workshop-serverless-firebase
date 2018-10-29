import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true}
firestore.settings(settings)

export default firebase