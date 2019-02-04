<template>
    <div class='event'>
        <dl>
            <dt class='event__title'>Name:</dt><dd>{{ thisEvent.name || 'n/a' }}</dd>
            <dt class='event__date'>Date:</dt><dd>{{ jsDate.toLocaleDateString() || 'n/a' }}</dd>
            <dt class='event__date--time'>Time:</dt><dd>{{ jsDate.toLocaleTimeString() || 'n/a' }}</dd>
            <dt class='event__date--duration'>Duration:</dt><dd>{{ thisEvent.duration || 'n/a' }} Minutes</dd>
        </dl>
        <p v-if="thisEvent.brief">{{ thisEvent.brief }}</p>
        <div>
            <button v-on:click.prevent="deleteEvent" >Delete Event</button>
            <button v-on:click.prevent="modifyEvent" >Modify Event</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: {
        thisEvent: Object
    },
    data: () => {
        return {
            jsDate: new Date()
        }
    },
    methods: {
        deleteEvent: function( evt ) {
            evt.preventDefault();
            this.$store.dispatch( 'deleteEvent', this.thisEvent.id )
            .then( res => {
              this.$store.dispatch( 'getList' );
            }).catch( ( err, body ) => {
              this.$toasted.show( 'Error Deleting Event', { position: 'top-left', theme: 'bubble', type: 'error' } ).goAway( 2000 );
            });
        },
        modifyEvent: function( evt ) {
            evt.preventDefault();
            this.$router.push({ name: 'modify', params: { thisEvent: this.thisEvent }});
        }
    },
    created: function() {
        this.jsDate = new Date( Date.parse( this.thisEvent.dateTime ) )
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event {
    flex-basis:20em;
    flex-shrink: 0;
    align-self: flex-start;
    margin:1em;
    padding:10px;
    -webkit-box-shadow: 0px 0px 60px -13px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 60px -13px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 60px -13px rgba(0,0,0,0.25);
    text-align: left;
    dt {
        font-weight:bold;
    }
    dt, dd {
        float:left;
        padding:.5em .25em 0 0;
        margin:0;
    }
    p, dt, div {
        clear:left;
    }
    p {
        display: block;
        padding: 1em 0 0;
        margin: 0;
    }
    &__title{
        &, &+dd {
            font-size: 1.25em;
        }
    }
    button {
        margin:1em .5em 0 0;
    }
}
</style>
