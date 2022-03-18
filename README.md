# Todo List

## 목적

- vue 에 대한 전체적인 Flow를 이해하기 위해 Todo List 제작

## 질문

- vue 라이프 사이클 ???
- vue router 설정은 어떻게 ???
- vue.config.js 에서 scss 설정하는 것이 좀 어렵다 .

```js
module.exports = {
  css: {
    sourceMap: true, //  TODO: ??? 뭘까 얘는 ???
    loaderOptions: {
      scss: {
        additionalData: `
         @import "src/assets/_variables.scss";
        `,
      },
    },
  },
};
```

- 중요
  Web Storage API는 직관적으로 key/value 데이터를 안전하게 저장할 수 있습니다.

로컬 스토리지는 브라우저를 종료해도 데이터가 계속 남아 있지만, 세션 스토리지는 세션이 종료되면 데이터도 사라집니다.

각각의 오리진에 대해 다른 스토리지 객체가 localStorage와 sessionStorage에 사용됩니다.

(\*오리진: 도메인, 서브도메인, 스킴, 포트 번호를 포함한 것)

- 실시간 으로 보여주기

1. app.vue 에서 created 시점에서 전체 데이터 불러오기
2. v-bind:propsdata="todoItems"
   2-1. 전달할 데이터를 propsdata 라는 이름으로 전달
3. Todolist. vue 에서 props: ["propsdata"]으로 데이터를 받는다.
   3-1. <li class="list__item" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item"> 으로 렌더링 해준다 .
4. TodoInput 에서 추가 기능이 잇으므로 여기서 $emit 을 이용하여 상위 컴포넌트에게 알려준다.
   4-1. 여기서 상위는 App.vue 에 <TodoInput v-on:addItem="addOneItem" /> 으로 바인딩 한다.
   4-2. 그럼 addItem => addOneItem 함수가 실행
