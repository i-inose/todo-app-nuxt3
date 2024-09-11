import { ref } from 'vue';
import { useNuxtApp, useState } from '#app';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Taskの型定義
interface Task {
  id: string;
  content: string;
}

const tasks = ref<Task[]>([]);

export const useTask = () => {
  const { $firestore, $auth } = useNuxtApp();
  const newTask = useState<string>('newTask', () => '');

  const waitAuthState = (): Promise<firebase.User | null> => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged($auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  };

  const getTasks = async () => {
    const user = await waitAuthState();
    if (user) {
      const querySnapshot = await getDocs(collection($firestore, `users/${user.uid}/tasks`));
      tasks.value = querySnapshot.docs
        .map(doc => ({
          timestamp: doc.data().timestamp,
          content: doc.data().content,
          id: doc.id
        }));

      // タイムスタンプで新しい順にソート
      tasks.value.sort((a, b) => b.timestamp - a.timestamp);
    }
};

  const addTask = async () => {
    const trimmedTask = newTask.value.trim();
    const user = getAuth().currentUser;
    if (trimmedTask && user) {
      const docRef = await addDoc(collection($firestore, `users/${user.uid}/tasks`), {
        content: trimmedTask,
        userId: user.uid,
        timestamp: serverTimestamp(),
      });
      tasks.value.push({ id: docRef.id, content: trimmedTask });
      newTask.value = '';
    }
  };

  const removeTask = async (taskId: string) => {
    const user = await waitAuthState();
    if (user) {
      await deleteDoc(doc($firestore, `users/${user.uid}/tasks`, taskId));
      tasks.value = tasks.value.filter(task => task.id !== taskId);
    }
  };

  // 初期化時にタスクを取得
  if (process.client) {
    getTasks();
  }

  return { newTask, tasks, addTask, removeTask };
};

// ユーザーのトークンを保持する
export const useToken = (): globalThis.Ref<string | null> =>
  useState<string | null>('token', () => null);

// 認証機能の型定義
type Auth = {
  token: globalThis.Ref<string | null>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkAuthState: () => void;
  signInWithGoogle: () => Promise<void>;
};

export const useAuth = (): Auth => {
  const { $auth } = useNuxtApp();
  const token = useToken();

  // 認証状態を確認する
  const checkAuthState = (): void => {
    onAuthStateChanged($auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        token.value = idToken;
      } else {
        token.value = null;
      }
    });
  };

  // サインアウト処理
  const signOut = async (): Promise<void> => {
    await firebaseSignOut($auth);
    token.value = null;
  };

  // Googleでサインイン
  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup($auth, provider);
    const idToken = await userCredential.user.getIdToken();
    token.value = idToken;
  };

  return {
    token,
    checkAuthState,
    signOut,
    signInWithGoogle,
  };
};
