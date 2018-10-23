<template>
    <b-img rounded :class="'gearicon' + ' rarity'+item.quality"
        v-b-popover.hover="item.name + '\n Item Level: ' + item.itemLevel" 
        :title="item.name" 
        :src="'https://wow.zamimg.com/images/wow/icons/large/'+item.icon+'.jpg'" 
        alt="Image">
    </b-img>
</template>

<script>
export default {
  name: "GearIcon",
  props: ['item'],
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

.rarity0 {
  box-shadow: 0px 0px 20px #9d9d9d;
}

.rarity1 {
  box-shadow: 0px 0px 20px #ffffff;
}

.rarity2 {
  box-shadow: 0px 0px 20px #1eff00;
}

.rarity3 {
  box-shadow: 0px 0px 20px #0070dd;
}

.rarity4 {
  /* border: 4px solid #a335ee; */
  box-shadow: 0px 0px 20px #a335ee;
}

.rarity5 {
  box-shadow: 0px 0px 20px #ff8000;
}

.rarity6 {
  box-shadow: 0px 0px 20px #e6cc80;
}

.rarity7 {
  box-shadow: 0px 0px 20px #00ccff;
}

.rarity7 {
  box-shadow: 0px 0px 20px #00ccff;
}
</style>
