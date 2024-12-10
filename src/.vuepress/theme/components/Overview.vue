<template>
  
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
         <header class="overview_hero shadow">
            <div class="overview_hero_container">
                <div class="overview_hero_text">
                    <p
                      v-if="data.tagTitle !== null"
                      class="overview_description"
                    >
                      {{ data.tagTitle || 'Welcome to your VuePress site' }}
                    </p>
                    <p
                        v-if="data.tagLine !== null"
                        class="description"
                      >
                        {{ data.tagLine || 'Welcome to your VuePress site' }}
                    </p>
                    <p
                      v-if="data.actionText && data.actionLink"
                      class="action"
                    >
                      <NavLink
                        class="action-button"
                        :item="actionLink"
                      />
                    </p>
                  </div>
                  <div class="overview_hero_content">
                    <img
                        v-if="data.heroImage"
                        :src="$withBase(data.heroImage)"
                        :alt="data.heroAlt || 'hero'"
                        class="overview_img"
                      >
                   
                </div>
            </div>
        </header>
      <div class="container" style="max-width: 100%;">
        <div class="grid_custom_flow" style="padding-top: 4.5rem;">
          <a :href="item.link" class="shadow p-3 text-start custom_radius" style="max-width: 280px;width: 100%" v-for="(item, index) in data.items" :key="index">
              <div class="bg-primary custom_key_radius text-white h3"><img :src="item.itemImage" class="home_img" style="max-width: 50%" /></div>
              <div class="container mt-0">
                  <p class="h4">{{ item.itemDescription }}</p>
                  <div class="text-italic mt-4">{{ item.title }}</div>

                  <div class="arrow">

                  </div>
              </div>
          </a>
        </div>
      </div>
  
    </main>
  </template>
  
  <script>
  import NavLink from '@theme/components/NavLink.vue'
  
  
  
  export default {
    name: 'Overview',
    components: { NavLink },
    computed: {
      data () {
        return this.$page.frontmatter
      },
      actionLink () {
        return {
          link: this.data.actionLink,
          text: this.data.actionText
        }
      }
    }
  }
  </script>
  
  <style lang="stylus">
   .overview_wrap_range
    flex-basis 35%
  
  .overview_hero_content
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    height auto
    width: 250px;
    max-width: 100%
  
  .container_image
    height 70px
    display flex
    justify-content center
    align-items flex-start
    .overview_img
      height 50px
      padding 15px
  
  .overview_container_items
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
  
  .overview_container_item 
    display flex
    flex-direction column
    height 150px
    margin 2.5rem
    border: 1px solid #eaecef
    border-radius: 5px
    transition-duration: 0.5s;
    justify-content: center;
  
  .overview_container_item:hover
    transition: all .2s
    cursor: pointer
    box-shadow: rgb(144, 49, 99) 2px 2px 6px 0px , rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  .overview_hero_container
    display flex
    width 100%
    flex-direction row
    justify-content space-around
    max-width 80vw
    height auto

  .overview_hero_text
    display flex
    flex-direction: column;
    justify-content: center
    align-items: center
    margin-left 10px
    margin-right 10px
    width: 60%;
  
  .home
    width 100%
    margin 0px auto
    display block
    .overview_hero
      opacity 1
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      border: 2px solid #eaecef63
      background-color rgba($borderColor, 0.1)
      border-radius 5px;
      .overview_img
        display block
      h1
        font-size 3rem
      h1, .overview_description, .action
        margin 1.8rem auto
      .overview_description
        max-width 35rem
        font-size 1.2rem
        line-height 1.3
        color $accentColor
        font-weight bold
      .action-button
        display inline-block
        font-size 1.2rem
        color #fff
        background-color $accentColor
        padding 0.8rem 1.6rem
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box
        border-bottom 1px solid darken($accentColor, 10%)
        &:hover
          background-color lighten($accentColor, 10%)
   
  @media (max-width: $MQMobile)
    .overview_hero_container
      display flex
      flex-direction column-reverse
      align-items center
      height auto
      h1
        font-size 2rem
    .overview_wrap_range
        flex-basis 50%
    .overview_img
      padding-top 20px
    .overview_hero_text
      width: auto
  @media (max-width: 1024px)
    .overview_hero_container
      display flex
      flex-direction column-reverse
      align-items center
      height auto
    .overview_img
      padding-top 20px
    .overview_hero_text
      width: auto
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .overview_hero
        h1
          font-size 1.5rem
        h1, .overview_description, .action
          margin 1.2rem auto
        .overview_description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
  </style>