<template>
  <div class="border-b border-silver p-4 space-y-6">
   <div class="flex  space-x-5">
     <img src="../assets/avatar.svg" class="w-7" alt="">
     <h1 class="font-bold text-xl">Página Inicial</h1>
   </div>

   <form class="pl-12 text-lg flex flex-col" >
     <textarea 
        placeholder="O que está acontecendo?" 
        type="text" 
        name="text" 
        v-model="text"
        class="outline-none bg-transparent disabled:opacity-50"
      />
      
   </form>

   <div class="flex justify-end items-center space-x-3">
     <span class="text-sm ">
       <span>{{text.length}}</span> / <span class="text-birdBlue">{{MAX_TWEET_LENGTH}}</span>
       </span> 
     <button 
        class="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50" 
        :disabled="text.length > MAX_TWEET_LENGTH"
      >
        Tweet
      </button>
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components:{
  },
  props:{
  
  },
  setup(){
    const MAX_TWEET_LENGTH = 250;
    
    const text = ref("");


    function changeText(e){
     
    }

    return{
      text,
      MAX_TWEET_LENGTH,
    }
  }

})
</script>

<style>

</style>