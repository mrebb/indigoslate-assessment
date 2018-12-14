<template>
    <div>
        <h1 v-if="!this.modify">Create Event</h1>
        <h1 v-else>Modify Event</h1>
        <form action="" method="">
            <label v-if="thisEvent.id"> <strong>Event Id</strong>
                <input type='text' disabled v-model="thisEvent.id" />
            </label>
            <label> <strong>Event Name</strong>
                <input type='text' v-model="thisEvent.name" />
            </label>
            <label> <strong>Duration</strong>
                <input v-model="thisEvent.duration" />
            </label>
            <label> <strong>Date/Time</strong>
                <vue-ctk-date-time-picker v-model="thisEvent.dateTime" ></vue-ctk-date-time-picker>
            </label>
            <label class="description">
                <strong>Brief Description</strong>
                <textarea v-model="thisEvent.brief"></textarea>
            </label>
            <button v-if="!this.modify" v-on:click.prevent="createEvent" >Create Event</button>
            <button v-else v-on:click.prevent="modifyEvent" >Modify Event</button>
        </form>
    </div>
</template>

<script>

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css';

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
            modify: false
        }
    },
    methods: {
        createEvent: function( evt ) {
            evt.preventDefault();
            this.$store.dispatch( 'createEvent', this.thisEvent );
        },
        modifyEvent: function( evt ) {
            evt.preventDefault();
            this.$store.dispatch( 'modifyEvent', this.thisEvent );
        }
    },
    created: function() {
        this.modify = requiredProps.every( ( prop ) => {
            return this.thisEvent.hasOwnProperty( prop );
        });
    },
    components: {
        VueCtkDateTimePicker
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

form {
    width: 40em;
    margin: 3em auto 0;
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
            padding: .375em;
        }
        .ctk-date-time-picker {
            display:inline-block;
            width:25em;
            margin:2em 0 2em 0;
        }
        textarea {
            width: 30em;
            height: 10em;
            padding: .375em;
        }
        &.description {
            margin-top:2em;
        }
    }
    button {
        margin-top: 1em;
    }
}
</style>
