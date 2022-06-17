<template>
<div class="flex h-full justify-center">
  <div class="bg-birdBlue lg:flex-1"></div>
  
  <div class=" flex-1 flex flex-col justify-center items-center p-8 space-y-6">
    <h1 class="text-3xl">Acesse sua conta</h1>

    <form class="space-y-6" @submit="onSubmit">
      <input 
        v-model="email"
        type="text"
        name="email" 
        class="
          w-full 
          bg-transparent
          p-4 border 
          rounded-xl 
          border-onix 
          outline-none 
          text-lg 
          focus:border-platinum" 
          
        placeholder="E-mail"
      />
      <span class="text-red-700" v-if="emailError">{{emailError}}</span>

      <input 
        v-model="password"
        type="password"
        name="password" 
        class="
          w-full
          bg-transparent
          p-4
          border
          rounded-xl
          border-onix
          outline-none 
          text-lg 
          focus:border-platinum" 

       placeholder="Senha"/>
      <span class="text-red-700" v-if="passwordError">{{passwordError}}</span>

      <button type="submit" :disabled="!meta.valid || isSubmitting" 
        class="bg-birdBlue  py-4 rounded-full disabled:opacity-50 w-full text-lg">{{isSubmitting ? 'Entrando...' : 'Entrar'}}</button>
    </form>
    <span class="text-sm text-silver">Não tem conta? <a class="text-birdBlue" href="/signup">Inscreva-se</a></span>
  </div>
</div>
 
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import * as yup from 'yup'
import { setLocale } from 'yup';
import { useField, useForm, useIsFieldDirty, useIsFieldValid} from 'vee-validate';
import axios from 'axios'

export default defineComponent({
  emits:['signInUser'],
  setup(props,{ emit }){

    const isValid = useIsFieldValid();
    const isDirty = useIsFieldDirty();

    const schema = yup.object().shape({
      email: yup.string().required('Digite seu email').email('E-mail inválido'),
      password: yup.string().min(6,"Mínimo de 8 caractéres").required('Digite sua senha'),

    });

    const {isSubmitting, meta, handleSubmit } = useForm({
      validationSchema: schema,

    });

    const onSubmit = handleSubmit( async values => {
      const res = await axios.get('http://localhost:9000/login', {
        auth: {
          username:values.email,
          password:values.password
        }
      })

      emit('signInUser', res.data)

    })
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');

    return{
      isSubmitting,
      meta,
      isValid,
      isDirty,
      onSubmit,
      email,
      emailError,
      password,
      passwordError,
    }
  }

})
</script>

<style scoped>

</style>