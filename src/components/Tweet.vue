<template>
  <div class="flex space-x-3 p-4 border-b border-silver">
    <div>
      <img :src="avatar" alt="">
    </div>
    <div>
      <span class="font-bold text-sm">{{name}}</span>{{''}}
      <span class="text-sm text-silver">{{username}}</span>

      <slot></slot>

     <div class="flex space-x-1 text-silver text-sm items-center "> 
        <HeartIcon class="w-6 stroke-silver stroke-1"/>
      <span>1.2k</span>
     </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { HeartIcon } from '@heroicons/vue/outline'
export default defineComponent({
  components:{
    HeartIcon
  },
  props:{
    name:{
      type:String,
      required:true,
    },
    username:{
      type:String
    },
    avatar:{
      type:String
    },
  },
  setup(){
    return{}
  }

})
</script>

<style>

</style>