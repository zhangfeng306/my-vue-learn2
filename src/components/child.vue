<template>
  <div>
    <span class="h3"> 子界面 &nbsp;&nbsp; {{mess}}</span>
    <labe class="col-sm-2 control-label">{{todo.text}}</labe>
 <!--   <input v-model="mess1" class="form-control"> <br>-->
    mess1: <label>{{mess1}}</label>
    <button  @click="incrementCounter">{{ counter }}</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mess1: this.mess,
        todo: this.todo,
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        this.$emit('increment1')
      }
    },
//    props: ['mess', 'todo']
    props: {
      mess: {
        type: String,
        default: 'mess'
      },
      todo: {
        type: Object,
        default: function () {
          return {
            text: '士大夫',
            isComplete: false
          }
        }
      }
    }
  }
</script>
