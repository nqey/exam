<template>
  <div>
    <header class="header">
      <div class="container">
        <h2 class="text-center">{{examName}}</h2>
        <br/>
        <p class="text-center">{{illustrate}}</p>
      </div>
    </header>
    <section class="content">
      <div class="container">
        <div class="yz_correct">
          <div class="text-center"> <img :src="correctImg">
            <h4>试卷提交成功</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-6 col-md-offset-3">
              <div class="dfxx">
                <ul>
                  <li class="row clearfix" v-if="rs.single">
                    <div class="col-md-6">一、单选题：得分 <span class="color_qf">{{rs.single.score}}</span>分</div>
                    <div class="col-md-6">错误题号：<span class="red" v-for="v of rs.single.errorSubjectSortList">{{v}}题&nbsp;</span></div>
                  </li>
                  <li class="row clearfix" v-if="rs.multiple">
                    <div class="col-md-6">二、多选题：得分 <span class="color_qf">{{rs.multiple.score}}</span>分</div>
                    <div class="col-md-6">错误题号：<span class="red" v-for="v of rs.multiple.errorSubjectSortList">{{v}}题&nbsp;</span></div>
                  </li>
                  <li class="row clearfix">
                     <div class="col-md-6">三、判断题：得分 <span class="color_qf">{{rs.judge.score}}</span>分</div>
                    <div class="col-md-6">错误题号：<span class="red" v-for="v of rs.judge.errorSubjectSortList">{{v}}题&nbsp;</span></div>
                  </li>
                   <li class="row clearfix">
                     <div class="col-md-6">四、填空题：得分 <span class="color_qf">{{rs.fill.score}}</span>分</div>
                    <div class="col-md-6">错误题号：<span class="red" v-for="v of rs.fill.errorSubjectSortList">{{v}}题&nbsp;</span></div>
                  </li>
                  <li class="row clearfix">
                    <div class="col-md-12">五、简答题：(需要人工评分,请关注申报机构公共业务后台查询最终分数)</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         <!--  <div class="text-center">
            <button class="btn">确认</button>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import correctImg from '@/assets/img/correct_img.png';

export default {
  name: 'exam',
  data() {
    return {
      correctImg,
      examName: '',
      illustrate: '',
      rs: '',
    };
  },
  methods: {
  },
  mounted() {
    this.rs = JSON.parse(window.sessionStorage.getItem('exam_rs'));
    this.examName = JSON.parse(window.sessionStorage.getItem('examName'));
    this.illustrate = JSON.parse(window.sessionStorage.getItem('illustrate'));
  },
};
</script>

<style scoped>
.header {
  padding: 80px 0;
  background: #4344fe;
  color: #fff;
}
.header h1 {
  padding: 20px 0;
  letter-spacing: 8px;
}
.header-bj {
  /*background: url(../images/header-bj.jpg);*/
  background-size: cover;
}
.ks-logo {
  padding-bottom: 40px;
}
.content {
  padding: 60px 0;
}
.content h3 {
  letter-spacing: 5px;
  padding: 15px 0;
}
.content-bj {
  background: #f6f4f8;
}
.content-bj p {
  line-height: 25px;
  letter-spacing: 2px;
}
.form-pding {
  margin-bottom: 35px;
  position: relative;
}
.form-pding label {
  line-height: 34px;
  margin: 0;
  letter-spacing: 3px;
  color: #4c4c4c;
}
.form-pding input {
  border-radius: 18px;
  background: #f7f7f7;
}
.form-pding span {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 16px;
  color: #fff;
  font-weight: inherit;
  position: absolute;
  right: 25px;
  top: 7px;
  font-size: 0.1em
}
.form-pding .error {
  background: #c7c7c7;
}
.form-pding .correct {
  background: #01c853;
}
.form-pding button {
  background: #01c853;
  width: 100%;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 18px;
}
.yz_correct img, .yz_correct h4 {
  margin-bottom: 40px;
  font-weight: bold;
}
.yz_correct button {
  background: #01c853;
  width: 240px;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 18px;
}
.yz_correct button:hover {
  background: #04b14b !important;
}
.ksxx {
  padding: 25px 0 0;
  width: 280px;
  margin: auto;
}
.ksxx li {
  font-size: 16px;
  line-height: 35px;
}
.count_down {
  background: #fff1df;
  padding: 5px 15px;
  width: 300px;
  margin: auto;
  border-radius: 4px;
  text-align: center;
  color: #f0820c;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 25px;
  margin-top: 20px;
}
.count_down img {
  padding-right: 8px;
}
.count_down span {
  padding-left: 5px;
}
.div_title_cut_question {
  font-size: 16px;
  padding: 2px 0;
  margin-bottom: 35px;
  line-height: 25px;
}
.div_title_question {
  overflow: hidden;
  zoom: 1;
  margin-bottom: 20px;
}
.div_table_radio_question {
  margin-bottom: 40px;
}
.div_title_question_all {
  padding-top: 2px;
  font-size: 14px;
  color: #444444;
  font-weight: bold;
  height: auto;
  line-height: 20px;
}
.div_table_radio_question li {
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
}
.inputtext {
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  background: #f6f6f6;
  padding: 25px;
  line-height:25px;
}
.modal-sm-tj {
  margin-top: 15%;
}
.modal-sm-tj .modal-content {
  padding: 40px 15px;
  color: #3e3c3c;
  line-height: 28px;
}
.modal-sm-tj .modal-content h5 {
  color: #000;
  padding: 10px;
}
.modal-sm-tj .modal-content p {
  margin-bottom: 40px;
}
.btn_sure, .btn_waive {
  padding: 5px 30px;
  margin: 0 5px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
}
.btn_sure {
  background: #4344fe;
}
.btn_waive {
  background: #555555;
}
.dfxx {
  background: #F0F5F8;
  padding: 40px 30px;
  font-size: 13px;
  margin-bottom: 60px;
}
.dfxx ul {
  margin-bottom: 0 !important;
}
.dfxx ul li {
  padding: 10px 0;
  line-height: 28px;
}
@media (min-width: 993px) {
.inputtext {
  width: 80%;
}
.form-pding .form-rig {
  text-align: right;
}
}
</style>