$(document).ready(function() {
  $('#scoreButton').click(function(event) {
    event.preventDefault(); 
    var totalScore = 0;
    var maxScore = 50; 

    for (var i = 1; i <= 10; i++) {
      totalScore += parseInt($('input[name="question' + i + '"]:checked').val(), 10) || 0;
    }

    var scorePercentage = (totalScore / maxScore) * 100;
    var resultText = '';
    var adviceText = '';

    if (scorePercentage >= 20 && scorePercentage <= 40) {
      resultText = 'Excellent Anger Management 💪 ';
      adviceText = 'Keep up the good work and continue to use your strategies to manage anger effectively.';
    } else if (scorePercentage > 40 && scorePercentage <= 60) {
      resultText = 'Good Anger Management 😊 ';
      adviceText = 'You have a good handle on your anger, but there may be room for improvement.';
    } else if (scorePercentage > 60 && scorePercentage <= 80) {
      resultText = 'Could Do Better 😑 ';
      adviceText = 'Consider exploring new strategies for managing anger, such as mindfulness or counseling.';
    } else if (scorePercentage > 80) {
      resultText = 'Struggles with Anger 😒 ';
      adviceText = 'It may be beneficial to seek support from professionals or anger management programs.';
    }

    $('#test-results').html('Your Anger Management Test Score: ' + scorePercentage.toFixed(2) + '%<br>' +
                            '<strong>' + resultText + '</strong><br>' +
                            adviceText).show();
  });
});


