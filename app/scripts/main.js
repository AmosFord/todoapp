$(document).ready(function(){

	$('#inputitem').keydown(function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      task_enter();
	      return false;
	    }
  	});





	
$('body').on('mouseenter', '.item',
    	function(){
    		$(this).children('div').children('.deletebut').removeClass("visible-xs-inline-block visible-sm-inline-block").show();
    	});
	
$('body').on('mouseleave', '.item',
      function(){
        $('.deletebut').addClass("visible-xs-inline-block visible-sm-inline-block");
      });


	function task_enter(){
    	var value = $('#inputitem').val();
    	var listStart = '<li class="item no-gutters col-xs-12"><div class="btn col-xs-2"><i class="circlebut bullets fa fa-circle-thin"></i></div><div class="col-xs-8 btn margin-bottom listitem"><p>';
    	var listEnd = '</p></div><div class="no-gutters btn col-xs-2"><i class="deletebut fa fa-times"></i></div></li>';
  		

    	value = escape(value);	

    		if(value.length > 3 && value != "Default text" ){
        	$(listStart+value+listEnd).appendTo('ul');
    		}
    		else {
    			 alert('Input must be at least 4 characters');
    		}
    		$('#taskform')[0].reset();
  		countTasks();
	}

	function escape(string) {
		var htmlEscapes = {
		  '&': '&amp;',
		  '<': '&lt;',
		  '>': '&gt;',
		  '"': '&quot;',
		  "'": '&#x27;',
		  '/': '&#x2F;'
		};

		// Regex containing the keys listed immediately above.
		var htmlEscaper = /[&<>"'\/]/g;

		return ('' + string).replace(htmlEscaper, function(match) {
		    return htmlEscapes[match];
		  });

	};

	$('li').on('click','#enter', function(el){
    $(this).parent().remove()
	});

	$('body').on('click', '.deletebut',
	      function(el){
	    $(this).parent().parent().remove()
	    countTasks();
	    });

	$('body').on('click', '.circlebut',
      function(){
        $(this).toggleClass("fa-circle-thin fa-check-circle-o");
        $(this).parent().parent().children('.listitem').children('p').toggleClass('stroked');
      });

	function countTasks(){
		var n = $('li').size() -1;
		$( ".count" ).empty();
		$("<span>"+ n + "</span>").appendTo('.count');
		
	}

	$('body').on('click', '.statusButton',
      function(){
		$('.statusButton').removeClass('buttonborder');
		$(this).addClass('buttonborder ');

		if($(this).hasClass('activebtn')) {
			$('.stroked').parent().parent().hide();
			$('p').not('.stroked').parent().parent().show();
			countActiveTasks();
		}

		else if($(this).hasClass('completebtn')) {
			$('.stroked').parent().parent().show();
			$('p').not('.stroked').parent().parent().hide();
			countCompleteTasks();
		}

		else {
			$('.stroked').parent().parent().show();
			$('p').not('.stroked').parent().parent().show();
			countTasks();
		}
         
      });
		

	$('body').on('click', '.activebtn',
      function(){
		$('.stroked').parent().parent().hide();
        
      });

	function countCompleteTasks(){
		var n = $('.stroked').size();
		$( ".count" ).empty();
		$("<span>"+ n + "</span>").appendTo('.count');
		
	}

	function countActiveTasks(){
		var n = $('p').not('.stroked').size();
		$( ".count" ).empty();
		$("<span>"+ n + "</span>").appendTo('.count');
		
	}
      
});



  
