<template>
  <div>
    <slider-left v-for="(item, index) in list" :key="index" @delete="deleteItem(index)">
      <zan-card card-class="test-card" thumb="https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg" price="999.99" title="红烧牛肉【虚拟商品】【有库存】【有sku】" :num="item" desc="3000克 50%" status="已发货">
      </zan-card>
    </slider-left>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
