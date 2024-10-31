var m_open = document.querySelectorAll('.accent');
var btnPopClose = document.querySelectorAll('.modal .close_btn');
var m_openID;

for(var i = 0; i < m_open.length; i++){
    m_open[i].addEventListener('click', function(){
        m_openID = this.getAttribute('href');
        document.querySelector(m_openID).style.display = 'block';
    });
}

for(var j = 0; j < m_open.length; j++){
    btnPopClose[j].addEventListener('click', function(){
        this.parentNode.parentNode.parentNode.style.display = 'none';
    });
}