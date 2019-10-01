<template>
    <div class="container">
        <div v-if="allCovers">
            <div id="book_covers_title">
                <div class="titles">
                    <h1>Book covers</h1>
                    <div class="title_rectangular"></div>
                </div>
            </div>
            <div class="all_covers" >
                <div v-for="(cover, index) in covers" :key="index" class="single_image">
                    <router-link :to="singleCover(cover)">
                        <div class="cover_hover">
                            <img :src="cover.original_cover" alt="cover.title">
                            <div class="overlay">
                                <p>
                                    {{ cover.title }}<br />
                                    {{ cover.subtitle }}
                                </p>
                            </div>
                        </div> 
                    </router-link>
                </div>
            </div>
        </div>
        <div class="semipolar-spinner"  v-if="loading">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div> 
    </div>
</template>
<script>
import { coversService } from '../services/CoversService'
export default {
    data() {
        return {
            covers:[],
            loading:true,
            allCovers:false,
        }
    },

    created() {
        coversService.getAll()
        .then(response => {
            this.covers = response.data
            this.loading = false
            this.allCovers = true
        })
        .catch(() => {
            console.log('Response data covers invalid!')
        })
    },

    methods: {
        singleCover(cover) {
            return `/covers/${cover.id}`
        }
    }
}
</script>

<style>
/* --------------covers-------------- */
    .container {
        margin-top:2rem;
        margin-bottom:2rem;
        width: 100%;
        padding: 1rem;
        background-color: rgba(6, 1, 20, 0.5);
        border-radius: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .all_covers {
        width:100%;
        display: flex;
        flex-wrap: wrap;
        cursor: url("../assets/cursor.png"), auto;
        justify-content: flex-start;
    }

    .all_covers img {
        filter: grayscale(100%) sepia(100%) hue-rotate(215deg) saturate(3);
    }

    .all_covers img:hover {
        filter: none;
        filter: saturate(1);
    }

    .single_image {
        width: 19%;
        height: 19%;
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    .single_image img {
        width:100%;
        border-radius: 0.3rem;
        cursor: url("../assets/cursor.png"), auto;
        box-shadow: 0.4rem 0.4rem 0.2rem 0 rgba(0,0,0,0.3);
    }

/* --------------responsive covers-------------- */
    @media (min-width: 1220px) {
        .all_covers {
            flex-direction:row;
            padding: 0 0.5rem;
            justify-content: center;
        }

        .single_image {
            width:18%;
            padding: 0.3rem;
        }
    } 

    @media (max-width: 1220px) {
        .all_covers {
            flex-direction:row;
            padding: 0 0.5rem;
            justify-content: center;
        }

        .single_image {
            width:23%;
            padding: 0.3rem;
        }
    }

    @media (max-width: 992px) {
        .container {
            padding: 0.5rem;
        }

        .single_image {
            width:30%;
        }
    }

    @media (max-width: 710px) {
        .single_image {
            width:45%;
        }
    }

    @media (max-width: 480px) and (min-width: 300px) {
        .all_covers {
            flex-direction: column;
        }

        .single_image {
            width:100%;
            padding: 0.5rem 1.5rem;
        }

        .all_covers img {
            filter: none;
        }
    } 

/* --------------overlay content-------------- */
    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color:rgba(6, 1, 20, 0.7);
        width: 100%;
        height: 0;
        border-radius: 0 0 0.3rem 0.3rem;
        cursor: url("../assets/cursor.png"), auto;
    }
            
    .cover_hover {
        position: relative;
        width: 100%;
    }

    .cover_hover:hover .overlay {
        height: 30%;
    }

    .overlay p {
        color: #aa9ac2;
        font-size: 0.8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    #book_covers_title {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
    }

    #book_covers_title h1 {
        width: 100%;
        text-align: justify;
        font-size:2rem;
    }

/* --------------responsive overlay content-------------- */
    @media (min-width: 480px) {
        .titles {
            padding: 0 3rem;
        }

        .overlay {
            overflow: hidden;
            transition: .5s ease;
        }

        .overlay p {
            color: #aa9ac2;
            font-size: 0.8rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    } 

    @media (max-width: 480px) and (min-width: 300px) {
        .titles {
            padding: 0 1.5rem;
        }

        .overlay {
            height: 35%;
        }

        .overlay p {
            font-size: 0.8rem;
        }
    } 

/* --------------loading-------------- */
    .semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 65px;
      width: 65px;
      position: relative;
    }

    .semipolar-spinner .ring {
      border-radius: 50%;
      position: absolute;
      border: calc(65px * 0.05) solid transparent;
      border-top-color: #ff1d5e;
      border-left-color: #ff1d5e;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(65px - 65px * 0.2 * 0);
      width: calc(65px - 65px * 0.2 * 0);
      top: calc(65px * 0.1 * 0);
      left: calc(65px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(65px - 65px * 0.2 * 1);
      width: calc(65px - 65px * 0.2 * 1);
      top: calc(65px * 0.1 * 1);
      left: calc(65px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(65px - 65px * 0.2 * 2);
      width: calc(65px - 65px * 0.2 * 2);
      top: calc(65px * 0.1 * 2);
      left: calc(65px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(65px - 65px * 0.2 * 3);
      width: calc(65px - 65px * 0.2 * 3);
      top: calc(65px * 0.1 * 3);
      left: calc(65px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(65px - 65px * 0.2 * 4);
      width: calc(65px - 65px * 0.2 * 4);
      top: calc(65px * 0.1 * 4);
      left: calc(65px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      50% {
        transform: rotate(360deg) scale(0.7);
      }
    }
</style>