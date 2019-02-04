<template>
    <div class='events' v-if="eventDays.length">
        <Day v-for="day in eventDays" :dateTime="day.date" :eventList="day.events" :key="day.id" />
    </div>
    <div v-else class='empty'>
        <p> {{message}} </p>
    </div>
</template>

<script>

import Day from '@/components/day.vue'

export default {
    name: 'home',
    components: {
        Day
    },
    data: function(){
        return {
            message: ''
        }
    },
    mounted: function(){
        this.message = 'Loading Events...';
        this.$store.dispatch( 'getList' ).then( res => {
            if( this.$store.state.events.length === 0 ) {
              this.message = 'No Events';
            }
        }).catch( err => {
            this.$toasted.show(
              'Error Loading Events',
              {
                position: 'top-left',
                theme: 'bubble',
                type: 'error'
              }
            ).goAway( 1500 );
        });
    },
    computed: {
        eventDays() {
            return this.$store.state.events
        }
    }
}
</script>

<style>

div.empty {
    padding:1em;
    text-align:left;
}

</style>
