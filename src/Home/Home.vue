<script setup lang="ts">
import Tweet from '../components/Tweet.vue';
import TweetForm from '../components/TweetForm.vue';

</script>

<template>
<TweetForm/>
  <Tweet name="Thiago" username="@ThiagoViana" avatar="src/assets/avatar.svg">
    <p>Hi, my name is Thiago Viana</p>
  </Tweet>
  <Tweet name="Ricardo" username="@RicardoViana" avatar="src/assets/avatar.svg">
    <p>Hi, my name is Ricardo Viana</p>
  </Tweet>
  <Tweet name="Thiago" username="@ThiagoViana" avatar="src/assets/avatar.svg">
    <p>Hi, my name is Thiago Viana</p>
  </Tweet>
</template>

<style>

</style>
