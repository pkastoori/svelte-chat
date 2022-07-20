<script>
  import { link, push } from 'svelte-spa-router'
  import auth from '../firebase'
  import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
  } from 'firebase/auth'

  let user = { username: '', email: '', password: '', confirmPassword: '' }
  let error = { username: '', email: '', password: '', confirmPassword: '' }
  let valid = false

  onAuthStateChanged(auth, (user) => {
    if (user) {
      push('/home')
    }
  })

  const register = async () => {
    valid = true

    if (user.username.length < 1) {
      valid = false
      error.username = 'Username cannot be blank'
    } else {
      valid = true
      error.username = ''
    }

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

    if (
      user.confirmPassword.length < 8 ||
      user.confirmPassword !== user.password
    ) {
      valid = false
      error.confirmPassword = 'Passwords do not match'
    } else {
      valid = true
      error.confirmPassword = ''
    }

    console.log(valid)

    if (valid) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      )
      await updateProfile(userCredential.user, { displayName: user.username })
      push('/home')
    }
  }
</script>

<style>
  .container {
    max-width: 400px;
    margin: 40px auto;
    background-color: rgb(149, 228, 127);
    padding: 20px;
  }
</style>

<div class="container">
  <fieldset>
    <label for="name">Name</label>
    <input
      bind:value={user.username}
      type="text"
      name="username"
      id="username" />
    <p class="error">{error.username}</p>
  </fieldset>
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
    <label for="confirrmPassword">Confirm Password</label>
    <input
      bind:value={user.confirmPassword}
      type="password"
      name="confirmPassword"
      id="confirmPassword" />
    <p class="error">{error.confirmPassword}</p>
  </fieldset>
  <fieldset>
    <button type="submit" on:click={register}>Register</button>
    <p>
      Already have an account? Login
      <a href="/" use:link>here</a>
    </p>
  </fieldset>
</div>
