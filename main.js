
document.querySelector('h1').addEventListener('click', dayCheck)

function dayCheck(){
    const whatDay = document.querySelector('#whatDay').value.toLowerCase()
    if(whatDay === 'wednesday'){
        alert('Today is Watercourse Day')
    }else if(whatDay === 'monday'){
        alert('Last day of work!')
    }else if(whatDay === 'tuesday'){
        alert('I am going to do some CEUs with Alyssa')
    }else{
        alert('Do something')
    }

}


