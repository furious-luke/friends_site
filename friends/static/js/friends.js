$(document).ready(function() {
    var cur_width = 55.0;
    var accel = 0.0;
    var vel = 0.0;
    var cur_note = $('.d5');

    setInterval( update_meter, 3000 );
    function update_meter() {
        accel = Math.random()*0.08 - 0.04;
    }

    setInterval( update_width, 100 );
    function update_width() {
        vel += accel;
        if( vel > 0.4 )
            vel = 0.4;
        if( vel < -0.4 )
            vel = -0.4;
        cur_width += vel;
        if( cur_width > 100.0 )
            cur_width = 100.0;
        if( cur_width < 0.0 )
            cur_width = 0.0;
        if( cur_width < 20.0 )
            $('.meter').addClass('progress-danger').removeClass('progress-warning');
        else if( cur_width < 40.0 )
            $('.meter').addClass('progress-warning').removeClass('progress-danger').removeClass('progress-info');
        else if( cur_width < 80.0 )
            $('.meter').addClass('progress-info').removeClass('progress-warning').removeClass('progress-success');
        else
            $('.meter').addClass('progress-success').removeClass('progress-info');
        $('.bar').width(cur_width.toString() + '%');

        var new_note = $('.d' + Math.floor(cur_width/(100/12.0)).toString());
        if( !new_note.is(cur_note) ) {
            var tmp = new_note;
            cur_note.fadeOut(complete=function(){
                cur_note = tmp;
                cur_note.fadeIn();
            });
        }
    }
});
