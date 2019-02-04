<template>
    <transition name="fade">
        <div class="vport">
            <div class="cssload-container">
            	<div class="cssload-whirlpool"></div>
                <p>Working</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Spinner'
    }
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.vport {
    background-color:#FFF;
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    overflow:hidden;
}

.cssload-container{
	position:relative;
    top:40%;
}

.cssload-container p {
    width:80px;
    height:10px;
    position:absolute;
    top:50%;
    left:50%;
    margin:-5px 0 0 -40px;
    font-weight:bold;
    fong-size:14px;
    text-align:center;
}

.cssload-whirlpool,
.cssload-whirlpool::before,
.cssload-whirlpool::after {
	position: absolute;
	top: 50%;
	left: 50%;
	border: 2px solid rgb(204,204,204);
	border-left-color: rgb(0,0,0);
	border-radius: 2123px;
		-o-border-radius: 2123px;
		-ms-border-radius: 2123px;
		-webkit-border-radius: 2123px;
		-moz-border-radius: 2123px;
}

.cssload-whirlpool {
	margin: -53px 0 0 -53px;
	height: 106px;
	width: 106px;
	animation: cssload-rotate 1150ms linear infinite;
		-o-animation: cssload-rotate 1150ms linear infinite;
		-ms-animation: cssload-rotate 1150ms linear infinite;
		-webkit-animation: cssload-rotate 1150ms linear infinite;
		-moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool::before {
	content: "";
	margin: -49px 0 0 -49px;
	height: 94px;
	width: 94px;
	animation: cssload-rotate 1150ms linear infinite;
		-o-animation: cssload-rotate 1150ms linear infinite;
		-ms-animation: cssload-rotate 1150ms linear infinite;
		-webkit-animation: cssload-rotate 1150ms linear infinite;
		-moz-animation: cssload-rotate 1150ms linear infinite;
}

.cssload-whirlpool::after {
	content: "";
	margin: -62px 0 0 -62px;
	height: 119px;
	width: 119px;
	animation: cssload-rotate 2300ms linear infinite;
		-o-animation: cssload-rotate 2300ms linear infinite;
		-ms-animation: cssload-rotate 2300ms linear infinite;
		-webkit-animation: cssload-rotate 2300ms linear infinite;
		-moz-animation: cssload-rotate 2300ms linear infinite;
}

@keyframes cssload-rotate {
	100% {
		transform: rotate(360deg);
	}
}

@-o-keyframes cssload-rotate {
	100% {
		-o-transform: rotate(360deg);
	}
}

@-ms-keyframes cssload-rotate {
	100% {
		-ms-transform: rotate(360deg);
	}
}

@-webkit-keyframes cssload-rotate {
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@-moz-keyframes cssload-rotate {
	100% {
		-moz-transform: rotate(360deg);
	}
}

</style>
