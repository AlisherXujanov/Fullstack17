<script setup>
import HeadingVue from '@/components/HeadingVue.vue'

</script>

<template>
  <div>
    <HeadingVue heading="FAQ" path="Home . Pages . Faq" />
    <main>
      <div class="left">
        <h2>Generel information</h2>
        <p class="bold">Eu dictumst cum at sed euismood condimentum?</p>
        <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur veritatis illo
          doloremque assumenda eum soluta?</p>

        <p class="bold">Magna bibendum est fermentum eros.</p>
        <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur veritatis illo
          doloremque assumenda eum soluta?</p>

        <p class="bold">Odio muskana hak eris conseekin sceleton?</p>
        <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur veritatis illo
          doloremque assumenda eum soluta?</p>

        <p class="bold">Elit id blandit sabara boi velit gua mara?</p>
        <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur veritatis illo
          doloremque assumenda eum soluta?</p>
      </div>
      <div class="right">
        <form action="">
          <h4>Ask a Question</h4>
          <input type="text" placeholder="Your name*">
          <input type="text" placeholder="Subject*">
          <textarea name="" id="" cols="30" rows="7" placeholder="Type Your Message*"></textarea> <br>
          <button type="submit">Send Mail</button>
        </form>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 70%;
  margin: 0 auto;
  @include grid(2, 1fr, 20px);
  padding: 100px 0;

  .left {
    margin-right: 40px;

    p.bold {
      font-weight: 600;
      color: $dark-blue;
    }

    h2 {
      margin-bottom: 50px;
      color: $dark-blue;
    }

    p.small {
      font-size: 13px;
      color: $text-color-transparent;
    }
  }

  .right {
    background-color: $violet-lighter;
    padding: 50px 40px;

    input,
    textarea {
      width: 100%;
      margin-bottom: 30px;
      font-size: 14px;
      background-color: $light;
      border-radius: 5px;
      outline: 2px solid $text-color-transparent;
      border: none;
      color: $dark-blue;

    }

    input::placeholder,
    textarea::placeholder {
      color: $text-color-transparent;
    }

    textarea {
      padding: 10px;
      margin-bottom: 23px;
    }

    input {
      padding-left: 10px;
    }

    h4 {
      margin-bottom: 70px;
      color: $dark-blue;
    }

    button {
      border-radius: 5px;
      padding: 10px 35px;
      background-color: $red;
      color: $light;
    }
  }
}

@media (max-width: $large) {
  main {
    width: 80%;
  }
}

@media (max-width: $medium) {
  main {
    width: 90%;
  }
}
@media (max-width: $small) {
  main {
    width: 90%;
    @include grid(1, 1fr, 20px);

  }
}
</style>
