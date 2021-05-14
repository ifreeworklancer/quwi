import Vue from 'vue'
import {
  Row,
  Col,
  Icon,
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

Vue.component(Icon.name, Icon)

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
