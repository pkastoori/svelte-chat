<script>
  import Message from '../components/Message.svelte'
  import { onMount } from 'svelte'
  export let params = {}
  function scrollDown() {
    document.querySelector('.end').scrollIntoView({ behavior: 'smooth' })
  }

  onMount(() => {
    scrollDown()
  })
</script>

<style>
  .container {
    max-width: 1024px;
    margin: 30px auto;
  }

  .chatboxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .chatDetail {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    background-color: rgb(149, 228, 127);
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .chatBoxTop {
    height: 525px;
    overflow-y: scroll;
    position: relative;
    background-color: rgb(218, 218, 201);
  }

  .chatBoxBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(142, 142, 29);
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
    border-radius: 5px;
    cursor: pointer;
    background-color: teal;
    color: white;
  }
</style>

<div class="container">
  <div class="chatboxWrapper">
    <div class="chatDetail">
      <img src="images/profilePic.jpg" alt="profile=pic" />
      <p>{params.username}</p>
    </div>
    <div class="chatBoxTop">
      <div class="message">
        <Message />
        <div class="end" />
      </div>
    </div>
    <div class="chatBoxBottom">
      <textarea class="chatMessageInput" />
      <button class="chatSubmitButton">Send</button>
    </div>
  </div>
</div>
