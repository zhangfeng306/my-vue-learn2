<template>
  <div>
    <span class="h3" > 子界面 &nbsp;&nbsp; {{mess}}</span>
     <labe class="col-sm-2 control-label">{{todo.text}}</labe>
      <input v-model="mess1" class="form-control" > <br>
      mess1: <label >{{mess1}}</label>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mess1: this.mess,
        todo: this.todo
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
        default: {
          text: '士大夫',
          isComplete: false
        }
      }
    }
  }
</script>
