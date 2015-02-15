angular.module('colibri.filters', [])
.filter("filterjobName",function(){
  return function(jobId){
    return "3349 Toyota - Toyota on board - knowledge transfer";
  }
})
//  jobId jobs.3392.label search
.filter("filtertaskName",function(){
  return function(taskId){
    return "Frontend Developed";
  }
})
//  jobId tasks.9.label search