<script>
  import { format } from 'timeago.js'

  export let message
  export let own
</script>

<style>
  .message {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .messageTop {
    display: flex;
  }

  .messageText {
    padding: 5px;
    border-radius: 20px;
    color: white;
    max-width: 500px;
    font-size: 12px;
  }

  .messageBottom {
    font-size: 10px;
    margin-bottom: 5px;
  }

  .message.own {
    align-items: flex-end;
  }

  .message .messageText {
    background-color: rgb(245, 241, 241);
    color: black;
  }
</style>

<div class="message" class:own>
  <div class="messageTop">
    <p class="messageText">{message.text}</p>
  </div>
  <div class="messageBottom">{format(message.createdAt)}</div>
</div>
