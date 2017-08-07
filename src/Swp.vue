<template>
  <div class="swp">
    <slot></slot>
  </div>
</template>

<script>
  import Input from './input'
  import Scroll from './scroll'
  import SpringDummy from './spring_dummy'

  export default {
    props: {
      autoPlay: {
        type: Boolean,
        default: false
      },
      onPageChangeEnd: {
        type: Function,
        default: () => {}
      }
    },
    mounted() {
      const pages = this.$el.querySelectorAll('.swp-page')
      if (pages.length <= 1) {
        return
      }

      this.input = new Input(this.$el, {
        listenMoving: true
      })
      this.input.on('move', function(dist, isEnd, e, extra) {
        if (extra.orgDirection) {
          e.preventDefault();
          scroll.movePage(dist.x, isEnd);
        }
      })

      this.scroll = new Scroll(this.$el, {
        autoPlay: this.autoPlay
      })
      const scroll = this.scroll
      scroll.on('pageChangeEnd', this.onPageChangeEnd)

      const dummy = new SpringDummy(scroll, this.input);
      dummy.on('bounce', function(dist, isEnd) {
        scroll.movePage(dist.x, isEnd);
      }).on('autoPlay', function(dist, isEnd) {
        scroll.movePage(dist.x, isEnd);
      });
    },
    updated() {
      this.scroll.update();
    }
  }
</script>

<style lang="scss">
.swp {
    position: relative;
    overflow: hidden;
    width: 100%;

    .swp-page {
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-align: center;

        img {
            max-width: 100%;
            max-height: 100%;
        }

        &:first-child {
            display: block;
        }
    }
}
</style>
