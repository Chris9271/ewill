<template>
  <header class="l-header">
    <div class="b-header">
      <div class="b-header__titles">
        <h1 class="b-header__titles-h1">There is no one</h1>
        <h2 class="b-header__titles-h2">who loves pain</h2>
      </div>
      <button class="b-header__button"><a href="#form">F o r m</a></button>
      <div class="b-header__content">
        <img class="paddle" src="../img/paddle.png" alt="paddle" />
        <img class="sup" src="../img/sup.png" alt="sup" />
        <img class="firework" src="../img/firework.png" alt="firework" />
        <img class="paddle1" src="../img/paddle1.png" alt="paddle1" />
        <img class="sup1" src="../img/sup1.png" alt="sup1" />
        <div class="b-context">
          <div class="b-context__title">
            <img src="../img/cactus.png" alt="cactus" />
            <p class="b-context__text">paragraph</p>
            <img src="../img/cactus.png" alt="cactus" />
          </div>
          <ol class="b-lists">
            <li class="b-lists__listone">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ol>
        </div>
        <div class="b-context">
          <div class="b-context__title">
            <img src="../img/cactus.png" alt="cactus" />
            <p class="b-context__text">paragraph</p>
            <img src="../img/cactus.png" alt="cactus" />
          </div>
          <ol class="b-lists">
            <li class="b-lists__listtwo">
              Quisque sodales leo
              <span class="underbold">vitae vulputate auctor.</span>
            </li>
            <li class="b-lists__listtwo">
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
              a pellentesque blandit.
            </li>
            <li class="b-lists__listtwo">
              Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
            </li>
            <li class="b-lists__listtwo">
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
  name: "LayoutHeader",
};
</script>