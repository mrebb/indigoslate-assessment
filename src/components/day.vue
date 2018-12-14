<template>
    <div class='calendar__day'>
        <div class='title'>
            {{ dateObj.toDateString() }}
        </div>
        <Event v-for="eventItem in eventList" :thisEvent="eventItem" :key="eventItem.id" />
    </div>
</template>

<script>

import Event from '@/components/event.vue'

export default {
    name: 'Day',
    props: {
        dateTime: String,
        eventList: Array
    },
    date: () => {
        return {
            dateObj: null
        }
    },
    components: {
        Event
    },
    created: function() {
        this.dateObj = new Date( Date.parse( this.dateTime ) )
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.calendar__day {
    width: 100%;
    padding: 0 0 1em;
    &:nth-child(even) {
        background-color: #ECECEC;
    }
    .title{
        text-align: left;
        padding: 1em;
        background-color: rgba( 0, 0, 0, .25 );
        font-weight: bold;
    }
}
</style>
