<template>
  <div class="itunes">
    <form class="form-inline" @submit.prevent="getMusic">
    <div class="form-group">
      <input type="text" class="form-control" v-model="artist" name="artist" placeholder="Artist Name" />
      <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
    </div>
  </form>
<br><br>
    <div class="myResults">
      <div class="container">
        <div class = "row" v-for='song in songs'>
        
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
import ItunesService from '@/services/itunes-service'
import MyTunesService from '@/services/mytunes-service'
export default {
  name: 'Itunes',
  data(){
    return{
      artist: '',
      songs: []
    }
  },
  computed:{},
  methods:{
    getMusic() {
    ItunesService.getMusicByArtist(this.artist).then(res=>{
      let resObj = JSON.parse(res)
      this.songs = resObj.results
      })
    },
    addTrack(song, playlist) {
      MyTunesService.addTrack(song, playlist)
    }
  },
  components:{}
}
</script>


<style scoped>
.myPhoto{
  height: 75px;
  width: auto;
  border: 1px solid white;
  border-radius: 15%;
}
.form-inline{
  text-align: center
}
</style>
