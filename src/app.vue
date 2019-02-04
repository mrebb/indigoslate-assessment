<template>
    <Login v-if='!isLoggedIn'></Login>
    <div v-else id="app">
        <header>
            <router-link to="/">List Events</router-link>
            <router-link to="/create">Create Event</router-link>
        </header>
        <div id='content'>
            <router-view/>
        </div>
    </div>
</template>

<script>

import Login from '@/components/login.vue'

export default {
    name: 'App',
    components: {
        Login
    },
    computed: {
        isLoggedIn() {
           return this.$store.state.basicToken ? true : false;
        }
    }
}

</script>

<style lang="scss">

@import 'normalize-scss';
@include normalize();

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    margin-top:35px;
    &>header {
        background-color: #333;
        position: fixed;
        top:0;
        text-align: left;
        width: 100%;
        height: 35px;
        line-height:35px;
        a {
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            padding: 0 1em;
            color: #FFF;
            &.router-link-exact-active {
                color: #BBB;
            }
        }
    }
}

</style>
