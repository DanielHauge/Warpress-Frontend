<template>
  <div class="register">
    <h1>Choose a Main!</h1>
    <p>You can repick at a later time.</p>
    <div>
      <div class="list-group MainSelecter">
        <a class="main list-group-item list-group-item-action list-group-item-primary" v-bind:class="{ 'active' : isSelected(index) }" v-on:click="selected = index" v-for="(char, index) in chars" :key="index" >
            {{char.name}} - {{char.realm}}
        </a>
      </div>
    </div>

    <button type="button" v-on:click="RegisterMain()" class="btn btn-primary"> Confirm </button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',

  data () {
    return {
      description: 'Hello:',
      selected: 0,
      chars: [ // Bør være det rigtige data -> via request bodien. -> Kan også lave et ajax kald, og bruge en prop fra url istedet.
        {
          achievementPoints: 6880,
          battlegroup: 'Vindication',
          class: 7,
          gender: 1,
          guild: 'Dedodated Waiders',
          guildRealm: 'The Maelstrom',
          last_modified: 0,
          level: 120,
          name: 'Élduderino',
          race: 25,
          realm: 'The Maelstrom'
        },
        {
          name: 'TestChar',
          realm: 'Twisting-Nether',
          locale: 'en_GB'
        }
      ],
      charsData: function () {
        return 'rigtige data fra bodien'
      }
    }
  },
  mounted () {
    axios.get(process.env.API_URL + 'chars', { withCredentials: true })
      .then(response => {
        console.log(response.data)
        this.chars = response.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    RegisterMain: function () {
      alert('You picked a main!: ' + this.chars[this.selected].name + ' as your main')
      // Bør lave et kald til backenden som vil registere dette. -> gå videre til login.
    },
    isSelected: function (i) {
      return i === this.selected
    }
  }
}

</script>

<style scoped>

  .MainSelecter {
    width: 20%;
    display: inline-block;
    padding-bottom: 10px;
  }
  main {
    font-size: xx-large;
  }

  listGroup {
    margin: 50px;
  }

  .list-group-item {
    background-color: transparent;
    border-top: 0 solid #ddd;
    border-radius: 5px;
    color: #fff;
  }

  .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {
    background-color: darkorange;
  }

  .list-group-item:hover {
    background-color: darkorange;
    opacity: 0.6;
  }

</style>
