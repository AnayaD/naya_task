(function() 
 {
  var allQuestions = [{
    question: "The famous painting 'Starry Night' is painted by which of the following artists ?",
    options: ["Pablo Picasso", "Vincent Van Gogh", "Leonardo Da Vinci", "Michelangelo"],
    answer: 1
  }, {question: "Electric bulb filament is made of",
  options: ["Copper", "Aluminum", "lead", "Tungsten"],
  answer: 3
}, {
  question: "Raja Harishchandra, an early Indian film was produced by",
  options: ["Dada Saheb Phalke", "Ashok Kumar", "Ardeshir Irani","Gurudatt"],
  answer: 0
},{
  question: "Which of the following is used in Pencils ?",
  options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
  answer: 0
}, {
  question: "Chemical formula of water ?",
  options: ["NaA1O2", "H2O", "Al2O3", "CaSiO3"],
  answer: 1
},{
  question: "Which one of these is a wind instrument ?",
  options: ["Harmonium", "Sitar", "Tabla", "Guitar"],
  answer: 0
},{
  question: "Whashing soda is the comman name for",
  options: ["Sodium Carbonate", "Calcium Bicarbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
  answer: 0
},{
  question: "Which one of the following personalities is not related to music ?",
  options: ["Hariprasad Chaurasia", "Bach", "Ludvig van Beethoven", "Rembrandt"],
  answer: 3
},{
  question: "'King Lear' was the work of which of the following ?",
  options: ["Jane Austen", "William Wordsworth", "William Shakespeare", "John Milton"],
  answer: 2
},{
  question: "Used as a lubricant",
  options: ["Graphite", "Silica", "Iron Oxide", "Diamond"],
  answer: 0
  }
    ];
  var opt = '';
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
  var selectedOpt = '';  
  nextQuestion();
  window.send_id = function(id){
    opt= document.getElementById(id).value;
    }

    window.nextqs = function(){
      chooseOption();
        if (!selectOptions[quesCounter]) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    }
  
  
  function createElement(index) 
    {
        var element = $('<div class = "container-fluid"  >'); 
        var col = $('<div class = "col-10 offset-1" id = "question">')
      
        var question = $('<div class = "row"  id = "question-content" >').append(allQuestions[index].question);
        col.append(question);

        var butt =  $('<div class = "row" style = "height:45vh">'); 
        butt.append(Buttons(index));
        col.append(butt);
        element.append(col);
        return element;
    }
  
  function Buttons(index) 
    {
        var optItems = $('<div class = "col-10 offset-1" id: "options">');

        var main = $('<div class = "container-fluid  ">');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<div class = "row"  >');
          input = '<button  id = "opt'+i+'" onclick = "send_id(this.id)" name="answer" value = "'+allQuestions[index].options[i]+'"style = "width:100%; margin-bottom: 10px;" >'+ allQuestions[index].options[i] + '</button>';
          item.append(input);
          main.append(item);
        }

        item = $('<div class = "row"  id = "submit">');
        input = '<button  id="next" name="answer" onclick = "nextqs()" style = "width:100%; margin-bottom: 10px;" > Submit </button>';
        item.append(input);
        main.append(item);
        optItems.append(main);
        return optItems;
  }
  
  

  

  function chooseOption() 
    {
      selectOptions[quesCounter] = opt;
       
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].options[allQuestions[i].answer]) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();