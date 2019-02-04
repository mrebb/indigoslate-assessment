import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import uuidv1 from 'uuid/v1';

Vue.use(Vuex)

import { API_ENDPOINT } from './config';
import testData from '@/data/test-data';

export default new Vuex.Store({
    state: {
        // TODO don't use testData
        events: testData,//{},
        basicToken: false
    },
    mutations: {
        submitBasicToken: function( state, token ) {
            state.basicToken = `basic ${token}`;
        },
        updateList: function( state, list ) {
            state.events = list;
        }
    },
    actions: {
        deleteEvent: function( { commit, state }, eventId ) {
          return axios({
            method: 'DELETE',
            url: `${API_ENDPOINT}/delete/${eventId}`,
            headers: { authorization: state.basicToken }
          });
        },
        modifyEvent: function( { commit, state }, calendarEvent ) {
          return axios({
            method: 'POST',
            url: `${API_ENDPOINT}/update`,
            data: calendarEvent,
            headers: { authorization: state.basicToken }
          });
        },
        createEvent: function( { commit, state }, calendarEvent ) {
          calendarEvent.id = uuidv1();
          return axios({
            method: 'POST',
            url: `${API_ENDPOINT}/create`,
            data: calendarEvent,
            headers: { authorization: state.basicToken }
          });
        },
        checkBasicToken: function( { commit, state }, token ) {

          // TODO remove return, actually implement basic authentication
            return;
          // TODO end remove return

          return axios({
            method: 'GET',
            url: `${API_ENDPOINT}/check`,
            headers: { authorization: `basic ${token}` }
          });
        },
        getList: function( { commit, state } ) {

          // TODO remove return, actually implement endpoint
            return;
          // TODO end remove return

          axios({
            method: 'GET',
            url: `${API_ENDPOINT}/list`,
            headers: { authorization: state.basicToken }
          }).then( res => {
            commit( 'updateList', res.data );
          });
        }
    }
})
