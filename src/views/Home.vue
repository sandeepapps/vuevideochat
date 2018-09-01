<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
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
// @ is an alias to /src
import { mapMutations } from 'vuex'
import uuid from 'uuid/v4'
import SimpleWebRTC from 'simplewebrtc'

export default {
  data () {
    return {
      room: this.$route.query.room || uuid(),
      name: ''
    }
  },
  methods: {
    ...mapMutations({
      setUserChatName: 'setUserChatName'
    }),
    join () { // set the users name and then forward us over to the chosen room
      // add validation if both the room and name have not been entered
      this.setUserChatName(this.name)

      window.webrtc = new SimpleWebRTC({
        localVideEl: '',
        remoteVideosEl: '',
        autoRequestMedia: true,
        nick: this.name
      })

      this.$router.push({
        name: 'room',
        params: {
          room: this.room
        }
      })
      // console.log(this.name);
    }
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .join {
    width: 100%;
    max-width: 400px;
  }
</style>
