<template>
    <div>
        <swiper class="detail-swiper"><!--注意：这里的class名不要设置成和组件名相同-->
            <swiper-item v-for="item in topImages">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper'
    export default {
        name: "DetailSwiper",
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    .detail-swiper{
        height: 300px;
        overflow: hidden;
    }

</style>