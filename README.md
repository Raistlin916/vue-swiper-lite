# Vue-swiper-lite

## Installation

    npm install vue-swiper-lite

## Usage

    <template>
      <div class="app-container">
        <Swp
          class="swp-wapper"
          autoPlay
        >
          <SwpPage
            v-for="src in imgs"
            key="src"
          >
            <div
              class="swp-item"
              :style="{ backgroundImage: `url(${src})` }"
            ></div>
          </SwpPage>
        </Swp>
      </div>
    </template>

    <script>
      import { Swp, SwpPage } from '../src/main'

      export default {
        data() {
          return {
            imgs: [
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/aebaddb28aa6ef7f33fbdc2e2a648d46.jpg',
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/c022431a9667fbf71b8613b1403c4702.jpg',
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/f91b8b44123c792937f15530f759c595.jpg',
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/3e655d1c58ad0922235756c58b35a25f.jpg',
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/47d7a700414e778a05765e3d403d1d18.jpg',
              'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/62af0d5c506ddc732d47eb43c1d7b721.jpg'
            ]
          }
        },
        components: {
          Swp, SwpPage
        }
      }
    </script>

    <style lang="scss">
      .app-container {
        width: 500px;
        margin: 0 auto;
      }
      .swp-wapper {
        height: 300px;
      }
      .swp-item {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: top center;
      }
    </style>

## Options

| Option | Description |
| ----- | ----- |
| autoPlay | Boolean(default: false) whether autoplay. |
| startIndex | Number(default: 0) index of start page. |
