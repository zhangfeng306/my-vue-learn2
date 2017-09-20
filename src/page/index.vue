<template>
  <div>
    <Header></Header>
    <div class="container mt60">
      <input v-model="propsStr" placeholder="在我里面输入的数据会传递到子模块" class="form-control"> <br>
      <Child :mess="propsStr"></Child>
      <br>
      <Child mess="子页面数据传递props"></Child>
      <br>
      <Child :todo="todo"></Child>
      <br>
      <p class="">{{ total }}</p>
      <child @increment1="incrementTotal"></child>
      <child @increment="incrementTotal"></child>

      <div class="row" v-for="i in list">
        <!--数据绑定动态获取父页面数据-->
        <!--  <Child :mess="$utils.goodTime(i.create_at)"></Child>-->
        <div class="col">
          <time v-text="$utils.goodTime(i.create_at)"></time>
        </div>
        <div class="col">
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </div>
      </div>

    </div>

    <Footer></Footer>
  </div>
</template>
<script>
  /* eslint-disable key-spacing */

  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import Child from '../components/child.vue'

  export default {
    components: {
      Header,
      Footer,
      Child
    },
    data () {
      return {
        list: [],
        propsStr: '父页面数据',
        todo: {
          text: 'Learn Vue1',
          isComplete: false
        },
        total: 0
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('topics', {limit: 5}, r => {
          this.list = r.data
        })
      },
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>

<style>


  .mt60 {
    margin-top: 60px;
  }

  .navbar-brand {
    font-size: 30px;
    font-weight: 600;
  }
</style>
