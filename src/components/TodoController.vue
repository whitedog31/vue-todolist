<template>
  <div class="controller">
    <button class="clear" v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("clearAll");
    },
    // clearTodo() {
    //   localStorage.clear();
    // },
  },
};
</script>
