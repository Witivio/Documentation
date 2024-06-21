/**
 * Client app enhancement file
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Overview from './theme/components/Overview'
import Translator from './theme/components/Translator'
import Hubspot from './theme/components/Hubspot'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component("Overview", Overview)
  Vue.component("Translator", Translator)
  Vue.component("Hubspot", Hubspot)
}
