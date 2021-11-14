<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">Football Players {{ herosCount }}</h1>
        <h2>{{fname}} {{lname}}</h2>
        <ul>
            <li class="flex justify-between" v-for="(player, index) in footballPlayers" :key="player.name">
                <div>{{player.name}}</div>
                <button @click="removePlayer(index)">X</button>
            </li>
        </ul>
        <form 
        class="mt-10" 
        @submit.prevent="addPlayer"
        >

        <input class="border rounded" v-model="newPlayer" placeholder="type player here...">

        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white">Add Player</button>
        </form>
    </div>
</template>



<script>
export default {
    data() {
        return {
            newPlayer: '',
            footballPlayers: [
                {name: 'Wayne Rooney'},
                {name: 'Lionel Messi'},
                {name: 'Cristiano Ronaldo'},
                {name: 'Zlatan Ibrahimovic'}
            ],
        }
    },
    computed: {
        herosCount() {
            return this.footballPlayers.length + ' footbal players'
        }
    },

    methods: {
        addPlayer() {
            if (this.newPlayer !== '' ) {
                this.footballPlayers.push({name: this.newPlayer})
                this.newPlayer = ''
            }
        },

        removePlayer(index) {
            this.footballPlayers = this.footballPlayers.filter( (player, i) => i !== index)
        }
    }
}
</script>



<style>

</style>