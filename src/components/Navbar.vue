<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.fixed-top
    .container
      .num 2018
      router-link.navbar-brand(to='/') 印象清華 - 物聯網科技藝術節
      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarsExample07', aria-controls='navbarsExample07', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarsExample07.collapse.navbar-collapse
        ul.navbar-nav.ml-auto.navbar-right
          li.nav-item(v-for="route in routes",
                      :class="{active: route.path==$route.path}")
            router-link.nav-link(:to="route.path")
              | {{ route.name }}
          //li.nav-item.dropdown
            a#dropdown07.nav-link.dropdown-toggle(href='http://example.com', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Dropdown
            .dropdown-menu(aria-labelledby='dropdown07')
              a.dropdown-item(href='#') Action
              a.dropdown-item(href='#') Another action
              a.dropdown-item(href='#') Something else here
        // form.form-inline.my-2.my-md-0
        //   input.form-control(type='text', placeholder='Search', aria-label='Search')

</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return {
      routes: [
        {name: "展覽介紹", path: "/about"},
        {name: "展品一覽", path: "/works"},
        {name: "展覽地圖", path: "/map"},
        {name: "策展團隊", path: "/plan"},
        {name: "聯絡與交通", path: "/contact"},
      ]
    }
  },
  mounted(){
     $(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
  }
  // methods: {
  //   closeNav(){
  //     $('.collapse').collapse()
  //   }
  // }
}
</script>

<style lang="sass"> 
@import "../assets/_mixins.sass"
nav.navbar.navbar-expand-lg.navbar-dark
  border-bottom: 5px solid $colorOrange
  position: fixed
  background-color: #0C0C0C
  right: 0
  padding-left: 0
  padding-right: 0
  .num
    position: absolute
    color: white
    left: 30px
    top: 0
    font-size: 40px
    opacity: 0.2
  .container
    padding-left: 30px
    padding-right: 30px
    background-color: #0C0C0C

  .nav-item.active
    border-bottom: 10px solid $colorOrange
    margin-bottom: -10px
    +rwd_sm
      border-bottom: 5px solid $colorOrange
      margin-bottom: 10px
      

  
</style>
