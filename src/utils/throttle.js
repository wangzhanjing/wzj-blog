export default function myThrottle (fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      timer = true
      fn.apply(this, arguments)
      timer = setTimeout(() => {

      }, 300)
    }
  }
}
