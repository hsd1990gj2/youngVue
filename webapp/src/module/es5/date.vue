<template>
    <div>
      <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: "日期对象"
        }
      },
      methods:{
        operator () {
          var date = new Date();
          date.setFullYear(2020); //设置 Date 对象中的年份（四位数字）。
          date.setMonth(1); //设置 Date 对象中月份 (0 ~11)。
          date.setDate(8);  //设置 Date 对象中月的某一天 (1 ~ 31)。
          date.setHours(11);  //设置 Date 对象中的小时 (0 ~ 23)。
          date.setMinutes(56);  //设置 Date 对象中的分钟 (0 ~ 59)。
          date.setSeconds(58);  //设置 Date 对象中的分钟 (0 ~ 59)。
          date.setMilliseconds(0);  //设置 Date 对象中的毫秒 (0 ~ 999)。
          date.setTime(1332403882588);  //以毫秒设置 Date 对象。
          console.log(date);  //Sat Feb 08 2020 11:56:58 GMT+0800


          var date1 = new Date();
          console.log(date1); //Mon Jan 07 2019 11:02:22 GMT+0800
          var date2 = new Date(1546830094059);
          console.log(date2); //Mon Jan 07 2019 11:01:34 GMT+0800
          var date3 = new Date(2020,1,1);
          console.log(date3); //Sat Feb 01 2020 00:00:00 GMT+0800
          var date4 = new Date("2020/1/1");
          console.log(date4); //Wed Jan 01 2020 00:00:00 GMT+0800
        },
        operator1 () {
          let date = new Date();
          // 获取时间
          let date1 = `${date.getFullYear()}-${this.formatLength(date.getMonth() + 1)}-${this.formatLength(date.getDate())} ${date.getDay()}`; console.log(date1);  //2019-11-29 5
          // 设置时间
          // date.setFullYear(2020);
          // date.setMonth(5);
          // date.setDate(24);
          // let date2 = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getDay()}`; console.log(date2);  //2020-6-24 3
          // 时间处理
          let date3 = new Date(date.getTime() - 86400000*7); console.log(date3);


        },
        formatLength (num) {
          return ("0"+num).slice(-2);
        }
      },
      mounted() {
        // this.operator();
        this.operator1();
      }
    }
</script>

<style scoped>

</style>
