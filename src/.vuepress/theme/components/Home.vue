<template>
  
  
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      
  
  
        <header class="hero">
            <div class="hero_container">
                <div class="hero_image">
                    <img
                      v-if="data.heroImage"
                      :src="$withBase(data.heroImage)"
                      :alt="data.heroAlt || 'hero'"
                      class="home_img"
                    >
                </div>  

                <div class="hero_text">
                  <div>
                    <p
                      v-if="data.tagTitle !== null"
                      class="description_title"
                    >
                      {{ data.tagTitle || 'Welcome to your VuePress site' }}
                    </p>
                    <p
                      v-if="data.tagline !== null"
                      class="description"
                    >
                      {{ data.tagline || 'Welcome to your VuePress site' }}
                    </p>
                  </div>
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
            </div>
        </header>

      
      <section style="padding-bottom:0">
<div class="container text-center mb-10">
<h2>Unlock the Full Potential of Witivio Documentation!</h2>
    <h5 class="font-w-4 mb-6">Customize your knowledge acquisition journey from beginning to mastery</h5>

    <div class="grid_custom_flow_home">



        <a :href="item.link" class="shadow p-3 text-start custom_radius" v-for="(item, index) in data.items" :key="index">
            <div class="bg-primary custom_key_radius text-white h3"> {{index}}</div>
            <div class="container mt-0">
                <p class="h4">{{ item.itemDescription }}</p>
                <div class="text-italic mt-4">Discover {{ item.itemDescription }}</div>

                <div class="arrow">
                    
                </div>

            </div>
        </a>

    </div>
</div>
</section>
     <section style="background-color:#FBF0F7; margin-top:40px" > 
      <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-10">
                <div class="mb-1">
                    <h2><span class="font-w-4 d-block">Unlock Your Potential</span> with Witivio Documentation</h2>
                    <p class="lead mb-0">Discover the power of Witivio's suite of products and why having skills in Witivio solutions is essential for success.</p>
                </div>
            </div>
        </div>

    <div class="row align-items-center text-center mt-5">
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="counter">
                <div class="counter-desc text-dark">
                    <span class="count-number h2" data-to="500" data-speed="2000">500</span>
                    <span class="h2">k +</span>
                    <h6 class="text-muted mb-0">Monthly Active Users</h6>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mt-4 mt-sm-0">
            <div class="counter">
                <div class="counter-desc text-dark">
                    <span class="count-number h2" data-to="120" data-speed="2000">120</span>
                    <span class="h2">k +</span>
                    <h6 class="text-muted mb-0">Happy Organizations</h6>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-0">
            <div class="counter">
                <div class="counter-desc text-dark">
                    <span class="count-number h2" data-to="4" data-speed="500">4</span>
                    <span class="h2">.8 <i class="fa-regular fa-star"></i></span>
                    <h6 class="text-muted mb-0">Microsoft Appsource rate</h6>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<!-- Additional Text -->
<section class="pt-5">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-10">
                <p class="lead">Join the ranks of leading companies who rely on Witivio products to streamline their operations, enhance employee experiences, and drive success. With a rapidly growing community of users and a high rating on Microsoft Appsource, Witivio's solutions are the key to staying ahead in today's digital landscape.</p>
            </div>
        </div>
    </div>
</section>

<section class="mb-2">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-10">
                <div class="mb-5">
                    <h2><span class="font-w-4 d-block">You're in Good Hands with</span> Microsoft's Most Trusted Partner
                    </h2>
                    <p class="lead mb-0">Witivio has been recognized as Microsoft's Startup of the Year, a finalist for
                        the Workplace Award, and is the most-used Teams app globally.<br> Endorsed by Satya Nadella as
                        an innovative company for AI Copilot plugins, we serve over 500,000 employees daily. Experience
                        the best in class with Witivio.</p>

                </div>
            </div>
        </div>

        <div class="row customer-logos slider slick-initialized slick-slider">
            <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 960px; transform: translate3d(0px, 0px, 0px);"><div class="slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-finalist.webp" alt="ms logo witivio" max-width="250px" max-height="180"></div><div class="slide slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-azm.webp" alt="ms logo witivio" max-width="150px" max-height="180"></div><div class="slide slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-apps.webp" alt="ms logo witivio" max-width="150px" max-height="180"></div><div class="slide slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-macc.webp" alt="ms logo witivio" max-width="150px" max-height="180"></div><div class="slide slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-ipc.webp" alt="ms logo witivio" max-width="150px" max-height="180"></div><div class="slide slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 120px;" tabindex="0"><img loading="lazy" class="img-fluid" src="https://www.witivio.com/images/ms-partner-aicp.webp" alt="ms logo witivio" max-width="150px" max-height="180"></div></div></div>
            
            
            
            
            


        </div>
    </div>
