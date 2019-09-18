<template>
    <div class="home">
        <div id="homepage_logo">
            <div id="logo">
                <img src="../assets/logo.png" class="logo_image" ><br />
                <img src="../assets/logo_text.png" class="logo_text" >
            </div>
        </div>
        <div id="homepage_about">
            <div id="newsletter_about">
                <div class="titles">
                    <h1>About</h1>
                    <div class="title_rectangular"></div>
                </div>
                <p>We are a small but dedicated design company. We mostly do unique book cover art for fantasy and sci-fi writers. We are available for freelance projects, to turn your ideas into unique art.</p>
            </div>
            <div id="newsletter">
                <div id="newsletter_icon">
                    <img src="../assets/letter_icon.png" >
                </div>
                <div id="newsletter_form" v-if="notSubscribed">
                    <h1>Join us</h1>
                    <p>Subscribe our newsletter and stay up to date about the company!</p>
                    <form id="newsletter_insert_email" @submit.prevent="addSubscriber" >
                        <input type="email" placeholder="Your email adress*" v-model="newSubscriber.email" class="form-control" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div id="subscribeMessage" v-if="subscribed">
                    <h1>Thank you for subscribing!</h1>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { newsletterService } from './../services/NewsletterService'
export default {
    data() {
        return {
            newSubscriber: {
                email:''
            }, 
            subscribed:false,
            notSubscribed:true
        }
    },

    methods: {
        getDefaults() {
            this.newSubscriber = {
                email:''
            }
        },
        addSubscriber(newSubscriber) {
            newsletterService.add(this.newSubscriber)
            .then(response => {
                this.newsletterService = this.getDefaults();
                this.subscribed = true
                this.notSubscribed = false
            })
        }, 
    },
}
</script>

<style>
body {
    background-image: url("../assets/homepage_logo_1.jpg");
    background-size: cover;
}

h1 {
    font-family: 'Proza Libre', sans-serif;
    color: #ed1c24;
    font-weight: 300;
    font-size: 2rem;
}

.titles {
    margin-bottom: 1.5rem;
}

.title_rectangular {
    width: 1rem;
    height: 0.3rem;
    background: #ed1c24;
    margin-top: -0.8rem;
}

@media (max-width: 992px) {
    .title_rectangular {
        height: 0.2rem;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .title_rectangular {
        height: 0.2rem;
        width: 0.9rem;
    }
}

p {
    font-family: 'Proza Libre', sans-serif;
    color: #9c8db3;
    font-size: 1.2rem;
    text-align: justify;
}

.home {
    margin: 0 auto;
    box-sizing: border-box;
}

/* --------------logo section-------------- */

#homepage_logo {
    width: 100%;
    height: 768px;
    position: relative;
    display: flex;
    align-items: center;
}

#logo {
    width: 35%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
}

@media (min-width: 2240px) {
    #homepage_logo {
        min-height: 1200px;
    }

    #logo {
        width: 35%;
    }
}

@media (max-width: 2240px) {
    #logo {
        width: 50%;
    }
}

@media (max-width: 1200px) {
    #logo {
        width: 70%;
    }
}

@media (max-width: 992px) {
    #logo {
        width: 90%;
    }
}

@media (max-width: 480px) {
    #homepage_logo {
        height: 480px;
    }

    #logo {
        width: 95%;
    }
}

.logo_image {
    pointer-events: none;
    width: 30%;
}

.logo_text {
     width: 80%;
}


/* --------------about section-------------- */

#homepage_about {
    background-color: rgba(6, 1, 20, 0.8);
    padding: 5rem 10rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media (max-width: 2240px) {
    #homepage_about {
        padding: 1.5rem;
    }
}

@media (max-width: 992px) {
    #homepage_about {
        padding: 2rem;
    }
}

@media (max-width: 672px) {
    #homepage_about {
        padding: 2rem 1rem;
    }
}

#newsletter_about {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
}

#newsletter_about h1, p {
    width: 100%;
    text-align: justify;
}

#newsletter {
    background-color: #290959;
    border-radius: 2rem;
    width: 55%;
    height: 100%;
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

@media (min-width: 2240px) {

}
@media (max-width: 2240px) {
    #newsletter {
       width: 60%; 
    }
}

@media (max-width: 1200px) {
    #newsletter {
       width: 60%; 
    }
}

@media (max-width: 992px) {
    #newsletter {
        border-radius: 1rem;
        flex-direction: column;
        width: 60%;
        padding: 1rem;
    }

    #subscribeMessage h1 {
        font-size: 1.4rem;
    }
}

@media (max-width: 672px) {
    #newsletter {
        width: 75%;
        padding: 1rem;
    }

    #newsletter_about {
        width: 80%;
    }

    #newsletter_about p, #newsletter_form p {
        font-size: 1rem;
    }

    h1 {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    #newsletter {
        width: 90%;
        padding: 0.7rem 0.5rem;
    }

    #newsletter_about {
        width: 90%;
    }

    #newsletter_about p, #newsletter_form p {
        font-size: 0.8rem;
    }

    h1 {
        font-size: 1.2rem;
    }

    #subscribeMessage h1 {
        font-size: 1rem;
    }
}

#newsletter_icon {
    width: 30%;
    display: flex;
    justify-content: center;
} 

#newsletter input {
    background-color: #290959;
    border: 1px #9c8db3 solid;
    padding: 0.7rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-right: none;
    font-family: 'Proza Libre', sans-serif;
}

#newsletter button {
    background-color: #ed1c24;
    border: none;
    padding: 0.45rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    font-family: 'Proza Libre', sans-serif;
    font-weight: bold;
    color:#e95c5d;
}

#newsletter button:hover {
    opacity: 0.5;
}

#newsletter button:active, #newsletter button:focus {
    outline:none;
}



#newsletter_form {
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;
}

@media (max-width: 992px) {
    #newsletter_form {
        width: 90%;
        flex-direction: column;
    }
}

#newsletter_insert_email {
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
}

#newsletter_insert_email input {
    width:60%;
}

@media (max-width: 2240px) {
    #newsletter_insert_email {
        width: 100%;
    }

    #newsletter_insert_email input {
        width:60%;
    }
}

@media (max-width: 1200px) {
    #newsletter_insert_email {
        width: 100%;
    }

    #newsletter_insert_email input {
        width:74%;
    }
}

@media (max-width: 992px) {
    #newsletter_insert_email {
        width: 100%;
    }

    #newsletter_insert_email input {
        width:70%;
    }
}

@media (max-width: 672px) {
    #newsletter_insert_email {
        width: 100%;
        justify-content: center;
    }

    #newsletter_insert_email input {
        width:100%;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        border: 1px #9c8db3 solid;
        margin-bottom: 0.5rem;
    }

    #newsletter button {
        width: 100%;
        border-radius: 0.5rem;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    #newsletter_insert_email input {
        font-size: 0.7rem;
        border-radius: 0.3rem;
    }

    #newsletter button {
        font-size: 0.7rem;
        border-radius: 0.3rem;
    }
}

</style>