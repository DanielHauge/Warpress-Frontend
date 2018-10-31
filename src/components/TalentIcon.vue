<template>
    <a v-if="talent.spell.id" :data-wowhead="wowheadString">
        <b-img rounded class="talenticon"
            :src="'https://wow.zamimg.com/images/wow/icons/large/'+talent.spell.icon+'.jpg'" 
            alt="Image">
        </b-img>
    </a>
</template>

<script>
export default {
    name: "TalentIcon",
    props: ["talent"],
    data() {
        return {
        wowheadString: "spell=" + this.talent.spell.id + "lvl=120" 
        };
    },
    created() {
        
    }
};
</script>

<style scoped>
.talenticon {
    margin: 0.3px 0.3px 0.3px 0.3px;
}
</style>
