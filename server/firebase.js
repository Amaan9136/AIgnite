import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyABZK_vwVTkX6hPuNbKp6v5zNdAFKuNih0",
  databaseURL: "https://my-project-2-b44b4-default-rtdb.firebaseio.com/",
};

// Firebase initialization
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
