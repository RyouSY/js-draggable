//获取容器
const box = document.querySelector('.items-list');
//保存当前拖拽的元素
let sourceNode

//拖拽开始
box.ondragstart = (e) => {
  //延迟执行，避免拖拽开始时，元素被隐藏
  setTimeout(() => {
    //添加移动样式
    e.target.classList.add('move');
  }, 0);
  //保存当前拖拽的元素
  sourceNode = e.target
}

//拖拽进入
box.ondragenter = (e) => {
  //拖拽元素自身或容器，不执行
  if (e.target === sourceNode || e.target === box) return
  //获取容器下的所有元素
  const children = [...box.children]
  //获取拖拽元素和目标元素的索引
  const sourceIndex = children.indexOf(sourceNode)
  const targetIndex = children.indexOf(e.target)
  //判断拖拽元素和目标元素的索引，如果拖拽元素索引小于目标元素索引，则目标元素后插入拖拽元素，否则目标元素前插入拖拽元素
  if (sourceIndex < targetIndex) {
    box.insertBefore(sourceNode, e.target.nextElementSibling)
  } else if (sourceIndex > targetIndex) {
    box.insertBefore(sourceNode, e.target)
  }
}

//拖拽结束
box.ondragend = (e) => {
  e.target.classList.remove('move');
  const arr = [...box.children].map(item => {
    return item.innerText
  })
  console.log(arr)
}