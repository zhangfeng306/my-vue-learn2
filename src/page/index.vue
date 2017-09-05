<template>
  <div>
    <Header></Header>

      <div class="container mt60">
            <div class="row"   v-for="i in list">

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
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
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
