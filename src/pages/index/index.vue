<template>
  <div class="container">
    {{count}}
    <zan-button size="small" type="primary" @click="add">按钮</zan-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('add')
    }
  }
}
</script>

<style scoped lang="less">
.container {
}
</style>
