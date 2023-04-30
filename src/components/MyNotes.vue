<template>
  <div class="footer">
    <iframe id="iframe"
        name="iframe"
        height="100%"
        width="100%"
        src="static/mynotes.html"
        scrolling="auto"
        frameborder="0"
        onload="changeFrameHeight()">
</iframe>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    height: 100vh;
    width: 100vw;
}
</style>