<script>
  import { link, push } from 'svelte-spa-router'

  const register = () => {
    push('/home')
  }
</script>

<style>
  .container {
    max-width: 400px;
    margin: 120px auto;
    background-color: rgb(149, 228, 127);
    padding: 20px;
  }

  fieldset {
    border: none;
  }

  input {
    display: block;
    margin: 8px;
    border-style: none;
    width: 90%;
    padding: 6px;
    border-radius: 2px;
  }

  input:focus {
    outline: none;
  }

  button {
    margin: 0 auto;
    padding: 10px 30px;
    font-size: 15px;
    border: none;
    display: block;
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

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>

<div class="container">
  <fieldset>
    <label for="name">Username</label>
    <input type="text" name="username" id="username" />
  </fieldset>
  <fieldset>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
  </fieldset>
  <fieldset>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
  </fieldset>
  <fieldset>
    <label for="confirrmPassword">Confirm Password</label>
    <input type="password" name="confirmPassword" id="confirmPassword" />
  </fieldset>
  <fieldset>
    <button type="submit" on:click={register}>Register</button>
    <p>
      Already have an account? Login
      <a href="/" use:link>here</a>
    </p>
  </fieldset>
</div>
