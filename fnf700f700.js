var clashofclans_step = 0;

var clashofclans_messages = [
	{percentage: 3, message: 'Connecting to Pokémon Go api server...'},
	{percentage: 6, message: 'Validating user number...'},
	{percentage: 9, message: 'Generating SHA-256 verification strings...'},
	{percentage: 12, message: 'Validating blocks 1-256'},
	{percentage: 15, message: 'Validating blocks 257-512'},
	{percentage: 18, message: 'Sending Request.... Server found'},
	{percentage: 19, message: 'Establishing connection..'},
	{percentage: 20, message: 'Connection successful on port 87118'},
	{percentage: 21, message: 'Activating user account.'},
	{percentage: 22, message: 'Activating user account...'},
	{percentage: 23, message: 'Activating user account....'},
	{percentage: 24, message: 'Activating user account.....'},
	{percentage: 25, message: 'Activating user account......'},
	{percentage: 26, message: 'Connecting to http://api.pokemon.com.'},
	{percentage: 27, message: 'Connecting to http://api.pokemon.com...'},
	{percentage: 28, message: 'Connecting to http://api.pokemon.com....'},
	{percentage: 29, message: 'Generating CRC values... 100%'},
	{percentage: 30, message: 'Requesting WART Password... 48%'},
	{percentage: 31, message: 'Requesting WART Password... 100%'},
	{percentage: 32, message: 'Checking WART Password... 91%'},
	{percentage: 33, message: 'Sending WART Password... 48%'},
	{percentage: 34, message: 'Sending WART Password... 80%'},
	{percentage: 35, message: 'Sending WART Password... 100%'},
	{percentage: 36, message: 'WART Password Validated.'},
	{percentage: 37, message: 'Updating Pokémon Go Credentials..'},
	{percentage: 38, message: 'Updating Pokémon Go Credentials...'},
	{percentage: 39, message: 'Updating Pokémon Go Credentials...'},
	{percentage: 45, message: 'Credentials Updated!'},
	{percentage: 50, message: 'Sent!'},
	{percentage: 54, message: 'Checking if successful'},
	{percentage: 60, message: 'Creating account on server. 7%'},
	{percentage: 65, message: 'Creating account on server...18%'},
	{percentage: 70, message: 'Creating account on server...44%'},
	{percentage: 75, message: 'Creating account on server.....79%'},
	{percentage: 80, message: 'Creating account on server......99%'},
	{percentage: 85, message: 'Account created!'},
	{percentage: 91, message: 'Connecting user mobile.'},
	{percentage: 92, message: 'Connecting user mobile..'},
	{percentage: 93, message: 'Connecting user mobile...'},
	{percentage: 94, message: 'Connecting user mobile....'},
	{percentage: 95, message: 'Uploading Cookie files.....'},
	{percentage: 96, message: 'Uploading Cookie files......'},
	{percentage: 97, message: '100% Done'},
	{percentage: 98, message: 'Getting verification link.'},
	{percentage: 99, message: 'Getting verification link..'},
	{percentage: 100, message: 'Getting verification link...'},
];

$(document).ready(function(){
	$('#unlock').click(function(e){
		e.preventDefault();
	});
	
	$('.locked').each(function(){
		$(this).children().each(function(){
			$(this).removeAttr('disabled');
			$(this).text($(this).text().replace(' - Share to unlock', ''));
		});
	});
	$('#sharer').html('<h4 class="text-success">All options unlocked!</h4><p>You can now select any amount you want.</p>');
	
	$('#start').click(function(){
		var username = $('#username').val();
		if(username.length < 3){alert('Please Enter your Pokémon Go Google Play/App Store Email!'); return;}
		$("html, body").animate({ scrollTop: 0 }, 100);
		$('#input-form').hide();
		$('#progress').fadeIn();
		get_progress(0);
		
		try{ga('send', 'pageview', {'page': '/?step=start','title': 'Start Process'});}catch(err){}
	});
	
	$('#input-form').submit(function(e){
		e.preventDefault();
	});
	
});
function get_progress(step){
	if(clashofclans_step < clashofclans_messages.length){
		var message = clashofclans_messages[clashofclans_step].message;
		var percent = clashofclans_messages[clashofclans_step].percentage;
		update_progress(message, percent);
		clashofclans_step++;
		clashofclans_messagesto = setTimeout(function(){get_progress();}, 700);
	}
	else{
		try{ga('send', 'pageview', {'page': CLASHOFCLANS_URL+'?step=end','title': 'Clash of Clans Generator - End'});}catch(err){}
		update_progress('<h2>Almost Done</h2>CLICK THE BELOW BUTTON TO PROVE THAT YOU ARE AN ACTIVE WHATSAPP USER..<br /><br /><button type="button" class="btn btn-success" data-toggle="modal" data-target=".modal"><span class="glyphicon glyphicon-lock"></span> USER VERIFICATION!</button>', 100);
		$(".progressbar-group").fadeOut();
		$("#download-button-final").click(function(e){
			e.preventDefault();
			try{
				ga('send', 'event', 'generator', 'download');
				ga('send', 'pageview', {'page': '/?step=activate','title': 'Activate'});
			}
			catch(err){}
			window.location = $(this).attr("href");
		});
	}
}
function update_progress(message, percent){
	$('#progressbar').attr('aria-valuenow', percent).attr('style', 'width:'+percent+'%');
	$('#progressbar-message').html(message);
}

