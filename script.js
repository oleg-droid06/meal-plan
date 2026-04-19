// === Дані меню по днях тижня ===
// Для кожного дня є "нетренувальна" та "тренувальна" версія
// Редагувати тут: змінити страви, грами, білок

const WEEK_MENU = {
  mon: {
    label: 'Понеділок',
    default: {
      training: false,
      meals: [
        {
          time: '12:00',
          name: 'Обід (офіс)',
          items: ['Куряча грудка 200 г (запечена ввечері, у контейнері)', 'Броколі на пару 200 г'],
          protein: '~50 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Грецький йогурт 150 г', 'Чорниця заморожена 80 г'],
          protein: '~15 г'
        },
        {
          time: '19:00',
          name: 'Вечеря (вдома)',
          items: ['3 яйця + 3 білки, омлет на оливковій олії', 'Салат: шпинат 120 г + руккола + помідор + EVOO', 'Волоські горіхи 20 г'],
          protein: '~32 г'
        }
      ],
      total: '≈97 г + молочка/whey = ~125–135 г',
      chips: ['Зелень', 'Ягоди', 'Броколі', 'Волоські горіхи']
    },
    training: {
      training: true,
      meals: [
        {
          time: '12:00',
          name: 'Обід після тренування',
          items: ['Куряча грудка 200 г', 'Гречка 50 г сухої або перловка (тільки у тренувальний день)', 'Броколі 150 г'],
          protein: '~52 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Грецький йогурт 200 г', 'Чорниця 80 г', 'Волоські горіхи 15 г'],
          protein: '~20 г'
        },
        {
          time: '19:00',
          name: 'Вечеря',
          items: ['3 яйця + 3 білки', 'Салат: шпинат + руккола + помідор + EVOO'],
          protein: '~30 г'
        }
      ],
      total: '≈102 г + добавки = ~130 г',
      chips: ['Трен. день', 'Крупа в обід', 'Ягоди', 'Зелень']
    }
  },
  tue: {
    label: 'Вівторок — рибний',
    default: {
      training: false,
      meals: [
        {
          time: '12:00',
          name: 'Обід (офіс)',
          items: ['Скумбрія або сардини 180 г (консерва у власному соку або запечена ввечері)', 'Цвітна капуста 200 г'],
          protein: '~42 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Сир кисломолочний 150 г', 'Мигдаль 15 г'],
          protein: '~22 г'
        },
        {
          time: '19:00',
          name: 'Вечеря (вдома)',
          items: ['3 яйця + 3 білки', 'Салат: мангольд + шпинат + помідор + EVOO', 'Гарбузове насіння 15 г'],
          protein: '~30 г'
        }
      ],
      total: '≈94 г + молочка = ~125 г',
      chips: ['Жирна риба', 'Зелень', 'Omega-3']
    },
    training: null
  },
  wed: {
    label: 'Середа — верх тіла',
    default: {
      training: true,
      meals: [
        {
          time: '12:00',
          name: 'Обід після тренування',
          items: ['Філе індички 150 г', 'Печінка яловича 100 г (тижневий must-have — холін, B12)', 'Гречка 50 г сухої — єдина порція крупи на день'],
          protein: '~55 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Грецький йогурт 200 г', 'Ожина 80 г'],
          protein: '~18 г'
        },
        {
          time: '19:00',
          name: 'Вечеря (вдома)',
          items: ['3 яйця + 3 білки', 'Салат: шпинат + руккола + EVOO', 'Квашена капуста 100 г'],
          protein: '~28 г'
        }
      ],
      total: '≈101 г + whey = ~130 г',
      chips: ['Трен. день', 'Печінка (1×/тижд)', 'Ферментоване', 'Крупа']
    },
    training: null
  },
  thu: {
    label: 'Четвер — бобовий',
    default: {
      training: false,
      meals: [
        {
          time: '12:00',
          name: 'Обід (офіс)',
          items: ['Куряча грудка 120 г', 'Сочевиця варена 150 г (1 з 2 бобових тижня)'],
          protein: '~46 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Сир кисломолочний 150 г', 'Волоські горіхи 15 г'],
          protein: '~22 г'
        },
        {
          time: '19:00',
          name: 'Вечеря (вдома)',
          items: ['3 яйця + 3 білки', 'Салат: шпинат 120 г + помідор + огірок + EVOO'],
          protein: '~28 г'
        }
      ],
      total: '≈96 г + молочка = ~125 г',
      chips: ['Бобові (1/2)', 'Зелень']
    },
    training: null
  },
  fri: {
    label: 'П\'ятниця — друга рибна',
    default: {
      training: false,
      meals: [
        {
          time: '12:00',
          name: 'Обід (офіс)',
          items: ['Лосось або форель 200 г (запечена)', 'Броколі 200 г'],
          protein: '~50 г'
        },
        {
          time: '16:00',
          name: 'Офісний перекус',
          items: ['Грецький йогурт 150 г', 'Полуниця 100 г'],
          protein: '~15 г'
        },
        {
          time: '19:00',
          name: 'Вечеря (вдома)',
          items: ['3 яйця + 3 білки', 'Салат: мангольд + руккола + помідор + EVOO', 'Гарбузове насіння 15 г'],
          protein: '~30 г'
        }
      ],
      total: '≈95 г + молочка = ~125 г',
      chips: ['Жирна риба (2/2)', 'Ягоди', 'Зелень', 'Broколі']
    },
    training: null
  },
  sat: {
    label: 'Субота — день ніг',
    default: {
      training: true,
      meals: [
        {
          time: '12:00',
          name: 'Обід після тренування (вдома)',
          items: ['Нежирна яловичина 200 г (стейк або тушкована — тижневе червоне м\'ясо)', 'Кіноа 50 г сухої або броколі 200 г', 'Помідор + EVOO'],
          protein: '~58 г'
        },
        {
          time: '16:00',
          name: 'Перекус',
          items: ['Грецький йогурт 200 г', 'Чорниця 100 г', 'Волоські горіхи 20 г'],
          protein: '~22 г'
        },
        {
          time: '19:00',
          name: 'Вечеря',
          items: ['3 яйця + 3 білки', 'Салат: шпинат + руккола + EVOO', 'Мигдаль 15 г'],
          protein: '~30 г'
        }
      ],
      total: '≈110 г + молочка = ~135 г',
      chips: ['Трен. день', 'Червоне м\'ясо (1×/тижд)', 'Ягоди', 'Макс білок']
    },
    training: null
  },
  sun: {
    label: 'Неділя — відновлення',
    default: {
      training: false,
      meals: [
        {
          time: '12:00',
          name: 'Обід (вдома)',
          items: ['Куряча грудка 120 г', 'Нут варений 150 г (2 з 2 бобових тижня)', 'Помідор + EVOO'],
          protein: '~46 г'
        },
        {
          time: '16:00',
          name: 'Перекус',
          items: ['Сир кисломолочний 150 г', 'Малина 80 г'],
          protein: '~22 г'
        },
        {
          time: '19:00',
          name: 'Вечеря',
          items: ['3 яйця + 3 білки', 'Салат: шпинат + кейл + помідор + EVOO', 'Квашена капуста 100 г'],
          protein: '~28 г'
        }
      ],
      total: '≈96 г + молочка = ~125 г',
      chips: ['Бобові (2/2)', 'Ферментоване', 'Зелень', 'Ягоди']
    },
    training: null
  }
};

