<template>
    <b-card overlay
        v-if="character" 
        border-variant="dark"
        text-variant="white"
        header="" 
        class="bg-light"
        :img-src="'https://render-eu.worldofwarcraft.com/character/'+character.main">
        <p class="card-text">
            <b-container>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.head" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.hands" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.neck" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.waist" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.shoulder" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.legs" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.back" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.feet" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.chest" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.finger1" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <!-- <GearIcon :item="character.items.back" :classID="character.class"></GearIcon> -->
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.finger2" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <!-- <GearIcon :item="character.items.back" :classID="character.class"></GearIcon> -->
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.trinket1" :classID="character.class"></GearIcon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="left">
                        <GearIcon :item="character.items.wrist" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col>
                        <GearIcon :item="character.items.mainHand" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col>
                        <GearIcon :item="character.items.offHand" :classID="character.class"></GearIcon>
                    </b-col>
                    <b-col class="right">
                        <GearIcon :item="character.items.trinket2" :classID="character.class"></GearIcon>
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
    props: ['stats'],
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

.card {
    max-width: 400px;
    min-width: 300px;
    float: right;
    margin: 2% 2% 2% 2%;
}

.col {
    padding-left: 0px;
    padding-right: 0px;
}

.card-img {
    width: 100%;
    height: 550px;
    object-fit: cover;
}

.left {
    text-align: left;
}
.right {
    text-align: right;
}
</style>
