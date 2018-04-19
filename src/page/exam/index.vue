<template>
  <div>
    <header class="header">
      <div class="container">
        <h2 class="text-center">中国商品诚信数据库第一批申报关考试</h2>
        <ul class="ksxx">
          <li>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：<span>张三</span></li>
          <li>身份证号码：<span>511111111111111111</span></li>
          <li>电&nbsp;话&nbsp;号&nbsp;码：<span>12345678901</span></li>
        </ul>
        <p class="count_down"><img src="images/time_ico.png"/>开考倒计时<span>00:58:32</span> </p>
      </div>
    </header>
    <section class="content">
      <div class="container">
        <fieldset>
          <div class="div_title_cut_question"><b>一、选择题</b></div>
          <div class="div_question"> 
            <div class="div_table_radio_question">
              <div class="div_title_question_all">
                <div class="div_title_question"><span class="number">1、</span>我国铁路的轨距为1250mm。<span class="req">&nbsp;*（分值：5分）</span></div>
              </div>
              <ul class="ulradiocheck">
                <li>
                  <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <b>A、对</b> </label>
                </li>
                <li>
                  <label class="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <b>B、错</b> </label>
                </li>
              </ul>
            </div>
            <div class="div_table_radio_question">
              <div class="div_title_question_all">
                <div class="div_title_question"><span class="number">2、</span><span class="color_qf">[多选题]</span>从业人员有权（  ）违章指挥和强令冒险作业。<span class="req">&nbsp;*（分值：5分）</span></div>
              </div>
              <ul class="ulradiocheck">
                <li>
                  <label class="radio-inline">
                    <input type="radio" name="1" id="inlineRadio1" value="option1">
                    <b>A、拒绝</b> </label>
                </li>
                <li>
                  <label class="radio-inline">
                    <input type="radio" name="2" id="inlineRadio2" value="option2">
                    <b>B、抵制</b> </label>
                </li>
                <li>
                  <label class="radio-inline">
                    <input type="radio" name="3" id="inlineRadio3" value="option3">
                    <b>C、抗拒</b> </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="div_title_cut_question"><b>二、简答题</b></div>
          <div class="div_question"> 
            <div class="div_table_radio_question">
              <div class="div_title_question_all">
                <div class="div_title_question"><span class="number">1、</span>对中国商品诚信数据库的了解。<span class="req">&nbsp;*（分值：10分）</span></div>
              </div>
              <textarea title="" class="inputtext" placeholder="请输入内容"></textarea>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="text-center yz_correct">
        <button class="btn" data-toggle="modal" data-target=".bs-example-modal-sm">提交</button>
      </div>
    </section>
    <div class="modal fade bs-example-modal-sm modal-sm-tj" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content text-center">
          <h5 class="modal-title"><b>温馨提示</b></h5>
          <p>确定提交您的答卷吗？</p>
          <button type="button" class="btn btn_sure">确认</button>
          <button type="button" class="btn btn_waive" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'exam',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    window.sessionStorage.getItem('exam_id');
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