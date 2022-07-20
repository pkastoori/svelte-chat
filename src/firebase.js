import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCDq9QWoeFc5gkq_Q4HL3TMrgNboBUjmmw',
  authDomain: 'svelte-chat-f99c9.firebaseapp.com',
  projectId: 'svelte-chat-f99c9',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
