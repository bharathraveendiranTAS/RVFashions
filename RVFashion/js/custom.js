// Sidebar Toggled Fuctions
const $button  = document.querySelector('#sidebar-toggle');
         const $wrapper = document.querySelector('#wrapper'); 
         $button.addEventListener('click', (e) => {
         e.preventDefault();
         $wrapper.classList.toggle('toggled');
         });


/* Side menu drop down code */

$('.menudropdown').click(function(){
      $(this).parent().toggleClass('active');
      $(this).next('ul.nav-second-level').slideToggle(400);
});
