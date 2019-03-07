import firebase from 'firebase';

const firestore = firebase.firestore();

function filter() {
    return true;
}

function renderEntry(doc) {

}

function showList(snap) {
    snap.filter(filter)
        .forEach(renderEntry)
        .join('');
}

firestore.collection('attendance')
    .onSnapshot((snap) => {
        showList(snap)
    });
