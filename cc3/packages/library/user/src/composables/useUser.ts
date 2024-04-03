import { computed } from 'vue'

import { User } from '../private/classes/User'

const user = new User()

export const userId = computed(() => user.getId())
export const userLogin = computed(() => user.getLogin())
export const userLastName = computed(() => user.getLastName())
export const userName = computed(() => user.getName())
export const userSurname = computed(() => user.getSurname())

export const signIn = (
  login: string,
  password: string
) => user.signIn(login, password)

export const signOut = () => user.signOut()
