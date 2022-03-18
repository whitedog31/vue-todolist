<template>
  <div class="add">
    <div class="main-input">
      <input
        type="text"
        class="add__input"
        placeholder="Enter your task here"
        v-model="newTodoItem"
      />
      <button class="add__buttonn" v-on:click="addTodoItem">
        <span class="blind">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
// import getDate from "../assets/commonJS/getDate.js";

export default {
  // TODO: data => v-model
  // useState 랑 비슷한
  data() {
    return {
      newTodoItem: "",
    };
  },

  // TODO: methods.함수명 => v-on:[행위] = "함수명"
  // const handleClick 같은거

  // methods: {
  // addTodoItem() {
  //   localStorage.setItem(this.newTodoItem, this.newTodoItem);
  // },
  // },

  methods: {
    // TODO : 버튼 클릭 시, 로컬스토리지에 저장 되고, input 지워짐
    addTodoItem() {
      // if (this.newTodoItem !== "") {
      //   var value = {
      //     item: this.newTodoItem,
      //     date: `${getDate().date} ${getDate().week}`,
      //     time: getDate().time,
      //     completed: false,
      //   };
      //   localStorage.setItem(this.newTodoItem, JSON.stringify(value));
      //   this.clearInput();
      // }

      if (this.newTodoItem !== "") {
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
