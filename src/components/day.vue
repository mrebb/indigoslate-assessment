<template>
    <div class='calendar__day'>
        <div class='title'> {{ dateObj.toDateString() }} </div>
        <div class='events'>
            <Event v-for="eventItem in eventList" :thisEvent="eventItem" :key="eventItem.id" />
        </div>
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
    components: {
        Event
    },
    computed: {
        dateObj() {
            return new Date( Date.parse( this.dateTime || 0 ) )
        }
    }
}
</script>

<style scoped lang="scss">
    div.calendar__day {
        margin:1em 0;
        text-align:left;
        .title{
            padding: .5em 0 .5em 1em;
            margin-bottom: 1em;
            text-align: left;
            background-color: rgba( 0, 0, 0, .125 );
            font-weight: bold;
        }
        .events {
            display:flex;
            flex-wrap:wrap;
        }
    }
</style>
