import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TODO don't use test data
// TODO re-architect data set details and format as necessary
import testData from '@/data/test-data'

export default new Vuex.Store({
    state: {
        events: testData,
        bearerToken: false
    },
    mutations: {
        // TODO create state mutations
        submitBearerToken: function( state, token ) {
            state.bearerToken = `bearer ${token}`;
        }
    },
    actions: {
        // TODO calls to events api backend (not yet created)
        deleteEvent: function( { commit }, eventId ) {
            console.log( 'would have deleted event ' + eventId );
        },
        modifyEvent: function( { commit }, calendarEvent ) {
            console.log( 'would have modified event ' + calendarEvent.id );
        },
        createEvent: function( { commit }, calendarEvent ) {
            console.log( 'would have created event with name:' + calendarEvent.name);
        }
    }
})
