<template>
    <div class="tab-bar-item" @click="itemClick">
        <!--在插槽外面都包裹一层div防止插槽的样式被替换-->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{//传进来的参数
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                // isActive:true
            }
        },
        computed:{//计算属性
            isActive(){
                //判断当前处于活跃状态的path是否包含当前点击得到的path，是则返回true
                return this.$route.path.indexOf(this.path)!=-1//拿到处于活跃状态的路由
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}//判断是否处于活跃
            }
        },
        methods:{
            itemClick(){
                if(this.$route.path!=this.path){//判断是否双击
                    this.$router.replace(this.path)
                }
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;/*规定一般是49px*/
        font-size: 14px;

    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }

</style>