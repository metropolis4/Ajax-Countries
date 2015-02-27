$(document).on('ready', function(){
    $('body').on('click', '.load', function(){
        $('.load').addClass('disabled');
        var dataLink = $('.load').attr('data-link');
        $.get('/load', {dataLink: dataLink}, function(data){
            var country = $('.eachCountry');
            var allCountries = $('.countries');
            data.map(function(val){
                var $el = country.clone();
                $el.removeClass('hiding');
                $el.find('.name').text(val.name);
                $el.find('.frenchName').append('  ' + val.frenchName);
                $el.find('.localName').append('  ' + val.localName);
                $el.find('.region').append('  ' + val.region);
                allCountries.append($el);
            });

        });

    });
});