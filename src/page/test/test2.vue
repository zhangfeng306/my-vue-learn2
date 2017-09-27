<template>
    <div>
      <h1>动画效果测试页</h1>
    <button  @click="show = !show" class="btn btn-default ">
      Toggle
    </button>
      <table >
        <tr>
          <td>
          <transition name="fade">
            <p v-if="show" >hello</p>
          </transition>
          </td>
        </tr>
        <tr>
          <td>
          <transition name="slide-fade">
            <p v-if="show">hello</p>
          </transition>
          </td>
        </tr>
        <tr>
          <td>
          <transition name="bounce">
            <p v-if="show">Look at me!</p>
          </transition>
          </td>
        </tr>
      </table>




  </div>

</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }

</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
