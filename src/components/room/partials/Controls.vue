<template>
  <ul class="controls">
      <li class="controls__item">
        <a href="#" class="controls__link" v-if="state.muted" @click.prevent="unmuteMe">
            Unmute Me
        </a>
        <a href="#" class="controls__link" v-else @click.prevent="muteMe">
            Mute Me
        </a>
      </li>
      <li class="controls__item">
        <a href="#" class="controls__link" v-if="state.paused" @click.prevent="unpauseMe">
            Unpause Video
        </a>
        <a href="#" class="controls__link" v-else @click.prevent="pauseMe">
            Pause Video
        </a>
      </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      state: 'getState'
    })
  },
  methods: {
    ...mapMutations({
      setMuted: 'setMuted',
      setPaused: 'setPaused'
    }),
    muteMe () {
      window.webrtc.mute()
      this.setMuted(true)
    },
    unmuteMe () {
      window.webrtc.unmute()
      this.setMuted(false)
    },
    pauseMe () {
      window.webrtc.pause()
      this.setPaused(true)
    },
    unpauseMe () {
      window.webrtc.resume()
      this.setPaused(false)
      this.setMuted(false)
    }
  }
}
</script>

<style lang="scss">
    .controls {
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        background-color: #9B7CA6;
        margin: 0;
        padding: 0;
        list-style-type: none;

        &__item {
            flex: 1;
            font-weight: 600;
            border-right: 1px solid #8F6C9C;
        }

        &__link {
            display: block;
            color: #fff;
            text-decoration: none;
            padding: 15px 18px;
            height: 100%;
            width: 100%;
            text-align: center;

            &:hover {
                background-color: #8F6C9C;
            }
        }
    }
</style>
