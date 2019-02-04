<template>
    <div class='eventForm'>
        <h1 v-if="!this.modify">Create Event</h1>
        <h1 v-else>Modify Event</h1>
        <form action="" method="">
            <label v-if="thisEvent.id"> <strong>Event Id</strong>
                <input type='text' disabled v-model="thisEvent.id" />
            </label>
            <label> <strong>Event Name</strong>
                <input type='text' v-model="thisEvent.name" />
            </label>
            <label> <strong>Duration (Min.)</strong>
                <input type='number' step='10' min='10' v-model="thisEvent.duration" />
            </label>
            <label> <strong>Start Date/Time</strong>
                <vue-ctk-date-time-picker v-model="thisEvent.dateTime" ></vue-ctk-date-time-picker>
            </label>
            <label class="description">
                <textarea v-model="thisEvent.brief" placeholder="Brief Description" maxlength="150"></textarea>
            </label>
            <button v-if="!this.modify" v-on:click.prevent="createEvent" >Create Event</button>
            <button v-else v-on:click.prevent="modifyEvent" >Modify Event</button>
        </form>
        <Spinner v-if="this.working"></Spinner>
    </div>
</template>

<script>

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css';
import Spinner from '@/components/spinner';

const requiredProps = [ 'name', 'dateTime', 'duration' ];

export default {
    name: 'EventForm',
    props: {
        thisEvent: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data: () => {
        return {
            error: false,
            working: false
        }
    },
    methods: {
        createEvent: function( evt ) {
            this.dispatchChange( evt, 'createEvent' );
        },
        modifyEvent: function( evt ) {
            this.dispatchChange( evt, 'modifyEvent' );
        },
        dispatchChange: function( evt, type = 'createEvent' ) {
            evt.preventDefault();
            this.working = true;
            this.$store.dispatch( type, this.thisEvent )
            .then( resp => {
                this.working = false;
                this.$router.push( '/' );
            }).catch( err => {
                this.working = false;
                const message = err.response ? err.response.data : err.message || 'Unknown Error';
                this.$toasted.show(
                  message,
                  {
                    position: 'top-left',
                    theme: 'bubble',
                    type: 'error'
                  }
                ).goAway( 1500 );
            });
        }
    },
    computed: {
        modify: function() {
          return this.$route.name === 'modify'
        }
    },
    components: {
        VueCtkDateTimePicker,
        Spinner
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div.eventForm {
    margin-top:65px;
    padding-left:2em;
    text-align:left;
    h1 {
        text-align:center;
    }
}

form {
    width: 40em;
    margin: 0 auto;
    label {
        display:block;
        strong, input {
            margin-bottom:1em;
        }
        strong {
            display:inline-block;
            width:10em;
        }
        input{
            width: 25em;
            display:inline-block;
            border-radius: 3px;
            border: 1px solid #CCC;
            padding: .625em .375em;
        }
        .ctk-date-time-picker {
            display:inline-block;
            width:29.425em;
        }
        textarea {
            width: 35em;
            height: 5em;
            padding: .375em;
            border-radius: 3px;
            border: 1px solid #CCC;
        }
        &.description {
            margin-top:1em;
        }
    }
    button {
        margin-top: 1em;
    }
}
</style>
