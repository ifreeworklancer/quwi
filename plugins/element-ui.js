import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message,
  Notification,
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
