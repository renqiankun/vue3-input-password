
##### 自定义密码组件 使用input type=text 代替 参考nice-pass-word，主要防止浏览器弹出记住密码
###### github: https://github.com/renqiankun/vue3-input-password

###### 引入  npm i vue3-input-password

######  1、使用引入组件
    import { inputPassword } from 'vue3-input-password';
 

######  inputPassword 为组件，项目中包含vue3+ element-plus + @lement-plus/icon-vue 则可以直接使用
     <inputPassword  v-model='passowrd' />

组件内抛出changeType('text'|'password')设置明密文，setValue(val)手动设置值

######  2、使用原生input使用InputPassword初始化（使用InputPassword则与框架无关），不要使用v-model，

    import {InputPassword} from 'vue3-input-password';
    <input ref='inputR' :modelValue='password'/>
   
      let inputInstance:any = ''
      let password = ref('')
      let inputR = ref()
      onMounted(() => {
         inputInstance = new InputPassword(inputR.value,{
            Symbol:'*',
            callback:()=>{
               // 实时获取
               password.value = inputInstance.value
            }
         })
      })

   
 ######  InputPassword 实例参数 { Symbol , callback , pattern}
    Symbol , callback , pattern [RegExp正则过滤] 默认 /([\u4e00-\u9fa5])/g 中文