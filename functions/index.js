const cors = require('cors')({ origin: true });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const http = functions.region("asia-east2").https.onRequest;

exports.add = http((request, response) => cors(request, response, () =>
    firestore.collection('todos').doc().set({ text: request.body['text'] })
        .then(() => response.status(200).json({ status: 'success' }))
        .catch(() => response.status(200).json({ status: 'fails' }))
));

exports.get = http((request, response) => cors(request, response, () =>
    firestore.collection('todos').get()
        .then(snap => response.status(200).json(snap.docs.map(doc => doc.data())))
));
