
<template>
  <div>vue3+element-plus + @element-plus/icons-vue 可直接使用</div>
  <inputPassword show-password style="width: 200px;" v-model="pass" />
  <br>
  <el-button type="primary" @click="getVal">获取值</el-button>
  <br>
  <div>自定义input 需使用</div>
  <input ref="inputR" :modelValue="password" type="text">
  {{ password }}
  <br>
  <el-button @click="change">切换</el-button>
  <el-button @click="setHand">手动设置</el-button>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {ElMessage} from 'element-plus'
// inputPassword 组件， InputPassword： utils
import { inputPassword ,InputPassword} from 'vue3-input-password';
let pass = ref('222')
const getVal = ()=>{
  ElMessage.success(pass.value)
}

// 原生input
let inputR = ref()
let password = ref('')
let inputInstance:any = ''
onMounted(() => {
  inputInstance = new InputPassword(inputR.value,{
    Symbol:'*',
    callback:()=>{
      // 实时获取
      password.value = inputInstance.value
    }
  })
})

let type = 'password'
const change = ()=>{
  if(type=='password'){
    type='text'
  }else{
    type='password'
  }
  inputInstance?.$changeType(type)
}

const setHand = ()=>{
  inputInstance.$setValue('2222222222222')
}
</script>
