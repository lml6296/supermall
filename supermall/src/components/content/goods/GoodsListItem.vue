<template>
    <div class="goods-item" @click="itemClick">
        <img :src="showImage" alt="" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p><!--商品标题-->
            <span class="price">{{goodsItem.price}}</span><!--价格-->
            <span class="collect">{{goodsItem.cfav}}</span><!--收藏人数-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        computed:{
          showImage(){
              return this.goodsItem.image || this.goodsItem.show.img
          }
        },
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return {}//默认返回一个空对象
                }
            }
        },
        methods:{
            imageLoad(){
                this.$bus.$emit('itemImageLoad')
            },
            itemClick(){
                this.$router.push('/detail/'+this.goodsItem.iid)
            }
        }
    }
</script>

<style scoped>
    .goods-item{
        padding-bottom: 40px;
        position: relative;
        width: 48%;

    }
    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goods-info .collect {
        position: relative;
    }
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>