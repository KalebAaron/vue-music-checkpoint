<template>
  <div class="itunes">
    <form class="form-inline" @submit.prevent="getMusic">
    <div class="form-group">
      <input type="text" class="form-control" v-model="artist" name="artist" placeholder="Artist Name" />
      <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
    </div>
  </form>

  </div>
</template>


<script>
import ItunesService from '@/services/itunes-service'
export default {
  name: 'Itunes',
  data(){
    return{
      artist: '',

    }
  },
  computed:{},
  methods:{
    getMusic: function () {
    ItunesService.getMusicByArtist(this.artist);
  }
  },
  components:{}
}
</script>


<style scoped>

</style>