<script>
  import Message from '../components/Message.svelte'
  import { onMount } from 'svelte'
  import { onAuthStateChanged } from 'firebase/auth'
  import { push } from 'svelte-spa-router'
  import auth from '../firebase'
  import { name, messages } from '../store/store'

  export let params = {}
  let msgText

  function scrollDown() {
    document
      .querySelector('.chatMessageInput')
      .scrollIntoView({ behavior: 'smooth' })
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      name.set(user.displayName)
    } else {
      push('/')
    }
  })

  onMount(() => {
    scrollDown()
  })

  function sendMessage() {
    let message = {}
    message.text = msgText
    message.id = $messages.length + 1
    message.sender = $name
    message.receiver = 'abc'
    message.createdAt = Date.now()
    console.log(message)
    messages.update((currentMessages) => {
      let messageList = [message, ...currentMessages]
      return messageList
    })
    msgText = ''
  }
</script>

<style>
  .container {
    max-width: 1024px;
    margin: 30px auto;
  }

  .chatboxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .chatDetail {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    background-color: rgb(149, 228, 127);
    position: fixed;
    top: 0;
    width: 1005px;
  }

  .chatBoxTop {
    height: 100%;
    background-color: rgb(218, 218, 201);
  }

  .message {
    margin-top: 40px;
  }

  .message p {
    text-align: center;
  }

  .chatBoxBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chatMessageInput {
    width: 80%;
    height: 20px;
    padding: 20px;
    border-style: none;
    resize: none;
  }

  .chatMessageInput:focus {
    outline: none;
  }

  .chatSubmitButton {
    width: 20%;
    height: 60px;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #e8daa5;
    opacity: 0.6;
    transition: 0.3s;
  }

  .chatSubmitButton:hover {
    opacity: 1;
  }
</style>

<div class="container">
  <div class="chatboxWrapper">
    <div class="chatDetail">
      <i on class="fa fa-arrow-left fa-lg" on:click={() => push('/home')} />
      <img src="images/profilePic.jpg" alt="profile=pic" />
      <p>{params.username}</p>
    </div>
    <div class="chatBoxTop">
      <div class="message">
        {#if $messages.length === 0}
          <p>Start a conversation</p>
        {:else}
          {#each $messages as message}
            <Message {message} own={message.sender === $name} />
          {/each}
        {/if}
        <div class="end" />
      </div>
    </div>
    <div class="chatBoxBottom">
      <textarea class="chatMessageInput" bind:value={msgText} />
      <button class="chatSubmitButton" on:click={sendMessage}>Send</button>
    </div>
  </div>
</div>
