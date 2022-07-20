<script>
  import { link, push } from 'svelte-spa-router'
  import auth from '../firebase'
  import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

  let user = { email: '', password: '' }
  let error = { email: '', password: '' }
  let valid = false

  onAuthStateChanged(auth, (user) => {
    if (user) {
      push('/home')
    }
  })

  const login = async () => {
    valid = true

    if (user.email.length < 1) {
      valid = false
      error.email = 'Email cannot be blank'
    } else {
      valid = true
      error.email = ''
    }

    if (user.password.length < 8) {
      valid = false
      error.password = 'Password should be atleast 8 characters'
    } else {
      valid = true
      error.password = ''
    }

    if (valid) {
      await signInWithEmailAndPassword(auth, user.email, user.password)
      push('/home')
    }
  }
</script>

<style>
  .container {
    max-width: 400px;
    margin: 120px auto;
    background-color: rgb(149, 228, 127);
    padding: 20px;
  }
</style>

<div class="container">
  <fieldset>
    <label for="email">Email</label>
    <input bind:value={user.email} type="email" name="email" id="email" />
    <p class="error">{error.email}</p>
  </fieldset>
  <fieldset>
    <label for="password">Password</label>
    <input
      bind:value={user.password}
      type="password"
      name="password"
      id="password" />
    <p class="error">{error.password}</p>
  </fieldset>
  <fieldset>
    <button type="submit" on:click={login}>Login</button>
    <p>
      Don't have an account? Create one
      <a href="/register" use:link>here</a>
    </p>
  </fieldset>
</div>
