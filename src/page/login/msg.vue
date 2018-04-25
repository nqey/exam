<template>
  <div>
    <header class="header header-bj">
    <div class="container text-center"> <img class="ks-logo" :src="logo" />
      <h1>中国商品诚信数据库考试系统</h1>
    </div>
  </header>
  <section class="content content-bj">
    <div class="container text-center">
      <h3>{{examName}}</h3>
      <p>{{illustrate}}</p>
    </div>
  </section>
  <section class="content">
    <div class="container">
      <div class="text-center yz_correct"> <img :src="correct" />
        <h4>身份验证成功</h4>
        <router-link class="btn" to="/exam">开始答题</router-link>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import logo from '@/assets/img/logo.png';
import correct from '@/assets/img/correct_img.png';
import { EXAM_LOGININFO } from '@/config/env';

export default {
  name: 'msg',
  data() {
    return {
      logo,
      examName: '',
      illustrate: '',
      id: window.sessionStorage.getItem('exam_id'),
      correct,
    };
  },
  async mounted() {
    const res = await this.$xhr('get', `${EXAM_LOGININFO}${this.id}`);
    if (res.data.code === 0) {
      this.examName = res.data.data.title;
      this.illustrate = res.data.data.illustrate;
    }
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