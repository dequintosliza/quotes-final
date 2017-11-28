// var setTimer = 0;
// function clock(){
// 	let timer = <h1>{new Date().toLocaleTimeString()}</h1>;
// 	ReactDOM.render(timer,document.getElementById('timer'));	

// 	setTimer = setTimeout(function(){
// 		clock();
// 	},1000);
// };

// function stopClock(){
// 	clearInterval(setTimer);
// }

// let btn = <div>
// 				<div id='timer' className='text'></div>
// 				<div id='execute' className='text'></div>
// 				<div id='output' className='text'></div>
// 				<div id='error' className='text'></div>
// 				<div id='commands' className='text'></div>
// 				<div id='dbfile' className='text'></div>
// 				<div id='savedb' className='text'></div>
// 				<button onClick={clock}>Start Clock</button>
// 				<button onClick={stopClock}>Stop Clock</button>
// 			</div>;

// ReactDOM.render(btn,document.getElementById('rangie'));

function roll()
{
  var slider = $('.slider > .widget');
    slider.removeClass('do-slide');
  
  $('.slider > .controls > .bottom > label').html(slider.find('> li').first().attr('num') + ' of ' + slider.find('> li').size());
  
  window.sliderTimeout = setTimeout(function()
  {
    slider.addClass('do-slide');
    window.sliderTimeout = setTimeout(function()
    {
      slider.find('> li').first().appendTo(slider);
      roll();
    }, 1000);
  }, 5000);
}

$(function()
{
  $('.slider > .widget > li').each(function()
  {
    $(this).attr('num', $(this).index() + 1);
  });
  
  $('.slider a').click(function()
  {
    switch($(this).attr('href'))
    {
      case '#share':
        alert('You clicked share!\nGood for you! :)');
        break;
      case '#close':
        alert('This would trigger a widget.close() event');
        break;
      case '#like':
        alert('You clicked like!\nAwesome! :D');
        break;
      case '#search':
        alert('This would trigger a modal with a search box');
        break;
      case '#comments':
        alert('This would trigger a modal with any comments');
        break;
      case '#prev':
        window.clearTimeout(window.sliderTimeout);
        $('.slider > .widget').addClass('backwards-slide').find('> li').last().prependTo('.slider > .widget');
        window.sliderTimeout = setTimeout(function()
        {
          $('.slider > .widget').removeClass('backwards-slide');
          roll();
        }, 1000);
        break;
      case '#next':
        window.clearTimeout(window.sliderTimeout);
        $('.slider > .widget').addClass('do-slide');
        window.sliderTimeout = setTimeout(function()
        {
          $('.slider > .widget').removeClass('do-slide').find('> li').first().appendTo('.slider > .widget');
          roll();
        }, 1000);
        break;
    }
    return false;
  });
  
  roll();
});