<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper'

    export default {
        name: "HomeSwiper",
        data() {
            return {
                isload: false
            }
        },
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            imageLoad() {
                if(!this.isload){
                    this.$emit('swiperImageLoad')
                    this.isload=true
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>

</style>
