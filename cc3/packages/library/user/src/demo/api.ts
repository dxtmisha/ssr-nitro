import { Api, ApiMethodItem } from 'ui'

import { type UserItem } from '../private/classes/User.ts'

if (import.meta.env.DEV) {
  let data: UserItem | undefined

  Api.addResponse({
    path: 'user',
    method: ApiMethodItem.get,
    response: (): { data: UserItem | undefined } => {
      return {
        data
      }
    }
  })

  Api.addResponse({
    path: 'user',
    method: ApiMethodItem.post,
    request: {
      login: '*any',
      password: '*any'
    },
    response: (): { data: UserItem | undefined } => {
      data = {
        id: 123456789,
        login: '2804051',
        lastName: 'CC3',
        name: 'Club',
        surname: 'Coral'
      }

      return {
        data
      }
    }
  })

  Api.addResponse({
    path: 'user',
    method: ApiMethodItem.post,
    request: {
      signOut: '*any'
    },
    response: (): { data: UserItem | undefined } => {
      data = undefined

      return {
        data
      }
    }
  })
}

export default {}
