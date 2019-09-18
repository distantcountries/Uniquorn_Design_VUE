<template>
    <div class="container">
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
</template>
<script>
import { coversService } from '../services/CoversService'
export default {
    data() {
        return {
            covers:[]
        }
    },

    created() {
        coversService.getAll()
        .then(response => {
            this.covers = response.data
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

    @media (max-width: 480px) {
        .titles  {
            padding: 0;
        }
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
        margin-bottom: 1%;
        margin-right: 1%;
    }

    .single_image img {
        width:100%;
        border-radius: 0.3rem;
        cursor: url("../assets/cursor.png"), auto;
        box-shadow: 0.4rem 0.4rem 0.2rem 0 rgba(0,0,0,0.3);
    }

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

        .all_covers img {
            filter: none;
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
        .all_covers {
            flex-direction:row;
            padding: 0 0.5rem;
            justify-content: center;
        }

        .all_covers img {
            filter: none;
        }

        .single_image {
            width:32%;
            padding: 0.3rem;
        }
    }

    @media (max-width: 710px) {
        .all_covers {
            flex-direction:row;
            padding: 0 0.5rem;
            justify-content: center;
        }

        .all_covers img {
            filter: none;
        }

        .single_image {
            width:45%;
            padding: 0.3rem;
        }
    }

    @media (max-width: 480px) and (min-width: 300px) {
        .all_covers {
            flex-direction: column;
        }

        .all_covers img {
            filter: none;
        }

        .single_image {
            width:100%;
            padding: 0.5rem 1.5rem;
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
    }

    @media (min-width: 1220px) {
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

    @media (max-width: 1220px) {
        .titles {
            padding: 0 2rem;
        }

        .overlay {
            bottom: 0;
            left: 0;
            right: 0;
            background-color:rgba(6, 1, 20, 0.7);
            width: 100%;
            height: 30%;
            border-radius: 0 0 0.3rem 0.3rem;
        }
    }

    @media (max-width: 992px) {
        .titles {
            padding: 0 1rem;
        }

        .overlay {
            height: 40%;
        }
    }

    @media (max-width: 710px) {
        .titles {
            padding: 0 2rem;
        }

        .overlay {
            height: 30%;
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

</style>