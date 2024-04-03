import { type ShallowRef } from 'vue'
import { type ApiFetch, ApiMethodItem, useApiRef } from 'ui'

export type UserItem = {
  id: number
  login: string
  lastName: string
  name: string
  surname: string
}
export type UserItemOrUndefined = UserItem | undefined
export type UserItemRef = ShallowRef<UserItemOrUndefined>

let user: User

/**
 * Класс для работы с базовыми данными ЧК.
 */
export class User {
  private item?: UserItemRef
  private itemReset?: (options?: ApiFetch) => void

  /**
   * Constructor
   */
  constructor () {
    if (user) {
      return user
    }

    user = this
  }

  /**
   * Проверяет, авторизован ли ЧК
   */
  is (): boolean {
    this.makeAuthorization()
    return Boolean(this.getId())
  }

  /**
   * Возвращает идентификатор ЧК
   */
  getId (): UserItem['id'] | undefined {
    this.makeAuthorization()
    return this.item?.value?.id
  }

  /**
   * Возвращает номер ЧК
   */
  getLogin (): UserItem['login'] | undefined {
    this.makeAuthorization()
    return this.item?.value?.login
  }

  /**
   * Возвращает фамилию ЧК
   */
  getLastName (): UserItem['lastName'] | undefined {
    this.makeAuthorization()
    return this.item?.value?.lastName
  }

  /**
   * Возвращает имя ЧК
   */
  getName (): UserItem['name'] | undefined {
    this.makeAuthorization()
    return this.item?.value?.name
  }

  /**
   * Возвращает отчество ЧК
   */
  getSurname (): UserItem['surname'] | undefined {
    this.makeAuthorization()
    return this.item?.value?.surname
  }

  /**
   * Авторизация
   * @param login логин
   * @param password пароль
   */
  signIn (
    login: string,
    password: string
  ): this {
    // TODO: в разработке

    this.makeAuthorization()

    if (!this.item?.value?.id) {
      this.itemReset?.({
        method: ApiMethodItem.post,
        request: {
          login,
          password
        },
        devMode: import.meta.env.DEV
      })
    }

    return this
  }

  /**
   * Отсоединение
   */
  signOut (): this {
    // TODO: в разработке

    this.makeAuthorization()

    if (this.item?.value?.id) {
      this.itemReset?.({
        method: ApiMethodItem.post,
        request: {
          signOut: true
        },
        devMode: import.meta.env.DEV
      })
    }

    return this
  }

  /**
   * Выполняет запрос для получения данных ЧК
   */
  private makeAuthorization (): void {
    // TODO: в разработке

    if (!this.item) {
      const {
        data,
        update
      } = useApiRef<UserItem>('user')

      this.item = data
      this.itemReset = update
    }
  }
}
