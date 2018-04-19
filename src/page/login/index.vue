<template>
  <div>
    <header class="header header-bj">
      <div class="container text-center"> <img class="ks-logo" :src="logo" />
        <h1>中国商品诚信数据库考试系统</h1>
      </div>
    </header>
    <section class="content content-bj">
      <div class="container text-center">
        <h3>中国商品诚信数据库第一批申报官考试</h3>
        <p>考试说明：“试卷结构”和“考试内容与要求”部分保持不变。“参考样题”有部分更新 ，突出主干和重点知识，以人类历史的发展演变和重大事件为主要考查载体，
          重在考查学科素养与学科思维水平。贴近教学实际，从历史角度关照社会与现实。强调学科思想与基本方法，注重考查学生运用基础知识、
          基本方法，从不同角度发现问题、分析问题和解决问题的能力。</p>
      </div>
    </section>
    <section class="content">
      <div class="container"> 
        <!--考生登录考生-->
        <div class="col-md-6 col-md-offset-3">
          <form>
            <div class="form-pding row clearfix">
              <div class="col-md-3 form-rig">
                <label for="">姓名</label>
              </div>
              <div class="col-md-9">
                <input type="text" class="form-control" v-model="param.name">
                <span class="glyphicon glyphicon-remove error"></span> </div>
            </div>
            <div class="form-pding row clearfix">
              <div class="col-md-3 form-rig">
                <label for="">身份证号码</label>
              </div>
              <div class="col-md-9">
                <input type="text" class="form-control" v-model="param.idnumber">
                <span class="glyphicon glyphicon-ok correct"></span> </div>
            </div>
            <div class="form-pding row clearfix">
              <div class="col-md-3 form-rig">
                <label for="">手机号码</label>
              </div>
              <div class="col-md-9">
                <input type="text" class="form-control" v-model="param.cellphone">
              </div>
            </div>
            <div class="form-pding row clearfix">
              <div class="col-md-3 form-rig"> </div>
              <div class="col-md-9">
                <button class="btn" @click="login">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setCookie } from '@/config/cookie';
import logo from '@/assets/img/logo.png';
import { EXAM_LOGIN } from '@/config/env';

export default {
  name: 'login',
  data() {
    return {
      param: {
        name: this.name,
        idnumber: this.idnumber,
        cellphone: this.cellphone,
      },
      logo,
    };
  },
  methods: {
    async login() {
      const res = await this.$xhr('post', EXAM_LOGIN, this.param);
      if (res.data.code === 0) {
        setCookie('username', this.username, 1000 * 60);
        setCookie('exam_user', res.data.data.token, 1000 * 60);
        this.$router.push('/login/msg');
      }
    },
  },
  mounted() {
    window.sessionStorage.setItem('exam_id', this.$route.params.id);
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