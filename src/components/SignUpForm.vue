<template>
  <div class="home">
    <form action="#" class="join" @submit.prevent="join">
      <h1>Start Chatting.</h1>

      <label for="room" class="label">Room ID</label>
      <input type="text" class="input" name="room" placeholder="e.g. abc" v-model.trim="room">

      <label for="name" class="label">Your Name</label>
      <input type="text" class="input" name="name" placeholder="Your Name" v-model.trim="name">

      <button type="submit" class="button button--primary">
        Join
      </button>

    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import uuid from 'uuid/v4'

export default {
  name: 'Home',
  data () {
    return {
      room: uuid(),
      name: '',
    }
  },
  methods: {
    ...mapMutations({
      setUserChatName: 'setUserChatName'
    }),
    join() {// set the users name and then forward us over to the chosen room
      //add validation if both the room and name have not been entered
      this.setUserChatName(this.name);
      this.$router.push({
        name: 'room',
        params: {
          room: this.room
        }
      });
      // console.log(this.name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
