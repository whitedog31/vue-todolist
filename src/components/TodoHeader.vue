<template>
  <header>
    <h1 class="logo">Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </header>
</template>
<script>
export default {
  // name: "HomePage",

  // TODO: vue 라이프 사이클에 대해서 알아야 함.
  // created => data => timestamp
  data() {
    return {
      timestamp: "",
    };
  },
  created() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array(
      "Sun.",
      "Mon.",
      "Tue.",
      "Wed.",
      "Thu.",
      "Fri.",
      "Sat."
    );
    const week = weekList[now.getDay()];
    this.timestamp = `${month}/${date} ${week}`;
  },
};
</script>
<style lang=""></style>
