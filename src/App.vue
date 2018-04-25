<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getCookie } from '@/config/cookie';

export default {
  name: 'app',
  watch: {
    $route: 'checkLogin',
  },
  methods: {
    checkLogin() {
      const arr = ['login'];
      const skip = this.match(arr);
      if (!skip && !getCookie('declarer_token')) {
        // 如果没有登录状态则跳转到登录页
        this.$router.push(`/login/${window.sessionStorage.getItem('exam_id')}`);
      }
    },
    match(arr) {
      return arr.every((d) => {
        const r = location.hash.match(d);
        return r;
      });
    },
  },
};
</script>

<style lang="scss">
  @import 'assets/css/common.scss';
</style>
