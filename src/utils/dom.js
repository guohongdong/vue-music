/**
 * 判断 dom 元素是否包含指定类名
 *
 * @export
 * @param {*} el
 * @param {*} className
 * @returns
 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * 为指定 dom 元素添加类名
 *
 * @export
 * @param {*} el
 * @param {*} className
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let classNameTemp = el.className.split(' ')
  classNameTemp.push(className)
  el.className = classNameTemp.join(' ')
}

/**
 * 获取/设置 dom 元素自定义属性
 *
 * @export
 * @param {*} el
 * @param {*} name
 * @param {*} val
 * @returns
 */
export function getCustomData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
