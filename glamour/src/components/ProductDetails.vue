<script setup>

import { AnFilledStar } from '@kalimahapps/vue-icons'
import { AnOutlinedHeart } from '@kalimahapps/vue-icons';
import { BsArrowRight } from '@kalimahapps/vue-icons';

import product_details_left_1 from '@/assets/images/productDetails/product_details_left_1.png'
import product_details_left_2 from '@/assets/images/productDetails/product_details_left_2.png'
import product_details_left_3 from '@/assets/images/productDetails/product_details_left_3.png'
import product_details_right from '@/assets/images/productDetails/product_details_right.png'
import part_3_card_1 from '@/assets/images/productDetails/part_3_card_1.png'
import part_3_card_2 from '@/assets/images/productDetails/part_3_card_2.png'
import part_3_card_3 from '@/assets/images/productDetails/part_3_card_3.png'
import part_3_card_4 from '@/assets/images/productDetails/part_3_card_4.png'

import facebook from '@/assets/images/productDetails/facebook.png'
import twitter from '@/assets/images/productDetails/twitter2.png'
import instagram from '@/assets/images/productDetails/instagram3.png'
</script>


<template>
    <div>
        <div class="part-1">
            <div class="left">
                <div class="left">
                    <img :src="product_details_left_1">
                    <img :src="product_details_left_2">
                    <img :src="product_details_left_3">
                </div>
                <div class="right">
                    <img :src="product_details_right">
                </div>
            </div>
            <div class="right">
                <h1>Playwood arm chair</h1>
                <div class="stars">
                    <AnFilledStar v-for="i in 5" :key="i" style="color: #ffc107;"/> <span>(22)</span>
                </div>
                <div class="price">
                    <span class="current-price">$32.00</span>
                    <span class="real-price">$52.00</span>
                </div>
                <p class="color">Color</p>
                <p class="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas reprehenderit porro similique debitis, doloremque natus.
                </p>
                <div class="add-to-cart">
                    <p>Add To Cart</p> <span><AnOutlinedHeart class="heart" /></span>
                </div>
                <div class="product-info">
                    <p>Categories:</p>
                    <p>Tags</p>
                    <p>Share <img :src="facebook"> <img :src="instagram"> <img :src="twitter"> </p>
                </div>
            </div>
        </div>
        <div class="part-2">
            <div class="top">
                <a href="">Description</a>
                <a href="">Additional Info</a>
                <a href="">Reviews</a>
                <a href="">Video</a>
            </div>
            <div class="center">
                <h1>Varius tempor.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae 
                    eos esse tenetur debitis perspiciatis dolorum sit aliquam accusantium. 
                    Non sequi, dolore harum earum dolorem velit at facere autem? Soluta nobis 
                    voluptates quod neque! Iusto, temporibus. Adipisci maiores pariatur 
                    incidunt minus dolorem in itaque nisi necessitatibus dignissimos. 
                    Architecto tempore autem doloremque atque recusandae, ea ab fugiat rem quae?
                </p>
            </div>
            <div class="bottom">
                <h1>More Details</h1>
                <p><BsArrowRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa voluptas fugiat? Eveniet commodi quod quaerat nihil labore culpa voluptas amet</p>
                <p><BsArrowRight class="color"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa voluptas fugiat? Eveniet commodi quod quaerat nihil labore culpa voluptas amet</p>
                <p><BsArrowRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa voluptas fugiat? Eveniet commodi quod quaerat nihil labore culpa voluptas amet</p>

                <p><BsArrowRight/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa voluptas fugiat? Eveniet commodi quod quaerat nihil labore culpa voluptas amet</p>
            </div>
        </div>
        <div class="part-3">
            <h1>Related Products</h1>
            <div class="cards">
                <div class="card">
                    <img :src="part_3_card_1" width="100%">
                    <div class="card_content">
                        <div class="top">
                            <h1>Playwood arm chair</h1>
                            <div class="stars">
                                <AnFilledStar v-for="i in 5" :key="i" style="color: #ffc107;"/>
                            </div>
                        </div>
                        <div class="price">
                            <span>$43.00</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img :src="part_3_card_2" width="100%">
                    <div class="card_content">
                        <div class="top">
                            <h1>Women's Fashion</h1>
                            <div class="stars">
                                <AnFilledStar v-for="i in 5" :key="i" style="color: #ffc107;"/>
                            </div>
                        </div>
                        <div class="price">
                            <span>$67.00</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img :src="part_3_card_3" width="100%">
                    <div class="card_content">
                        <div class="top">
                            <h1>Volx Dummy Fashion</h1>
                            <div class="stars">
                                <AnFilledStar v-for="i in 5" :key="i" style="color: #ffc107;"/>
                            </div>
                        </div>
                        <div class="price">
                            <span>$67.00</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img :src="part_3_card_4" width="100%">
                    <div class="card_content">
                        <div class="top">
                            <h1>Top Wall Digital Clock</h1>
                            <div class="stars">
                                <AnFilledStar v-for="i in 5" :key="i" style="color: #ffc107;"/>
                            </div>
                        </div>
                        <div class="price">
                            <span>$51.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.part-1 {
    width: 1120px;
    margin: 100px auto;
    padding: 10px;
    @include grid(2);
    box-shadow: 0 0 50px $violet-light;

    .left {
        @include flex(row, center, center, 15px);

        .left {
            @include flex(column, center, center, 11px);

            img {
                width: 100%;
            }
        }
    }
    
    >.right {
        @include flex(column, center, start, 10px);
        padding-left: 40px;
        h1 {
            color: $dark-blue;
        }

        .stars {
            margin-bottom: 10px;
        }   

        .price {
            margin-bottom: 10px;

            .current-price {
                margin-right: 10px;
            }

            .real-price {
                color: $red;
                text-decoration: line-through;
            }
        }

        .color {
            margin: 0;
        }

        .description {
                color: $text-color-transparent;
                margin: 0;
                
        }

        .add-to-cart {
            margin-left: 70px;
            background-color: red;
            @include flex(row, start, _, 10px);
            padding: 0px;
            // line-height: 0.7;
            

            // .heart {
            //     background-color: red;
            //     line-height: 0;
            // }
        }

        .product-info {
            margin: 0;
            margin-top: 0px;

            img {
                width: 12px;
                height: 12px;
            }
        }
    }
}

