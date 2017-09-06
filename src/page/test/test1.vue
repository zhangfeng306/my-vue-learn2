<template>
  <div id = "test1" >
    <Header></Header>
    <div class="mt60" >
    <button type="button" class="btn btn-default " aria-label="Left Align">
      <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
    </button>

    <button type="button" class="btn btn-default btn-lg" @click="btClick" >
      <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
    </button>
    <div class="form-group">
      <label for="dexs">输入数据</label>
      <input type="text" class="form-control" id="dexs" placeholder="请输入数字" v-model="dex">

      <label v-show="dex > 30">大于30才能看到我</label>
    </div>
    <div class="form-group">
      <label for="dexs">增加数据数据</label>
      <input type="text" class="form-control"  placeholder="请输入数字" v-model="item">
      <button class="btn btn-default" @click="addItems">增加数据</button>
    </div>

    <ul  class="list-group">
      <li class="list-group-item" v-for="item in items">{{item.message}}</li>
    </ul>

    <ul class="demo"  >
      <li v-for="(value,key,index) in object">
        {{index}} ,{{key}}, {{value}}
      </li>
    </ul>

    <ul  class="demo">
    <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header.vue'

  export default {
    components: {
      Header
    },
    data () {
      return {
        dex: 30,
        item: '',
        items: [
          {
            message: 'a'
          },
          {
            message: 'b'
          }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        numbers: [ 1, 2, 3, 4, 5 ]
      }
    },
    methods: {
      btClick () {
        alert(this.dex)
      },
      addItems () {
     //   this.items.push({ message: this.item })
        this.items.splice(5)
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      }

    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
  }
</script>

<style>
.form-control{
  width: 20%;
}

.mt60 {
  margin-top: 60px;
}
</style>
