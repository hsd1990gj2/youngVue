<template>
    <div class="css3">
      <!--<h3>{{title}}</h3>-->
      <!--基础-->
      <!--<basis></basis>-->
      <!--布局-->
      <basis-layout></basis-layout>
      <!--<flex></flex>-->
      <!--<grid-layout></grid-layout>-->
      <!--其它渲染样式-->
      <!--<other></other>-->
      <!--位置效果 转换、过渡-->
      <!--<transform></transform>-->
      <!--<transition></transition>-->
      <!--<vision-diff></vision-diff>-->
      <!--css变量-->
      <!--<variable></variable>-->
      <!--移动端-->
      <!--<media></media>-->
      <!--<rem></rem>-->
    </div>
</template>

<script>
    import basis from './basis.vue'
    import basisLayout from './basisLayout.vue'
    import flex from './flex.vue'
    import gridLayout from "./gridLayout";
    import other from "./other";
    import transition from './transition.vue'
    import transform from './transform.vue'
    import visionDiff from "./visionDiff";
    import variable from "./variable";
    import media from "./media";
    import rem from "./rem";
    export default {
        components:{
          basis,
          basisLayout,
          flex,
          gridLayout,
          other,
          transition,
          transform,
          visionDiff,
          variable,
          media,
          rem
        },
        data(){
          return {
            title: 'CSS3系列属性',
          }
        },
    }
</script>

<style lang="less" scoped>
  .css3{
    .select-option{
      display: inline-block;
      background: #beefbe;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
