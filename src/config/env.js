const test = (() => {
  if (/cpsdb61.com/.test(window.location.hostname) || /test.com/.test(window.location.hostname)) {
    return 'test';
  } else if (/cpsdb.com/.test(window.location.hostname)) {
    return 'online';
  }
  return 'local';
})();
const LOCAL_URL = '.test.com';
const ENTERPRISE_BASE_URL = (() => {
  switch (test) {
    case 'test':
      return '//ep.cpsdb61.com/';
    case 'online':
      return '//ep.cpsdb.com/';
    default :
      return location.hostname;
  }
})();
const BASE_URL = (() => {
  switch (test) {
    case 'test':
      return '//base.cpsdb61.com/';
    case 'online':
      return '//base.cpsdb.com/';
    default :
      return location.hostname;
  }
})();
const EXAM_BASE_URL = (() => {
  switch (test) {
    case 'test':
      return '//exam.cpsdb61.com/';
    case 'online':
      return '//exam.cpsdb.com/';
    default :
      return location.hostname;
  }
})();
const DECLARE_BASE_URL = (() => {
  switch (test) {
    case 'test':
      return '//dec.cpsdb61.com/';
    case 'online':
      return '//dec.cpsdb.com/';
    default :
      return location.hostname;
  }
})();
const IMAGE_SERVER_URL = (() => {
  switch (test) {
    case 'test':
      return '//pic.cpsdb61.com/';
    case 'online':
      return '//pic.cpsdb.com/';
    default :
      return location.hostname;
  }
})();
const DOMAIN = (() => {
  switch (test) {
    case 'test':
      return 'cpsdb61.com';
    case 'online':
      return 'cpsdb.com';
    default :
      return location.hostname.indexOf(LOCAL_URL) >= 0 ? LOCAL_URL : location.hostname;
  }
})();

// api
// 登录
const EXAM_LOGIN = `${DECLARE_BASE_URL}publics/examinee/login`;
// 获取考试题目
const EXAM_ALLSUBJECTS = `${EXAM_BASE_URL}exams/declareexamination/allsubjects/`;
// 考生答题提交
const EXAM_SUBMISSION = `${EXAM_BASE_URL}/exams/declareexamination/submission`;
// 登录页面获取 + id
const EXAM_LOGININFO = `${EXAM_BASE_URL}/platform/declareexamination/logininfo/`;

export {
  LOCAL_URL,
  test,
  ENTERPRISE_BASE_URL,
  BASE_URL,
  EXAM_BASE_URL,
  DECLARE_BASE_URL,
  IMAGE_SERVER_URL,
  DOMAIN,
  EXAM_LOGIN,
  EXAM_ALLSUBJECTS,
  EXAM_SUBMISSION,
  EXAM_LOGININFO,
};