</section>


<section class="bg-primary p-0 p-md-6">
    <div class="container">
        <div class="row align-items-end mb-5 bg-white p-5">
            <div class="col-12 col-md-12 col-lg-4">
                <div>
                    <h2 class="mb-0"><span class="font-w-4 d-block">Explore Witivio Documentation</span></h2>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-5 ps-lg-5 my-3 my-lg-0">
                <p class="lead mb-0">Discover the power of Witivio products and why having skills in these solutions is essential for your business.</p>
            </div>
            <div class="col-12 col-md-12 col-lg-3 text-lg-end"> <a href="/solutions/" class="btn btn-primary">
                    Get started <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</section>

      <Content class="theme-default-content custom" />
      
     
  
      <div
        v-if="data.footer"
        class="footer"
      >
        {{ data.footer }}
      </div>
  
    </main>
  </template>
  
  <script>
  import NavLink from '@theme/components/NavLink.vue'
  
  
  
  export default {
    name: 'Home',
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
  .wrap_range
    flex-basis 25%
  .container_item_title
    font-size 1rem
    margin: 25px
  
  .container_item_description
    font-size 1rem
    margin: 25px
  
  .container_image
    height 70px
    display flex
    justify-content center
    align-items flex-start
    .home_img
      height 50px
      padding 15px
      max-width 80%
  
  .container_items
    padding 3.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
  
  .container_item 
    display flex
    flex-direction column
    justify-content center
    height auto
    min-height clamp(200px, 20vw, 250px)
    margin 2.5rem
    border: 1px solid #eaecef
    border-radius: 5px
    transition-duration: 0.5s;
  
  .container_item:hover
    transition: all .2s
    cursor: pointer
    transform scale(1.05)
    box-shadow: rgb(144, 49, 99) 2px 2px 6px 0px , rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; 

  .hero_container
    display flex
    width 100%
    flex-direction row
    justify-content space-evenly
    margin-top: 4em

  .hero_text
    display flex
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    width 40vw
    margin-left 10px
    margin-right 10px

  
  // $homePageWidth
  .home
    width 100%
    margin 0px auto
    display block
    .hero
      opacity 1
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      border: 2px solid rgba($borderColor, 1)
      background-color rgba($borderColor, 0.1)
      border-radius 5px;
      .home_img
        display block
        margin 3rem auto 1.5rem
      h1
        font-size 3rem
      h1, .description, .action, .description_title
        margin 1.8rem auto
      .description
        max-width 35rem
        font-size 1.0rem
        line-height 1.0
        color $accentColor
        opacity 0.9
      .description_title
        max-width 35rem
        font-size 1.6rem
        font-weight bold
        line-height 1.3
        color $accentColor
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
    .footer
      padding 2.5rem
      border-top 1px solid $borderColor
      text-align center
      color white
      background-color #202020
  @media (max-width: $MQMobile)
    .hero_container
      display flex
      flex-direction column
      align-items center
      width 100%
      h1
        font-size 2rem
    .hero_text
      width 90vw
    .hero_image 
      width 80vw 
    .wrap_range
        flex-basis 85%
  @media (max-width: 1024px)
    .hero_container
      display flex
      flex-direction column
      align-items center
      width 100%
    .hero_text
      width 90vw
    .hero_image 
      width 80vw 
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        .home_img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 1.5rem
        h1, .description, .action, .description_title
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
  </style>