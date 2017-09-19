<template>
  <div>
    <span class="h3" > 子界面 &nbsp;&nbsp; {{mess}}</span>
     <labe class="col-sm-2 control-label">{{todo.text}}</labe>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mess: '',
        todo: {
          text: '士大夫',
          isComplete: false
        }
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
