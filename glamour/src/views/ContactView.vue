<script setup>
import FooterImg from "@/assets/images/FooterImg/footerImg.png"
import HeadingVue from '@/components/HeadingVue.vue'
</script>

<template>
    <div class="contacts-page-wrapper">
        <heading-vue heading="Contact" path="Contact . Pages . Contact page" />

        <div class="contact-details">
            <div class="left">
                <h2>Information About us</h2>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                    mattis aliquam,
                    malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                    vitae lobortis quis bibendum quam.</p>
                <div class="colors">
                    <span class="indigo"></span>
                    <span class="red"></span>
                    <span class="cyan"></span>
                </div>
            </div>
            <div class="right">
                <h2>Contact Way</h2>
                <div class="different-contacts">
                    <div class="contact-way">
                        <span class="indigo"></span>
                        <p class="text-muted">
                            Tel:877 676767
                            <br>
                            E-Mail: shop@store.com
                        </p>
                    </div>
                    <div class="contact-way">
                        <span class="red"></span>
                        <p class="text-muted">Support Forum <br> For over 24hr</p>
                    </div>
                    <div class="contact-way">
                        <span class="orange"></span>
                        <p class="text-muted">20 Margaret st, London <br> Great britain, 3NM98-LK</p>
                    </div>
                    <div class="contact-way">
                        <span class="green"></span>
                        <p class="text-muted">Free standard shipping on all orders.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.contacts-page-wrapper {
    @mixin circle($size) {
        width: $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
    }

    h2 {
        color: $dark-blue;
        margin-bottom: 20px;
    }

    p {
        color: $dark-blue;
        margin-bottom: 20px;
    }

    .contact-details {
        padding: 50px 200px;
        @include grid(2, 1fr, 80px);

        .left {
            .colors {
                @include flex($justify: flex-start);

                span {
                    @include circle(25px);

                    &.indigo {
                        background-color: $violet-blue;
                    }

                    &.red {
                        background-color: $magenta;
                    }

                    &.cyan {
                        background-color: $cyan;
                    }
                }
            }
        }

        .right {
            .different-contacts {
                @include grid(2, 1fr, 20px);

                .contact-way {
                    @include grid(2, 1fr, 0);
                    grid-template-columns: 70px 1fr;

                    span {
                        @include circle(50px);

                        &.indigo {
                            background-color: $violet-blue;
                        }

                        &.red {
                            background-color: $magenta;
                        }

                        &.orange {
                            background-color: $orange;
                        }

                        &.green {
                            background-color: $green-light;
                        }
                    }
                }
            }
        }
    }

    // ...

    @media (max-width: $xx-large) {
        .contact-details {
            padding: 50px 100px;
        }
    }

    @media (max-width: $x-large) {
        .contact-details {
            grid-template-columns: 1fr 2fr;
        }
    }

    @media (max-width: $large) {
        .contact-details {
            padding: 50px 10px 50px 100px;
            gap: 60px;
        }
    }

    @media (max-width: $medium) {
        .contact-details {
            padding: 30px;
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: $small) {
        .contact-details {
            .right {
                .different-contacts {
                    grid-template-columns: 1fr;
                }
            }
        }
    }
}
</style>
