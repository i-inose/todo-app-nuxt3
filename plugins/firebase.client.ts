import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Auth のインポートを追加
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  // Firebaseの設定情報
  const firebaseConfig = {
    apiKey: "AIzaSyA9tcEL_HuzPidzCPcVOSG1KVStg3jfvfM",
    authDomain: "todo-app-96dbd.firebaseapp.com",
    projectId: "todo-app-96dbd",
    storageBucket: "todo-app-96dbd.appspot.com",
    messagingSenderId: "365355203679",
    appId: "1:365355203679:web:23309ba21353902a52efea"
  };

  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const firestore = getFirestore();
  const auth = getAuth();

  return {
    provide: {
      firestore,
      auth
    },
  };
});