// === Рендер планувальника ===
function renderPlanner(dayKey, useTraining) {
  const day = WEEK_MENU[dayKey];
  if (!day) return;

  // Якщо немає окремого тренувального варіанту — fallback на default
  const variant = useTraining && day.training ? day.training : day.default;

  const container = document.getElementById('day-content');
  if (!container) return;

  let html = `<div class="summary">
    <p class="label">${day.label}${variant.training ? ' · тренувальний режим' : ''}</p>
    <p class="value">Підсумок дня: ${variant.total}</p>
    <div class="chips">`;
  variant.chips.forEach(c => {
    html += `<span class="chip">${c}</span>`;
  });
  html += `</div></div>`;

  variant.meals.forEach(m => {
    html += `<div class="meal">
      <div class="meal-head">
        <span class="meal-time">${m.time} — ${m.name}</span>
        <span class="meal-protein">${m.protein}</span>
      </div>
      <ul>`;
    m.items.forEach(i => { html += `<li>${i}</li>`; });
    html += `</ul></div>`;
  });

  container.innerHTML = html;
}

// === Ініціалізація планувальника ===
function initPlanner() {
  const dayBtns = document.querySelectorAll('.day-btn[data-day]');
  const trainingToggle = document.getElementById('training-toggle');
  let currentDay = 'mon';

  function update() {
    const useTraining = trainingToggle ? trainingToggle.checked : false;
    renderPlanner(currentDay, useTraining);

    // Оновити кнопки днів
    dayBtns.forEach(b => {
      const dk = b.dataset.day;
      const day = WEEK_MENU[dk];
      const isTrainingDay = useTraining && day && day.training;
      b.classList.toggle('training', isTrainingDay);
    });
  }

  dayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDay = btn.dataset.day;
      update();
    });
  });

  if (trainingToggle) {
    trainingToggle.addEventListener('change', update);
  }

  update();
}

// === Мобільне меню ===
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
}

// === Табі (для сторінки продуктів) ===
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn[data-tab]');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });
}

// === Авто-запуск ===
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  if (document.getElementById('day-content')) initPlanner();
  if (document.querySelector('.tab-btn[data-tab]')) initTabs();
});
