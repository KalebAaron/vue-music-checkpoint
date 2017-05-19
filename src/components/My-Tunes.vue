<template>
  <div class="my-tunes">
    <div class="general">
      <div class="container">
        <div class = "row" v-for='song in myTunes.general'>
          <div class = "col-sm-1">
            <img :src="song.artworkUrl60" class = "myPhoto">
          </div>
          <div class = "col-sm-4">
            <audio controls class="controls">
              <source id="myAudio" :src="song.previewUrl">
            </audio>
          </div>
          <div class = "col-sm-2">
            <p>{{song.collectionName}}</p>
          </div>
          <div class ="col-sm-2">
            <p>{{song.artistName}}</p>
          </div>
          <div class = "col-sm-1">
              <p>{{song.trackName}}</p>
          </div>
          <div class = "col-sm-2"> 
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add to Playlist
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a @click="addTrack(song, 'general')">General</a></li>
                <li><a @click="addTrack(song, 'dopeNasty')">DopeNasty</a></li>
                <li><a @click="addTrack(song, 'evenDopeNastier')">Even DopeNastier</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>

  </div>
</template>


<script>
import MyTunesService from '@/services/mytunes-service'

export default {
  name: 'MyTunes',
  data(){
    return {
      myTunes:{}

    }
  },
  computed:{},
  methods:{
    getTracks(){
      this.myTunes = MyTunesService.getTracks()

    }
  },
  components:{},
  mounted(){
    this.getTracks()
  }
}
</script>


<style scoped>

</style>