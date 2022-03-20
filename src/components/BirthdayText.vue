<template>
  <div class="hello">
    <h1>Happy 22<span class="ordinal">nd</span> Birthday Karen</h1>
    <h2>I hope you have an amazing birthday<br>as well as a wonderful year!! 😸😸</h2>
    <h3 style="width: 60%; margin-left: auto; margin-right: auto;">
      You bring people joy and entertainment with your amazing personality<br>
      and overall atmosphere you bring to everything you do. I am excited to see<br>
      where this year takes you and how you are going to make it better for everyone around you!<br>
    </h3>
    <h3 style="width: 60%; margin-left: auto; margin-right: auto;">
      I look forward to witnessing everything you are going to do and building upon this friendship!
      Hopefully we can get to know each other more this year and do more things together; both online and in person.
      I wish you all the best and I hope you have a wonderful day and rest of your year!
    </h3>
    <img :src="'../bunni_dab.png'" style="margin-top: 10px"/>
    <img :src="'../bunni_heart.png'" style="margin-top: 10px"/>
    <img :src="'../bunni_dab.png'" style="margin-top: 10px"/>
  </div>
</template>

<script>
export default {
  name: 'BirthdayText',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.ordinal {
  vertical-align:super;
  font-size: medium;
}

h1 {
  background-image: linear-gradient(-45deg, #cc2b5e, #fdfdfd, #FF0099, #fa431a) !important;
  background-size: 400% !important;
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-animation: Gradient 10s ease infinite !important;
  -moz-animation: Gradient 10s ease infinite !important;
  animation: Gradient 10s ease infinite !important;
  font-size: calc(16px + 6 * ((300vw - 320px) / 680));
  font-family: 'Pacifico', cursive;
}

@-webkit-keyframes Gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}}

@-moz-keyframes Gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}}

@keyframes Gradient { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}}
</style>
