getQueryScore = () => {
  var queryScore = 0;
  getCrunchBaseScore();

}

getCrunchBaseScore = () => {
  queryScore += 1;
  console.log(queryScore);
};