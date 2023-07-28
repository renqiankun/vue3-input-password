//index.js
import inputPassword from "./components/input-password/index.vue"; // 引入封装好的组件
import { InputPassword} from './utils/password' // utils
export { inputPassword,InputPassword } //实现按需引入*


const components = [inputPassword];
const install = function(App:any, options:any) {
	components.forEach((component) => {
		App.component(component.name,component);
	});
};

export default { install } // 批量的引入*