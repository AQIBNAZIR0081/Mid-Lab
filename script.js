
const Questions = document.getElementById('question');
const answers = document.getElementById('answer');

function addquestion(){

    const card = document.querySelector('.faq-container');
    const cardbody = document.createElement('div');
    const cardans = document.createElement('div');
    const Q_input = document.createElement('p');
    Q_input.textContent = (Questions.value);
    const Q_ans = document.createElement('p');
    Q_ans.textContent = (answers.value);

    const cross = document.createElement('button');
    cross.innerHTML = `<i class="fas fa-chevron-down"></i>`;

    cardbody.appendChild(Q_input);
    cardbody.appendChild(cardans);
    cardbody.appendChild(cross);
    cardans.appendChild(Q_ans);
    card.appendChild(cardbody);
    

    cardbody.style.border = '1px solid black';
    cardbody.style.display = 'flex';
    cardbody.style.justifyContent = 'space-between'
    cardbody.style.padding = '15px';
    Q_input.style.marginLeft = '10px';
    cross.style.marginRight = '10px';
    cardbody.style.borderRadius = '5px';
    cross.style.border = 'none';
    cardans.style.display = 'none';


    cross.addEventListener('click',()=>{
        cross.innerHTML = `<i class="fas fa-times"></i>`;
        cross.addEventListener('click',()=>{
            card.removeChild(cardbody);
        })
        cardans.style.display = 'flex';
        cardans.style.alignSelf = 'left';
    })

}