<template>
  <div class="my-tunes">
    <div class="general">
    <h1> General Music</h1>
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
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Options
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a @click="addTrack(song, 'general')">Promote</a></li>
                <li><a @click="addTrack(song, 'dopeNasty')">Demote</a></li>
                <li><a @click="addTrack(song, 'evenDopeNastier')">Remove</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>

<div class="dope-nasty">
<h1> Dope Nasty Playlist</h1>
      <div class="container">
        <div class = "row" v-for='song in myTunes.dopeNasty'>
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
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Options
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a @click="addTrack(song, 'general')">Promote</a></li>
                <li><a @click="addTrack(song, 'dopeNasty')">Demote</a></li>
                <li><a @click="addTrack(song, 'evenDopeNastier')">Remove from Playlist</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="dope-nasty">
<h1> Even Dope Nastier Playlist</h1>
      <div class="container">
        <div class = "row" v-for='song in myTunes.evenDopeNastier'>
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
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Options
                <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a @click="addTrack(song, 'general')">Promote</a></li>
                <li><a @click="addTrack(song, 'dopeNasty')">Demote</a></li>
                <li><a @click="addTrack(song, 'evenDopeNastier')">Remove from Playlist</a></li>
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