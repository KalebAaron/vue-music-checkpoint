<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <Itunes class="itunes"></Itunes>
    <MyTunes  class="my-tunes"></MyTunes>
  </div>
</template>

<script>
import MyTunes from '@/components/My-Tunes'
import Itunes from '@/components/Itunes'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    MyTunes,
    Itunes
  }
}
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: purple;
}

.itunes{
  display: inline-block;
  background: pink;
  min-height: 500px;
  min-width: 45%;
}

</style>
