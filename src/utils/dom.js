export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  let classNameTemp = el.className.split(" ");
  classNameTemp.push(className);
  el.className = classNameTemp.join(" ");
}
