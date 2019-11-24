<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
          return{
              scroll:null
          }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false//默认不需要上拉加载更多
            }
        },
        components:{
            BScroll
        },
        mounted(){
            //1.创建scroll对象
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })
            //2.监听滚动的位置
          if(this.probeType==2||this.probeType==3){
              this.scroll.on('scroll',(position)=>{
                  this.$emit('scroll',position)//自定义事件

              })
          }
            //3.监听上拉加载更多
            if(this.pullUpLoad==true){
                this.scroll.on('pullingUp',()=>{
                    this.$emit('pullingUp')
                    // console.log('1');
                })
            }


        },
        methods:{
            scrollTo(x,y,time=300){
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll.refresh()
            },
            getScrollY(){
                return this.scroll ? this.scroll.y : 0
            }
        }
    }
</script>

<style scoped>

</style>