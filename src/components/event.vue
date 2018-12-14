<template>
    <dl class='event'>
        <dt class='event__title'>Name:</dt><dd>{{ thisEvent.name || 'n/a' }}</dd>
        <dt class='event__date'>Date:</dt><dd>{{ jsDate.toLocaleDateString() || 'n/a' }}</dd>
        <dt class='event__date--time'>Time:</dt><dd>{{ jsDate.toLocaleTimeString() || 'n/a' }}</dd>
        <dt class='event__date--duration'>duration:</dt><dd>{{ thisEvent.duration || 'n/a' }} Minutes</dd>
        <dt class='event__brief'>Brief:</dt><dd>{{ thisEvent.brief || 'n/a' }}</dd>
        <button v-on:click.prevent="deleteEvent" >Delete Event</button>
        <button v-on:click.prevent="modifyEvent" >Modify Event</button>
    </dl>
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
            this.$store.dispatch( 'deleteEvent', this.thisEvent.id );
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
    padding:10px;
    text-align: left;
    border-bottom:1px solid #CCC;
    border-top:1px solid #CCC;
    dt, dd {
        padding:.125em 0;
    }
    dt{
        float:left;
        clear:left;
        margin-right:.5em;
        dt, dd {
            padding:.125em;
        }
        display: block;
    }
    dd {
        text-align: left;
        display: block;
    }
    &__title{
        &, &+dd {
            font-size: 1.25em;
        }
    }
    button {
        margin-top:.5em;
    }
}
</style>
