import { writable } from 'svelte/store'

export const messages = writable([
  {
    id: 1,
    text: 'Hi Gayatri',
    sender: 'Pushkar Kastoori',
    receiver: 'abc',
  },
])

export const name = writable('')
