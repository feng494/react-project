/**
 * 
 * 路由:
 * 前台路由:指的是一种映射关系,键和值的关系(key和value)
 * key(键):地址(最终在页面中生成的a标签中的href的地址)
 * value(值):组件(最终在页面中指定位置显示的组件内容)
 * 根据地址,显示对应的路由组件内容
 * 普通的组件一旦通过路由器进行注册后,那么此时的这个组件就是路由组件
 * 路由器:Router
 * BrowerRouter---路由器,最终在地址栏上是没有#
 * HashRouter----路由器,最终在地址栏上有#
 * 页面中有一个路由器就可以了,一般注册路由的时候需要有一个路由器
 * Switch----切换路由(切换路由组件)
 * Route-----注册路由(路由),path---地址,component:组件
 * path="/login" component={组件名字}
 * NavLink:链接被激活的时候,有自带的样式---最终都生成了a标签
 * Link:链接被激活的时候,没有自带的样式---最终都生成了a标签
 * Redirect---重定向地址,就会显示对应的路由组件内容
 * exact:设置是否是模糊匹配的(true:精准匹配)
 * 声明式编程:几乎不需要写js代码
 * 命令式编程:需要些一部分的js代码
 * 如果一个组件注册路由之后,那么这个组件就是路由组件,同时在该组件的props中会出现路由相关的一些属性(一些对象)
 * history:
 * match:
 * 路由跳转的时候:
 *  可以逐层的返回:有历史记录的push()
 *  可以直接返回到最外面:替换的操作replace()
 * goBack() 返回
 * 路由链接默认跳转使用的是push的方式,可以在标签内部使用replace,进行替换操作
 * 
 * 课程介绍:
 * redux
 *  1)合并reducers
 *  2)connect----不容易理解
 *  3)容器组件和UI组件
 *  4)thunk
 *  5)devtools
 * 
 *  6)高阶组件及装饰器---稍微不容易理解
 * 
 * 项目
 *  7)项目登录界面的静态页面
 * 
 * 作业: redux的内容,每天一遍,一直敲5天
 * 
 * 
 */