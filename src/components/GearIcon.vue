<template>
    <a v-if="item.id !== 0" :data-wowhead="wowheadString">
        <b-img rounded :class="'gearicon' + ' rarity'+item.quality"
            
            :src="'https://wow.zamimg.com/images/wow/icons/large/'+item.icon+'.jpg'" 
            alt="Image">
        </b-img>
        <small v-if="item.azeriteItem.azeriteLevel" id="necklevel">{{item.azeriteItem.azeriteLevel}}</small>
    </a>
</template>

<script>
export default {
    name: "GearIcon",
    props: ["item", "classID"],
    data() {
        return {
        wowheadString: "item=" + this.item.id + "&ilvl=" + this.item.itemLevel
        };
    },
    created() {
        // Azerite Traits
        if (this.item.azeritePowers) {
            let azeritePowers = "&azerite-powers=" + this.classID;

            for (const index in this.item.azeritePowers) {
                const amount = this.item.azeritePowers.length - 1;
                const power = this.item.azeritePowers[
                amount - index
                ];
                azeritePowers += ":" + power.id;
            }
            this.wowheadString += azeritePowers;
        }
        // Bonuses
        if (this.item.bonusLists) {
            let bonuses = "&bonus=" + this.item.bonusLists.join(":");
            this.wowheadString += bonuses;
        }
        // Gems
        if (this.item.gem_0) {
            let gem = "&gems=" + this.item.gem_0
            this.wowheadString += gem;
        }
        // Enchants
        if (this.item.enchant) {
            let enchants = "&ench=" + this.item.enchant
            this.wowheadString += enchants;
        }
    }
};
</script>

<style scoped>
.gearicon {
  margin: 4px 4px 4px 4px;
}

.rarity0 {
  box-shadow: 0px 0px 50px #9d9d9d;
}

.rarity1 {
  box-shadow: 0px 0px 50px #ffffff;
}

.rarity2 {
  box-shadow: 0px 0px 50px #1eff00;
}

.rarity3 {
  box-shadow: 0px 0px 50px #0070dd;
}

.rarity4 {
  /* border: 4px solid #a335ee; */
  box-shadow: 0px 0px 50px #a335ee;
}

.rarity5 {
  box-shadow: 0px 0px 50px #ff8000;
}

.rarity6 {
  box-shadow: 0px 0px 50px #e6cc80;
}

.rarity7 {
  box-shadow: 0px 0px 50px #00ccff;
}

.rarity8 {
  box-shadow: 0px 0px 50px #00ccff;
}

.necklevel {
    
}
</style>
