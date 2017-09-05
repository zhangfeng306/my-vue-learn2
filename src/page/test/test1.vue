<template>
  <div >
    <button type="button" class="btn btn-default" aria-label="Left Align">
      <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
    </button>

    <button type="button" class="btn btn-default btn-lg" @click="btClick" >
      <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
    </button>
  </div>

</template>

<script>
  export default {
    methods: {
      btClick () {
        alert('被点击')
      }
    }

  }
</script>

<style>

</style>
