import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Image from './Return.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

const text = [
  'Добро пожаловать на сайт тестирования по игре Counter-Strike: Global Offensive (CS:GO)!',
  'Хотите проверить свои знания и навыки в CS:GO? Наш тест поможет вам узнать, насколько хорошо вы разбираетесь в этой популярной игре. Пройдите наш тест и узнайте, насколько вы крут в CS:GO!',
  'Наш тест включает вопросы о механике игры, тактике, оружии, картам и многом другом. После завершения теста вы получите результаты и сможете узнать, на что вам стоит обратить особенное внимание, чтобы улучшить свою игру.',
  'Пройдите тест и станьте настоящим мастером CS:GO!'
]

const termin = [
  {
    title:'Флик',
    termin:' (Flick, буквально выстрел со встряской) — метод стрельбы, при котором прицел резко отдергивается в сторону врага и сразу же производится выстрел. Прием используется опытными игроками, и требует умения быстро наводиться на цель и высокой скорости реакции.'
  },
  {
    title:'Фраг',
    termin:'убитый противник, а также очко, начисляемое за его убийство.'
  },
  {
    title:'Плэнт',
    termin:'место для закладки бомбы. Обычно на одной карте существует один или два плэнта, отмеченных буквами А и В соответственно.'
  },
  {
    title:'КТ',
    termin:'спецназовец.'
  },
  {
    title:'T',
    termin:'террорист.'
  },
  {
    title:'Бот',
    termin:'игрок, управляемый искусственным интеллектом игры. Также часто под данным термином подразумевается очень плохой игрок, понимание игры и действия которого сравнимы с управляемым компьютером игроком.'
  },
  {
    title:'Хедшот, Голова ',
    termin:'прямое попадание в голову, (выражение «поставить голову»).'
  },
  {
    title:'Эйс, Ace ',
    termin:'уничтожение всей вражеской команды одним игроком.'
  },
  {
    title:'Прострел',
    termin:'убийство игрока сквозь текстуру (стену).'
  },
  {
    title:'Дизмораль',
    termin:'настраивание команду на проигрыш, уничтожение командного духа, деморализация.'
  }
] 

const questions = [
  {
    title:'После того как один игрок покидает игру в матче, то...',
    variants:['Появляется бот, который заменяет его.', 'Команда остается играть в 4.', ' Игроки на выбор могут позвать кого-то из друзей в игру.'],
    correct: 1,
  },
  {
    title:'Раньше человека за плохой уровень игры, его называли "нуб", теперь же.',
    variants:['Креветка', 'Рак', 'Сильвер'],
    correct: 2,
  },
  {
    title:' В игре у каждой стороны, отличаются цены на оружие. К примеру молотов, он...',
    variants:['Дешевле у T', 'Дешевле у CT', 'Цены одинаковы  '],
    correct: 0,
  },
  {
    title:'Фармилка - это...',
    variants:['AWP', 'Игра с ПП, не закупая новое оружие', 'Убийство afk оппонентов'],
    correct: 1,
  },
  {
    title:'Самое быстрое оружие в игре.',
    variants:['Scout', 'Нож', 'Bizon'],
    correct: 0,
  },
  {
    title:'Максимальная сумма денег, которую вы можете получить в игре',
    variants:['16000', '10000', '20000'],
    correct: 0,
  },
  {
    title:'Зажав кнопку shift ваш прыжок будет слышен врагу?',
    variants:['Да', 'Нет', 'В зависимости от высоты'],
    correct: 0,
  },
  {
    title:'При попадании коктейлем молотовым, игроки замедляются?',
    variants:['Да', 'Нет', 'Зависит от того, сколько горит коктейль'],
    correct: 0,
  },
  {
    title:'При зажатом shift, вы можете подобрать бесшумно гранату, бомбу, оружие?',
    variants:['Да', 'Нет', 'Только Бомба'],
    correct: 0,
  },
  {
    title:'Кто сильнейший игрок',
    variants:['s1mple', 'donk', 'Monesy'],
    correct: 1,
  },
]

const menu = [
  {
    title: 'Home',
    image: "image1.jpg"
  },
  {
    title: 'Browse',
    image: "image2.jpg"
  },
  {
    title: 'Songs',
    image: "image3.jpg"
  },
  {
    title: 'Playlists',
    image: "image4.jpg"
  },
  {
    title: 'Personalized picks',
    image: "image5.jpg"
  }
]

const TextHead = ({list}) =>{
  return(
    <div className='head-container'>
      {list.map(text => <p>{text}</p>)}
    </div>
  )
}

const PaginationList = ({ list }) => {
  const [selectedLetter, setSelectedLetter] = React.useState(list[0].title.charAt(0).toUpperCase());

  let alphabet = [];

  for (let i = 0; i < list.length; i++) {
    let firstLetter = list[i].title;
    let isLetter = false;
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j].toUpperCase() === firstLetter[0].toUpperCase()) {
        isLetter = true;
        break;
      }
    }

    if (isLetter===false) {
      alphabet.push(firstLetter[0].toUpperCase());
    }
  }

  alphabet = alphabet.sort();

  const filteredList = list.filter(item => item.title.charAt(0).toUpperCase() === selectedLetter);

  return (
    <div>
      <div>
        {alphabet.map(letter => (
          <span
            key={letter}
            className={selectedLetter === letter ? "active" : ""}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
      <div>
        {filteredList.map((item, index) => (
          <p key={index}>{item.title} - {item.termin}</p>
        ))}
      </div>
    </div>
  );
};

function Result({ correct }) {
  return(
    <>
      <div>{
          correct <= 5 ? (<h1>Нуб</h1>) : (<h1>Про</h1>)
        }</div>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button className='Refresh'>Начать заново</button>
      </a>
    </>
  )
}

function Game( {step, question, onClickVariant} ) {
  const percentage = Math.round((step/questions.length) * 100);

  return(
    <>
      <div className='progress'>
        <div style ={{width: `${percentage}%`}}></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {
          question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>
            {text}
            </li>))
        }
      </ul>
    </>
  )
}

const Model = ({ open, setOpen, children }) => {
  return (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="feather">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        {children}
      </div>
    </div>
  );
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className='App'>
      <button onClick={() => setOpen(true)} className='open'>
        Пройти тест!
      </button>
      <Model open={open} setOpen={setOpen}>
        {
          step !== questions.length ? (
            <Game step={step} question={question} onClickVariant={onClickVariant} />
          ) : (
            <Result correct={correct} />
          )
        }
      </Model>
    </div>
  );
}


function Head(){
  return(
    <div className='head-container'>
      <h1>CS GO</h1>
      <TextHead list = {text}/>
      <PaginationList list =  {termin}/>
    </div>
  );
}

root.render(
  <>
    <Head/>
    <App />
  </>
);

