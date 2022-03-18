<template>
  <ul class="list">
    <!--TODO: v-for 로 렌더링 일종의 for loop  -->
    <!-- TODO:v-bind??? -->
    <!-- <li class="list__item" v-for="todoItem in todoItems" v-bind:key="todoItem"> -->
    <li
      class="list__item"
      v-for="(todoItem, index) in propsdata"
      v-bind:key="todoItem.item"
    >
      <input
        type="checkbox"
        v-bind:id="todoItem.item"
        v-bind:checked="todoItem.completed === true"
        v-on:change="toggleComplete(todoItem)"
      />
      <label v-bind:for="todoItem.item" class="list__label">
        <p class="list__text">{{ todoItem }}</p>
      </label>
      <p class="list__date">{{ todoItem.date }}</p>
      <button class="list__delete" v-on:click="removeTodo(todoItem, index)">
        <div class="blind">Delete</div>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  props: ["propsdata"],

  // TODO: 라이프 사이클
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(
  //           JSON.parse(localStorage.getItem(localStorage.key(i)))
  //         );
  //       }
  //     }
  //   }
  // },

  methods: {
    // toggleComplete(todoItem) {
    //   todoItem.completed = !todoItem.completed;
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // removeTodo(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },

    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    },
  },
};
</script>
