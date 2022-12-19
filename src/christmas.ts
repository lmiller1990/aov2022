import { Directive } from "vue";

export const christmas: Directive<HTMLElement, number> = {
  created (el, binding) {

    if (binding.arg) {
      el.classList.add(binding.arg)
    } else {
      el.classList.add('red-green')
    }

    el.classList.add('christmas-text')

    el.style.animation = `textclip ${binding.value ?? 2}s ease infinite`
  },
}
