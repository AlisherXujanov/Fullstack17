<script setup>
import HeadingVue from '@/components/HeadingVue.vue'
import FooterImg from "@/assets/images/FooterImg/footerImg.png"
</script>

<template>
    <div>
        <heading-vue heading="Contact" path="Contact . Pages . Contact page" />

        <div class="center">
            <div class="left">
                <h3>Information About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                    ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
                    amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>

                <div class="krugi">
                    <span class="blue"></span>
                    <span class="pink"></span>
                    <span class="sky-blue"></span>
                </div>

                <h3 class="h3-2">Get In Touch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                    neque ultrices tristique amet erat vitae eget dolor los vitae
                    lobortis quis bibendum quam.
                </p>

                <form @submit.prevent="submitForm" class="form-wrapper">
                    <div class="form-control">
                        <input type="name" placeholder="Your Name" v-model="form"> <input type="email"
                            placeholder="Your E-mail" v-model="form">
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject*" v-model="form">
                    </div>

                    <textarea name="" id="" cols="42" rows="4" placeholder="Type Your Messahe*"></textarea> <br>
                    <button>Send Mail</button>
                </form>

            </div>
            <div class="right">
                <h3>Contact Way</h3>
                <div class="ps">
                    <p class="p-tl">
                        Tel: 877-67-88-99 <br>
                        E-Mail: shop@store.com
                    </p>
                    <p class="p-tr">
                        Support Forum <br>
                        For over 24hr
                    </p>
                    <p class="p-bl">
                        20 Margaret st, London <br>
                        Great britain, 3NM98-LK
                    </p>
                    <p class="p-br">
                        Free standard shipping <br>
                        on all orders.
                    </p>
                </div>
                <img :src="FooterImg">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.center {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    margin: 0 15.5%;

    p {
        font-size: 13px;
    }

    .left {
        width: 40%;

        form {

            div {
                border: none;
                display: flex;
                justify-content: space-between;
                margin-left: -12px;

                input {
                    width: 48%;
                    padding: 5px;
                    font-size: 12px;
                    border: 1px solid gray;
                    border-radius: 3px;
                    background-color: transparent;
                }
            }

            textarea {
                width: 93%;
                padding: 10px;
                font-size: 12px;
                border: 1px solid gray;
                border-radius: 3px;
                background-color: transparent;
                margin-top: 8px;
                margin-bottom: 10px;
            }

            button {
                padding: 5px 30px;
                background-color: $red;
                color: white;
                border: none;
                font-size: 12px;
                border-radius: 3px;
                cursor: pointer;
            }
        }

        .krugi {
            margin-top: 30px;

            span {
                display: inline-block;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-right: 5px;
            }

            .blue {
                background-color: $contacts-left-1;
            }

            .pink {
                background-color: $contacts-left-2;
            }

            .sky-blue {
                background-color: $contacts-left-3;
            }
        }

        .h3-2 {
            margin-top: 100px;
        }
    }

    .right {
        position: relative;

        h3 {
            margin-left: -41px;
        }

        .ps {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            position: relative;

            p {
                margin-right: 60px;
            }



            .p-tl:before {
                content: '';
                display: inline-block;
                width: 33px;
                height: 33px;
                background-color: $violet-blue;
                border-radius: 50%;
                margin-right: 10px;

                position: absolute;
                top: 4px;
                left: -40px;
            }

            .p-tr:before {
                content: '';
                display: inline-block;
                width: 33px;
                height: 33px;
                background-color: $red;
                border-radius: 50%;
                margin-right: 10px;

                position: absolute;
                top: 4px;
                right: 198px;
            }

            .p-bl:before {
                content: '';
                display: inline-block;
                width: 33px;
                height: 33px;
                background-color: $yellow;
                border-radius: 50%;
                margin-right: 10px;

                position: absolute;
                bottom: 17px;
                left: -40px;
            }

            .p-br:before {
                content: '';
                display: inline-block;
                width: 33px;
                height: 33px;
                background-color: $green;
                border-radius: 50%;
                margin-right: 10px;

                position: absolute;
                bottom: 17px;
                right: 198px;
            }
        }

        img {
            width: 450px;
            position: absolute;
            right: 95px;
            top: 250px;
        }
    }
}
</style>
