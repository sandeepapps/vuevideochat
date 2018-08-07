<template>
  <div class="home">
    <form action="#" class="join">
      <h1>Start Chatting.</h1>

      <label for="room" class="label">Room ID</label>
      <input type="text" class="input" name="room" placeholder="e.g. abc">

      <label for="name" class="label">Your Name</label>
      <input type="text" class="input" name="name" placeholder="Your Name">

      <button type="submit" class="button button--primary">
        Join
      </button>

    </form>
    {{ room }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
