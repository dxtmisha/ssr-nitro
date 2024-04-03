import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import { Api, Translate } from 'ui'
import { makeUiMedia } from 'ui/media'

import 'ui/c2/style'
import './style.css'
import './tailwind.css'

import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import App from './App.vue'

import { router } from './router'

import request from './request'
import translate from './translate'

if (import.meta.env.DEV) {
  Api.addResponse(request)
  Translate.addSync(translate)
}

makeUiMedia()

;[
  {
    name: 'cc3-header',
    item: AppHeader
  },
  {
    name: 'cc3-footer',
    item: AppFooter
  },
  {
    name: 'cc3-main',
    item: App
  }
].forEach(app => {
  if (document.getElementById(app.name)) {
    createApp(app.item)
      .use(createRouter(router))
      .mount(`#${app.name}`)
  }
})
