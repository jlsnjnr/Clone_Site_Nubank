	$('nav.mobile').click(function(){
		//O que vai acontecer quando clicarmos na nav.mobile!
		var listaMenu = $('nav.mobile ul');


		if(listaMenu.is(':hidden') == true){
			//fa fa-times
			//fa fa-bars
			//var icone =  $('.botao-menu-mobile i');
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
            listaMenu.slideToggle();
            
            var out = $('.teste');
            out.addClass('fade');
		}
		else{
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
            listaMenu.slideToggle();

            var out = $('.teste');
            out.removeClass('fade');

		}

	});