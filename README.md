## react 教学demo
## 相关笔记
 - 生命周期函数就是在某一时刻组件会自动执行的函数
 - 生命周期函数分为四大部分：initialization mount updation unmount
 - 1. componentWillMount  当组件将要挂载到页面时会自动调用执行的函数
 - 2.componentDidMount:组件已经被挂载到页面时执行的函数   
 （1和2只是组件在第一次挂载页面时会执行，后期将不再执行，render会执行多次）
 - 3.shouldComponentUpdate 组件在更新之前会主动执行的函数，返回true则表示重新渲染，返回false表示不需要重新渲染组件
 - 4.componentWillUpdate  组件将要被更新时执行的函数，他是在shouldComponentUpdate返回为true才会执行
 - 5.componentDidUpdate 组件已经被更新后执行的函数
 - 6. componentWillRecieveProps 组件将要接收props时执行的函数
