<template>
    <b-card overlay
            v-if="main && info" 
            :title="main.name + ' - ' + character.realm" 
            :sub-title="character.guild.name" 
            border-variant="dark"
            text-variant="white"
            header="" 
            class="bg-light"
            :img-src="'https://render-eu.worldofwarcraft.com/character/'+character.thumbnail"
            v-bind:style="{ backgroundImage: 'https://render-eu.worldofwarcraft.com/character/'+character.thumbnail}">
            <p class="card-text">
                Gear:
                <b-container>
                    <b-row>
                        <b-col v-for="(item, slot, i) in character.items" v-if="item.icon" :key="item.id">
                            <!-- <p>{{item.name}}</p>
                            <p>{{item.itemLevel}}</p> -->
                            <GearIcon :item="item"></GearIcon>
                        </b-col>
                    </b-row>
                </b-container>
            </p>
            
        </b-card>
</template>

<script>
import GearIcon from './GearIcon'

export default {
  name: "ArmoryCard",
  components: {
      GearIcon
  },
  props: ['character'],
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>

.gearicon {
    margin: 4px 4px 4px 4px;
}
</style>
