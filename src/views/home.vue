<template>
    <div>
        <Day v-for="day in eventDays" :dateTime="day.date" :eventList="day.events" :key="day.id" />
    </div>
</template>

<script>
// @ is an alias to /src
import Day from '@/components/day.vue'

export default {
    name: 'home',
    components: {
        Day
    },
    computed: {
        eventDays() {
            return this.$store.state.events
        }
    }
}
</script>
