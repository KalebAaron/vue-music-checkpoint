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
                <li><a @click="promoteTrack(song, 'general')">Promote</a></li>
                <li><a @click="demoteTrack(song, 'general')">Demote</a></li>
                <li><a @click="removeTrack(song, 'general')">Remove</a></li>
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
                <li><a @click="promoteTrack(song, 'dopeNasty')">Promote</a></li>
                <li><a @click="demoteTrack(song, 'dopeNasty')">Demote</a></li>
                <li><a @click="removeTrack(song, 'dopeNasty')">Remove from Playlist</a></li>
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
                <li><a @click="promoteTrack(song, 'evenDopeNastier')">Promote</a></li>
                <li><a @click="demoteTrack(song, 'evenDopeNastier')">Demote</a></li>
                <li><a @click="removeTrack(song, 'evenDopeNastier')">Remove from Playlist</a></li>
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

    },
    removeTrack(){
      this.myTunes = MyTunesService.removeTrack()
    },
    promoteTrack(){
      this.myTunes = MyTunesService.promoteTrack()
    },
     demoteTrack(){
      this.myTunes = MyTunesService.demoteTrack()
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