import { Directive } from "vue";

export const christmas: Directive<HTMLElement, number> = {
  created(el, binding) {
    el.classList.add('christmas-text')

    if (binding.arg) {
      el.classList.add(binding.arg)
    } else {
      el.classList.add('red-green')
    }

    if (binding.value) {
      el.style.animation = `textclip ${binding.value}s ease infinite`
    }
  }
}