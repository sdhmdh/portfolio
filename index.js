const onYearClick = e => {
    // To add scale animation
    const eles = document.getElementsByClassName('checkpoints');
    Array.from(eles).map(ele => {
        ele.classList.remove('checkpoints-scale');
    });
    e.currentTarget.classList.add('checkpoints-scale');

    // To show the respective content
    var child =  e.currentTarget
    var parent = child.parentNode; 
    const index = Array.prototype.indexOf.call(parent.children, child);
    const contentElements = document.getElementsByClassName('content-box')[0].children;
    Array.from(contentElements).map((ele,i) => {
        if(i === index){
            $(ele).css({'display':'block'});
        }else{
            $(ele).css({'display':'none'});
        }
    });
   
}

$('.nav-item').on('click', () => {
    $(".navbar-collapse").collapse('hide');
})