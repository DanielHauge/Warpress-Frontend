<template>
    <b-card no-body 
            bg-variant="dark">
        <b-tabs card pills>
            <b-tab title="Normal" active v-if="roster.length > 0" title-link-class="warcraftlogs-difficulty-tab">
                <b-list-group flush>
                    <b-list-group-item v-for="(character, index) in roster" :href="'#/inspect/'+realm+'/'+character.name" variant="dark" :key="index">
                        {{character.name}} Role: {{character.role}}
                        
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
        </b-tabs>
        
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    
  name: "RosterCard",
  components: {
      
  },
  props: ['roster'],
  computed: {
    ...mapState('profile', {
      realm: state => state.guild.realm
    })
  },
  data() {
    return {
        
    };
  },
};
</script>

<style scoped>
.badge {
    position: relative;
    float: right;
}
.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

.card-body {
    padding: 0px;
    
}

.card {
    margin: 2% 2% 2% 2%;
}
</style>
