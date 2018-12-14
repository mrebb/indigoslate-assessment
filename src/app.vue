<template>
    <div v-if='!isLoggedIn' id='login'>
        <h1>Login</h1>
        <p> // TODO finish login </p>
        <p v-if='loginError.length' class='error'>{{ loginError }}</p>
        <form>
            <label>Username:
                <input type='text' v-model='credentials.username' />
            </label>
            <label>Password:
                <input type='text' v-model='credentials.password' />
            </label>
            <button v-on:click.prevent='login'>Login</button>
        </form>
    </div>
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
    export default {
        name: 'App',
        data: () => {
            return {
                credentials: {},
                loginError: ''
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.state.bearerToken ? true : false;
            }
        },
        methods: {
            login: function() {
                if( this.credentials.username && this.credentials.password ) {
                    const bearerToken = btoa( `${this.credentials.username}:${this.credentials.password}` );
                    this.$store.commit( 'submitBearerToken', bearerToken );
                } else {
                    this.loginError = 'Please enter username and password.';
                }
            }
        }
    }
</script>

<style lang="scss">

@import 'normalize-scss';
@include normalize();

#login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate( -50%, -65% );
    background-color: #FFF;
    border-radius:.5em;
    padding: 1em;
    max-width: 45em;
    -webkit-box-shadow: 0px 0px 60px -10px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 60px -10px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 60px -10px rgba(0,0,0,0.15);
    text-align: center;
    p.error {
        color: #C00;
    }
    label {
        display: block;
        margin: 2em 0;
    }
    input {
        border: 1px solid #CCC;
    }
}

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    &>header {
        padding: .5em;
        background-color: #333;
        position: fixed;
        text-align: left;
        width: 100%;
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

#content {
    padding-top: 3em;
}

</style>
