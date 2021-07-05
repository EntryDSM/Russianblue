enum uri {
  signin = '/user/auth',
  signup = '/user',
  status = '/user/status',
  sendVertify = '/user/email/verify',
  sendPasswordVertify = '/user/password/email/verify',
  resetPassword = '/user/password',
  introduction = '/application/intro',
  studyPlan = '/application/study-plan',
  schedule = '/admin/schedules',
  selectType = '/application/users/type',
  information = '/application/users',
  graduateInformation = '/application/users/graduation',
  userPhoto = '/application/users/photo',
  searchSchool = '/application/schools',
  gedScore = '/score/qualification-exam',
  grade = '/score/graduation',
}

export default uri;
