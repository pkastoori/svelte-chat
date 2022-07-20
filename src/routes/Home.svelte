<script>
  import { push } from 'svelte-spa-router'
  import { onAuthStateChanged } from 'firebase/auth'
  import { signOut } from 'firebase/auth'
  import auth from '../firebase'
  import { name } from '../store/store'

  onAuthStateChanged(auth, (user) => {
    if (user) {
      name.set(user.displayName)
      push('/home')
    } else {
      push('/')
    }
  })

  const logout = () => {
    signOut(auth)
    name.set('')
    push('/')
  }

  const showChat = () => {
    const username = 'Gayatri'
    push(`/chat/${username}`)
  }
</script>

<style>
  .container {
    max-width: 1024px;
    margin: 30px auto;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    padding: 10px 30px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    background-color: #e8daa5;
    opacity: 0.6;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
  }

  button:active {
    transform: translateY(4px);
  }

  .chats {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .chat {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(149, 228, 127);
    padding: 0 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>

<div class="container">
  <section>
    <h3>Chats</h3>
    <button on:click={logout}>Logout</button>
  </section>
  <div class="chats">
    <div class="chat" on:click={showChat}>
      <img src="images/profilePic.jpg" alt="profile=pic" />
      <p>Gayatri</p>
    </div>
    <div class="chat">
      <img src="images/profilePic.jpg" alt="profile=pic" />
      <p>Pushkar</p>
    </div>
    <div class="chat">
      <img src="images/profilePic.jpg" alt="profile=pic" />
      <p>Yogeshwar</p>
    </div>
  </div>

</div>
