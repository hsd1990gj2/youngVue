<template>
    <div>
      <!--<h4>{{title}}</h4>-->
      <!--es6基础语法-->
      <!--数组扩展-->
      <!--<array-extend></array-extend>-->
      <!--对象扩展-->
      <!--<obj-extend></obj-extend>-->
      <!--字符串扩展-->
      <!--<string-extend></string-extend>-->
      <!--数值扩展-->
      <!--<number-extend></number-extend>-->
      <!--函数扩展-->
      <!--<function-extend></function-extend>-->
      <!--变量解构赋值-->
      <!--<deconstruction></deconstruction>-->
      <!--symbol数据类型-->
      <!--<symbol-type></symbol-type>-->
      <!--set和map结构-->
      <!--<set-and-map></set-and-map>-->
      <!--promise对象-->
      <!--<promise></promise>-->
      <!--iterator和for..of-->
      <!--<iterator></iterator>-->
      <!--模块化-->
      <!--<module></module>-->

      <!--es6高级语法-->
      <!--generator函数-->
      <!--<generator></generator>-->
      <!--async函数-->
      <!--<async-function></async-function>-->
      <!--class基本用法-->
      <!--<class-basic></class-basic>-->
      <!--class继承-->
      <class-inherit></class-inherit>
    </div>
</template>

<script>
    import arrayExtend from "./arrayExtend.vue"
    import objExtend from "./objExtend.vue"
    import stringExtend from "./stringExtend.vue"
    import numberExtend from "./numberExtend.vue"
    import functionExtend from "./functionExtend.vue"
    import deconstruction from "./deconstruction.vue"
    import symbolType from "./symbolType.vue"
    import module from "./module/module.vue"
    import promise from "./promise.vue"
    import setAndMap from "./setAndMap.vue"
    import iterator from "./iterator.vue"
    import generator from "./high/generator.vue"
    import asyncFunction from "./high/asyncFunction.vue"
    import classBasic from "./high/classBasic.vue"
    import classInherit from "./high/classInherit.vue"
    export default {
      components:{
        arrayExtend,
        objExtend,
        stringExtend,
        numberExtend,
        functionExtend,
        deconstruction,
        symbolType,
        module,
        promise,
        setAndMap,
        iterator,
        generator,
        asyncFunction,
        classBasic,
        classInherit
      },
      data(){
        return {
          title: "es6相关知识"
        }
      },
      methods: {

      },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
