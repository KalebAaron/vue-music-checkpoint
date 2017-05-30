import Vue from 'vue'

let myTunes = {
}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {
    general: [],
    dopeNasty: [],
    evenDopeNastier: []
  }
}

loadMytunes()

export default {
  getTracks() {
    return myTunes
   },
  addTrack(track, playlist) {
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
    myTunes[playlist].push(track)
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },
  removeTrack(song, playlist) {
    var i = myTunes[playlist].indexOf(song)
    myTunes[playlist].splice(i, 1)
    saveMytunes()
   },
    promoteTrack(song, playlist) {
      console.log(song)
      if(!song.likes){
        song.likes = 1
      }
      else{
      song.likes++
      }
    myTunes[playlist].sort(function(a, b){
      return b.likes - a.likes
    })
    saveMytunes()
   },
  demoteTrack(song, playlist) {
    if(!song.likes){
      song.like = 0
    }
    else{
    song.likes--
    } 
    myTunes[playlist].sort(function(a, b){
      return b.likes - a.likes
    })
    saveMytunes()
  }
}