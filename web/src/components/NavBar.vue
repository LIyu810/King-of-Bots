<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <router-link class="navbar-brand active" :to="{name: 'home'}">King Of Bots</router-link>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link :class="route_name == 'PkIndex' ? 'nav-link active' : 'nav-link'" :to="{name: 'PkIndex'}">对战</router-link>
                
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'RecordIndex' ? 'nav-link active' : 'nav-link'" :to="{name: 'RecordIndex'}">对局列表</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'RanklistIndex' ? 'nav-link active' : 'nav-link'" :to="{name: 'RanklistIndex'}">排行榜</router-link>
              </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Luka
                    </a>
                    <!-- <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown"> -->
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <router-link class="dropdown-item" :to="{name: 'UserBotIndex'}">我的Bot</router-link>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">退出</a></li>
                    </ul>
                  </li>
              </ul>
          </div>
        </div>
    </nav>
</template>


        
        


<script>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'
    
    export default {
        setup() {
            const route = useRoute();
            let route_name = computed(() => route.name)
            return {
                route_name
            }
        }
    }
</script>
    
    



<style scoped>

</style>