.part-2 {
    background-color: $violet-lighter;
    padding: 100px 95px;

    .top {
        a {
            color: $dark-blue;
            margin-right: 50px;
            text-decoration: none;
            font-size: 20px;
            font-weight: 600;
        }

        a:nth-child(1) {
            text-decoration: underline $dark-blue;
        }
    }

    .center {
        h1 {
            color: $dark-blue;
            font-size: 20px;
            margin-top: 35px;
            margin-bottom: 10px;
        }

        p {
            color: $text-color-transparent;
            font-size: 16px;
        }
    }

    .bottom {
        margin-top: 35px;
        
        h1 {
            color: $dark-blue;
            font-size: 20px;
            margin-bottom: 10px;
        }

        p {
            color: $text-color-transparent;

            svg {
                font-size: 25px;
                color: $dark-blue;
            }

            .color {
                color: $dark-blue;
            }
        }
    }
}

.part-3 {
    padding: 100px 95px;

    h1 {
        margin-bottom: 30px;
    }

    .cards {
        @include grid(4);
        gap: 30px;
        
        .card {
            color: $dark-blue;
            border: none;

            .card_content {
                padding: 15px 5px;
                
                .top {
                    @include flex(row, space-between, _, 10px);
                    margin-bottom: 0px;
                    

                    h1 {
                        font-size: 14px;
                    }

                    .stars {
                        font-size: 10px;
                    }
                }

                .price {
                    margin-top: 0px;
                    font-size: 11px;
                }
            }
        }
    }
}
</style>
