# Workshop: Serverless with Firebase
This is a basic workshop about serverless using Google Firebase.

## Tools to Install
For this workshop we are going to need these software installed:
 - npm & node
 - yarn
 - npm package firebase-tools: `npm install -g firebase-tools`

## 1. Create Firebase account 
 - Go to 'https://firebase.google.com/' create account & project

## 2. Configure Firebase in project
 - `firebase login` and login with account created previously.
 - `npx create-react-app serverless-firebase`
 - `cd serverless-firebase`
 - `firebase init` Firestore + Functions + Hosting

## 3. Firestore database
 - Install npm package `npm install --save firebase`
 - List action
 - Add and Remove actions
 - Publish app `firebase deploy --only hosting`

## 4. Firebase Auth
 - Change database access in `firestore.rules`
 - Configure google provider
    
## 5. Firebase Cloud Functions
 - Create function and test it with `npm run serve`
 - Publish app `firebase deploy --only functions`