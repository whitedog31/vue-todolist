<template>
  <div class="add">
    <div class="main-input">
      <input
        type="text"
        class="add__input"
        placeholder="Enter your task here"
        v-model="newTodoItem"
        @keypress.enter="addTodoItem"
      />
      <button class="add__buttonn" v-on:click="addTodoItem">
        <span class="blind">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  // TODO: data => v-model
  // useState 랑 비슷한
  data() {
    return {
      newTodoItem: "",
    };
  },

  methods: {
    addTodoItem() {
      // vuex commit
      this.$store.commit("addTodo", this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
