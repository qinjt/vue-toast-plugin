<style lang="scss" scoped>
  .toast-container{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1999;
    justify-content: center;
    align-items: center;
    .toast{
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: rgba(0,0,0,.5);
      border-radius: 10px;
      color: #fff;
    }
  }
</style>
<template>
  <div class="toast-container">
    <div class="toast">
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        message: 'Hello, Toast!',
        visible: true
      }
    }
  }
</script>