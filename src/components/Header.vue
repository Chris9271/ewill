<template>
  <header class="layout__header">
    <div class="header">
      <div class="header__title">
        <h1 class="title-main">There is no one</h1>
        <h2 class="title-sub">who loves pain</h2>
      </div>
      <button class="header__button"><a href="#form">F o r m</a></button>
      <div class="header__content">
        <img class="paddle" src="../img/paddle.svg" alt="paddle" />
        <img class="sup" src="../img/sup.svg" alt="sup" />
        <img class="firework" src="../img/firework.svg" alt="firework" />
        <img class="paddle1" src="../img/paddle1.svg" alt="paddle1" />
        <img class="sup1" src="../img/sup1.svg" alt="sup1" />
        <img class="bubble1" src="../img/bubble1.svg" alt="bubble1" />
        <img class="bubble2" src="../img/bubble2.svg" alt="bubble2" />
        <div class="context">
          <div class="context__title">
            <img src="../img/cactus.svg" alt="cactus" />
            <p class="context__text">paragraph</p>
            <img src="../img/cactus.svg" alt="cactus" />
          </div>
          <ol class="context__list">
            <li class="context__listone">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div class="context">
          <div class="context__title">
            <img src="../img/cactus.svg" alt="cactus" />
            <p class="context__text">paragraph</p>
            <img src="../img/cactus.svg" alt="cactus" />
          </div>
          <ol class="context__list">
            <li class="context__listtwo">
              Quisque sodales leo
              <span class="underbold">vitae vulputate auctor.</span>
            </li>
            <li class="context__listtwo">
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit.
            </li>
            <li class="context__listtwo">Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.</li>
            <li class="context__listtwo">
              Donec ultrices sapien
              <span class="bold">vitae leo venenatis ullamcorper.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
}
</script>
