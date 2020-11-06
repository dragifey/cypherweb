filterSelection('all')

function filterSelection (c) {
    let x,
        i;
    x = document.getElementsByClassName('command');
    if (c === 'all') {
        c = '';
    }
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], 'open');
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], 'open');
        }
    }
}

function w3AddClass (element, name) {
    let arr1,
        arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function w3RemoveClass (element, name) {
    let arr1,
        arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)

const btnContainer = document.getElementById('categories');
const btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('highlight');
        current[0].className = current[0].className.replace('highlight', '');
        this.className += ' highlight';
    });
}

