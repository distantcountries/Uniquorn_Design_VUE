<template>
    <div class="container" v-bind:class="[singleCover ? normalMode : hiddenMode]">
        <!-- <div v-if="singleCover" v-bind:class="[singleCover ? normalMode : hiddenMode]" > -->
            <div id="book_covers_title"></div>
            <div class="back">
                <button @click="$router.go(-1)" class="backButton">Back</button>
            </div>
            <div>
                <div class="singleCoverOriginal">
                    <img :src="cover.original_cover" />
                    <div class="singleCoverOriginalText">
                        <h3>{{ cover.title }}</h3>
                        <h4 v-if="cover.subtitle">{{ cover.subtitle }}</h4>
                        <hr style="border-top: 1px solid #aa9ac2; width: 100%;" />
                        <p class="cover_content">{{ cover.other_content }}</p>
                        <div class="author">
                            <p class="author_name">by {{ cover.author }}</p>
                        </div>
                        <button @click="goToLink(cover.id)" class="amazonLink" v-if="cover.link">Check the book</button>
                        <p v-else>This book is waiting for publishing</p>
                    </div>
                </div>
                <div class="singleCoverMockups">
                    <div class="firstHalf">
                        <img :src="cover.mockup_1" class="topMockup" />
                        <img :src="cover.mockup_2" class="bottomMockup" />
                    </div>
                    <div class="secondHalf">
                        <img :src="cover.mockup_3" />
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <!-- <div class="semipolar-spinner" :style="spinnerStyle" v-else>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div> -->
    </div>
</template>

<script>
import { coversService } from '../services/CoversService'
export default {
    data() {
        return {
            cover:{}, 
            singleCover:false,
            normalMode:'normalMode',
            hiddenMode:'hiddenMode'
        }
    }, 

    created(){
       this.id = this.$router.currentRoute.params.id; 
       if (this.id){
           this.getCover(this.id)
       }
    },

    methods: {
        getCover(id){
            coversService.get(id)
                .then(response => {
                    this.cover = response.data
                    this.singleCover = true
                }).catch(e=>{
                    console.log(e)
            })
        },

        goToLink(id) {
            window.open(this.cover.link, '_blank');
        }
    }, 
}
</script>

<style>

.hiddenMode {
    opacity: 0;
    transition: all 0.5s ease-out;
}

.normalMode {
    opacity: 1;
    transition: all 0.5s ease-in;
}


.back {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.backButton {
    padding: 0.4rem;
    width: 10%;
    border-radius: 0.2rem;
    border: none;
    background-color: #aa9ac2;
    color:#130924;
    font-weight: bold;
    font-size: 1.2rem;
}

.backButton:hover {
    opacity:0.5;
}

.singleCoverOriginal, .singleCoverMockups {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.singleCoverOriginal img {
    width: 67%;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    pointer-events: none;
}

.singleCoverOriginalText {
    width: 33%;
    background-color: rgba(170, 154, 194, 0.2);
    color:#aa9ac2;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 992px) {
    .singleCoverOriginal, .singleCoverMockups {
        width: 100%;
        padding: 1rem 1rem 0 1rem;
        flex-direction: column;
    }

    .singleCoverOriginal img {
        width: 100%;
        border-radius: 1.5rem;
        pointer-events: none;
    }

    .singleCoverOriginalText {
        margin-top:1rem;
        width: 100%;
        border-radius: 1.5rem;
    }

    .backButton {
        padding: 0.3rem;
        width: 20%;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .singleCoverOriginal, .singleCoverMockups {
        padding: 0.5rem 0.5rem 0 0.5rem;
    }

    .singleCoverOriginal img {
        border-radius: 0.5rem;
    }

    .singleCoverOriginalText {
        margin-top:0.5rem;
        border-radius: 0.5rem;
    }

    .backButton {
        padding: 0.2rem;
        font-size: 0.9rem;
        width: 30%;
    }
}

.singleCoverOriginalText h3 {
    font-family: 'Proza Libre', sans-serif;
    color: #ed1c24;
    font-weight: 300;
    font-size: 1.5rem;
    margin-top:1rem;
}

.singleCoverOriginalText h4 {
    margin-top:-0.5rem;
    font-size: 1.5rem;
}

.author {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.author_name {
    width: 100%;
    font-style: italic;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: right;
}

.singleCoverMockups .secondHalf {
    width: 67%;
    height: 67%;
}

.singleCoverMockups .firstHalf {
    width: 33%;
    height: auto;
}

.secondHalf img {
    width: 100%;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    pointer-events: none;
}

.firstHalf {
    display: flex;
    flex-wrap: wrap;
    width:100%;
}

.firstHalf img {
    width: 100%;
    pointer-events: none;
}

.topMockup {
    border-top-left-radius: 1.5rem;
}

.bottomMockup {
    border-bottom-left-radius: 1.5rem;
}

.amazonLink {
    padding: 0.4rem;
    width: 100%;
    border-radius: 0.2rem;
    border: none;
    background-color:#290959;
    color:#aa9ac2;
    font-weight: bold;
}

.amazonLink:hover {
    background-color:#130a23;
    color:#43138b;
}

.amazonLink:focus {
    outline:0;
}

.cover_content {
    font-size: 0.9rem;
    text-align: justify;
    margin-top:1.5rem;
}

@media (max-width: 992px) {
    .singleCoverMockups .secondHalf, .singleCoverMockups .firstHalf  {
        width: 100%;
        height: auto;
    }

    .singleCoverMockups img {
        border-radius: 1.5rem;
        margin-bottom: 1rem;
    }

    .cover_content {
        font-size: 0.9rem;
        text-align: justify;
        margin-top:0;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .singleCoverMockups img {
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .cover_content {
        font-size: 0.7rem;
        text-align: justify;
        margin-top:0;
    }

    .author_name {
        font-size: 0.7rem;
    }

    .singleCoverOriginalText h3 {
        font-size: 1.3rem;
    }

    .singleCoverOriginalText h4 {
        font-size: 1.1rem;
    }
    
    .amazonLink {
        font-size: 0.9rem;
    }
}

</style>