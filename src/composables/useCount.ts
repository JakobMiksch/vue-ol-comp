import { ref } from 'vue'

// global state, created in module scope
const count = ref(1)

export function useCount() {
  return {
    count,
  }
}