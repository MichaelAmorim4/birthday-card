<template>
  <div id="app" style="background-color: #51e857;">
    <input id="button" type="button" value="Restart Confetti" @click="restartConfetti">
    <BouncingPictures style="position: absolute;"/>
    <div id="card-container">
      <div class="card">
        <img src="./assets/melody.png" alt="birthday" class="birthday">
        <div class="text">
          <BirthdayText/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BirthdayText from './components/BirthdayText.vue'
import BouncingPictures from './components/BouncingPictures.vue'
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  name: 'App',
  components: {
    BirthdayText,
    BouncingPictures
  },
  mounted() {
    this.$confetti.start();
    setTimeout(() => {
      this.$confetti.stop();
    }, 3000);
  },
  methods: {
    restartConfetti() {
      this.$confetti.start();
      setTimeout(() => {
        this.$confetti.stop();
      }, 3000);
    }
  }
}
</script>

<style>
#app {
  margin: -8px;
  width: 100vw;
  height: 100vh;
  background-color: #51e857;
}

#card-container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

#button {
  line-height: 12px;
  font-size: 8pt;
  font-family: tahoma;
  margin-top: 1px;
  margin-right: 2px;
  position:absolute;
  top:0;
  right:0;
}

.card {
  background: #fdfdfd;
  border-radius: 4px;
  height: 85vh;
  width: 80vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  overflow: hidden;
}

@media only screen and (min-width: 1000px) {
  .card {
    flex-direction: row-reverse;
  }
  .card img.birthday {
    width: 100%;
    max-width: 50vw;
    max-height: unset;
  }
}

@media only screen and (max-height: 640px) {
  .card {
    flex-direction: row-reverse;
  }
  .card img.birthday {
    width: 100%;
    max-width: 50vw;
    max-height: unset;
  }
}

img.birthday {
  max-height: 40vh !important;
  max-width: 20vw !important;
}

.text {
  padding: 1em;
}

html, body {
  height: 100%;
}

</style>
