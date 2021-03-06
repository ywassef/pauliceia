import Vue from 'vue';
import Vuex from 'vuex';

import english from './translations/english.json';
import portuguese from './translations/portuguese.json';

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
    strict: debug
});

import vuexI18n from 'vuex-i18n';
Vue.use(vuexI18n.plugin, store);

// register the locales
Vue.i18n.add('en', english);
Vue.i18n.add('pt', portuguese);

// Set the start locale to use
Vue.i18n.set('en');

export default store;