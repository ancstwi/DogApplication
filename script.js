// // МЕНЮ
/*---------Блок Меню - клик на линии - открытие-----------*/

// const lines = document.querySelector('.lines');
// if (lines) {
//     lines.addEventListener("click", function (e) {
//         e.preventDefault;
//         menuBlock.classList.add('active');
//         header.classList.add('active');
//         allInfo.classList.add('active');
//         lines.classList.add('first-active');
//     });
// }

const menu = document.querySelector('.dropdown-menu');
const menuicon = document.querySelector('.menu-icon');
if (menuicon) {
  menuicon.addEventListener('click', function (e) {
    e.preventDefault;
    menu.classList.toggle('hidden');
  });
}

// function toggleMenu() {
//   const menu = document.queryElement('.dropdown-menu');
//   menu.classList.toggle('hidden'); // Toggle hidden class
// }

// function toggleMenu() {
//   const menu = document.getElementById('dropdown-menu');
//   menu.classList.toggle('hidden'); // Toggle hidden class
// }

// Event listener for clicks outside the menu
document.addEventListener('click', function (event) {
  const menu = document.querySelector('.dropdown-menu');
  const menuIcon = document.querySelector('.menu-icon');

  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.add('hidden'); // Hide menu
  }
});

// // Event listener for menu icon click
// document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

// // Theme toggle functionality
// const switchButton_1 = document.getElementById('themeSwitch');
// let isNightMode_1 = false;

// switchButton_1.addEventListener('click', () => {
//   isNightMode_1 = !isNightMode_1;
//   document.body.classList.toggle('night', isNightMode_1);
//   switchButton_1.classList.toggle('active', isNightMode_1);
// });

// // Language dropdown functionality
// const languageDropdown = document.getElementById('language-dropdown');
// const selectedLanguageText = document.getElementById('selected-language-text');
// const optionsContainer = document.getElementById('language-options');
// const optionsList = optionsContainer.querySelectorAll('.option');

// // Toggle options visibility
// languageDropdown.querySelector('.selected').addEventListener('click', () => {
//   optionsContainer.classList.toggle('hidden'); // Toggle options
// });

// // Set selected language
// optionsList.forEach((option) => {
//   option.addEventListener('click', function () {
//     selectedLanguageText.textContent = this.textContent; // Update selected text
//     optionsContainer.classList.add('hidden'); // Hide options
//     console.log('Selected language:', this.dataset.value); // Log selected value
//   });
// });

// // Close dropdown when clicking outside
// document.addEventListener('click', (event) => {
//   if (!languageDropdown.contains(event.target)) {
//     optionsContainer.classList.add('hidden'); // Hide options
//   }
// });

// // СТРАНИЦА ЗАГРУЗКИ

// // Элементы страницы загрузки
// const splashScreen = document.querySelector('.splash-screen');
// const mainContent = document.querySelector('.main-content');
// const progressBar = document.querySelector('.progress');
// const loadingText = document.querySelector('.loading-text'); // Текст "Загрузка..."

// // Функция имитации загрузки
// function simulateLoading() {
//   let width = 0;

//   const interval = setInterval(() => {
//     if (width >= 100) {
//       clearInterval(interval);

//       // Анимируем исчезновение страницы загрузки
//       splashScreen.style.opacity = '0';
//       setTimeout(() => {
//         splashScreen.style.display = 'none';

//         // Показываем основной контент
//         mainContent.style.display = 'block';
//         mainContent.style.opacity = '1';
//       }, 500);
//     } else {
//       width += 10; // Увеличиваем прогресс на 10%
//       progressBar.style.width = `${width}%`;

//       // Обновляем текст прогресса
//       loadingText.textContent = `Загрузка... ${width}%`;
//     }
//   }, 200); // Каждые 200 мс увеличиваем прогресс
// }

// // Запускаем имитацию загрузки при загрузке окна
// window.addEventListener('load', simulateLoading);

// // ИГРА ФАКТ ДНЯ

// let phrases = [
//   {
//     text: 'отправить другу смешную гифку',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif',
//   },
//   {
//     text: 'посмотреть скидки на авиабилеты',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png',
//   },
//   {
//     text: 'разобраться, о чём поют рэперы',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png',
//   },
//   {
//     text: 'Arzamas',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png',
//   },
//   {
//     text: 'расставить книги на полке по цвету',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png',
//   },
//   {
//     text: 'читать про зарплаты в Сан-Франциско',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png',
//   },
//   {
//     text: 'прочитать новости и ужаснуться в комментариях',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png',
//   },
//   {
//     text: 'попасть в поток грустных песен и вспомнить все ошибки молодости',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png',
//   },
//   {
//     text: 'посмотреть трейлер сериала и заодно первый сезон',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png',
//   },
//   {
//     text: 'проверить непрочитанное в Telegram-каналах',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png',
//   },
// ];

// function getRandomElement(arr) {
//   let randIndex = Math.floor(Math.random() * arr.length);
//   return arr[randIndex];
// }

// let button_factday = document.querySelector('.button_factday');
// let phrase = document.querySelector('.phrase');
// let advice = document.querySelector('.advice');
// let image = document.querySelector('.image_factday');
// let number = document.querySelector('.number');

// button_factday.addEventListener('click', function () {
//   let randomPhrase = getRandomElement(phrases);
//   phrase.textContent = randomPhrase.text; //или для Яндекса заменить эту строку на smoothly(phrase, 'textContent', randomElement.text); - будет плавно
//   image.src = randomPhrase.image; //а для картинок плавно так: smoothly(image, 'src', randomElement.image);
//   number.textContent = Math.floor(Math.random() * 100) + 1;
// });

// // СЧЕТЧИК-ТЕКСТ У ИГР

// function lifeSite() {
//   const start = new Date('November 26, 2024'); // Дата создания сайта
//   const life = Math.floor((new Date() - start) / (1000 * 60 * 60 * 24));

//   const suffixes = ['день', 'дня', 'дней'];
//   let suffixIndex;

//   // Определяем индекс окончания
//   if (life % 100 > 10 && life % 100 < 20) {
//     suffixIndex = 2; // Для 11-14 дней
//   } else {
//     suffixIndex = [2, 0, 1, 1, 1, 2][Math.min(life % 10, 5)];
//   }

//   document.getElementById(
//     'life_site'
//   ).innerText = `${life} ${suffixes[suffixIndex]}`;
// }

// // Вызываем функцию при загрузке страницы
// window.onload = lifeSite;

// // ФОТО-СЛАЙД

// let images_slide = [
//   {
//     text: 'Картинка 1',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif',
//   },
//   {
//     text: 'Картинка 2',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png',
//   },
//   {
//     text: 'Картинка 3',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png',
//   },
//   {
//     text: 'Картинка 4',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png',
//   },
//   {
//     text: 'Картинка 5',
//     image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png',
//   },
// ];

// const slideshow = document.querySelector('.slideshow');
// let currentIndex = -1;

// function showRandomImage() {
//   let randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * images_slide.length);
//   } while (randomIndex === currentIndex);

//   currentIndex = randomIndex;

//   slideshow.innerHTML = '';

//   const img = document.createElement('img');
//   img.src = images_slide[currentIndex].image;
//   img.alt = images_slide[currentIndex].text;
//   img.classList.add('active');

//   const caption = document.createElement('div');
//   caption.classList.add('caption');
//   caption.innerText = images_slide[currentIndex].text;

//   slideshow.appendChild(img);
//   slideshow.appendChild(caption);
// }

// showRandomImage();
// setInterval(showRandomImage, 1500);

// // ГИФКА-ПРИВЕТСТВИЕ

// window.onload = function () {
//   const notificationPanel = document.querySelector('.notification_photo');

//   // Показать панель
//   notificationPanel.style.display = 'flex';

//   // Скрыть панель через 3 секунды
//   setTimeout(() => {
//     notificationPanel.style.display = 'none';
//   }, 3500);
// };

// // СОБАКА БЕГАЕТ ПО САЙТУ

// const dog = document.getElementById('dog'); // Изменено с 'ball' на 'dog'

// // Функция для обновления позиции собачки
// function updateDogPosition(x, y) {
//   dog.style.transform = `translate(${x}px, ${y}px)`;
// }

// // Начальные позиции по осям x и y
// const startX = 300; // Задайте начальную позицию x здесь
// const startY = 300; // Задайте начальную позицию y здесь

// // Обработчик события прокрутки
// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;

//   // Нормализуем значение прокрутки от 0 до 1
//   const normalizedScroll = Math.min(
//     Math.max(scrollY / (document.body.scrollHeight - window.innerHeight), 0),
//     1
//   );

//   // Параметры спирали
//   const radius = window.innerWidth / 2.5; // Увеличенный радиус спирали
//   const turns = 4; // Количество витков спирали
//   const speedFactor = 0.2; // Увеличенный коэффициент для замедления скорости
//   const heightFactor = 700; // Высота спирали (насколько ниже опускается шарик с каждым витком)

//   // Угол для спирали, основанной на прокрутке
//   const angle = normalizedScroll * 2 * Math.PI * turns * speedFactor; // Угол в радианах

//   // Обновляем координаты
//   const x = window.innerWidth / 2 + radius * Math.sin(angle); // Горизонтальное движение
//   const y = scrollY * 0.5 + (heightFactor * angle) / (2 * Math.PI); // Вертикальное движение, основанное на прокрутке и угле

//   // Обновляем позицию собачки
//   updateDogPosition(x, y);
// });

// // Инициализация позиции собачки при загрузке страницы
// updateDogPosition(startX, startY);

// // СОБАЧКА-РАССЫЛКА

// // Функция для показа изображений
// function showImages() {
//   const newsletter = document.getElementById('newsletter');
//   newsletter.classList.remove('hidden');

//   // Показать вторую картинку через 2 секунды
//   setTimeout(() => {
//     const secondImageLink = document.getElementById('linkToPage2');
//     secondImageLink.classList.remove('hidden');
//   }, 2000);

//   // Показать крестик через 3 секунды
//   setTimeout(() => {
//     const closeButton = document.getElementById('closeButton');
//     closeButton.classList.remove('hidden');
//   }, 3000);
// }

// // Проверка состояния и установка изображений
// window.addEventListener('load', () => {
//   const firstVisit = sessionStorage.getItem('firstVisit');

//   if (!firstVisit) {
//     // Если это первый визит, показать первые изображения
//     sessionStorage.setItem('firstVisit', 'true');
//     // Здесь можно установить URL для первых изображений
//     document.getElementById('floatingImage').src = 'your-image-url.jpg';
//     document.getElementById('floatingImage2').src = 'your-second-image-url.jpg';
//   } else {
//     // Если пользователь возвращается, показываем другие изображения
//     document.getElementById('floatingImage').src = 'your-new-image-url.jpg';
//     document.getElementById('floatingImage2').src =
//       'your-new-second-image-url.jpg';
//   }

//   // Проверка прокрутки страницы
//   window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       showImages();
//     }
//   });
// });

// // Закрытие окна
// document.getElementById('closeButton').addEventListener('click', () => {
//   const newsletter = document.getElementById('newsletter');
//   newsletter.classList.add('hidden');
//   document.getElementById('linkToPage2').classList.add('hidden'); // Скрыть вторую картинку
//   const closeButton = document.getElementById('closeButton');
//   closeButton.classList.add('hidden'); // Скрыть крестик
// });

// // РАССЫЛКА ПИСЕМ ПИНА

// // Получаем ссылки на элементы
// const playButton = document.getElementById('playButton'); // Кнопка "Поиграть!"
// const noPlayButton = document.getElementById('noPlayButton'); // Кнопка "Не хочу играть..."
// const newsletterForm = document.getElementById('newsletterForm'); // Форма подписки
// const introText = document.getElementById('introText'); // Текст "Привет!"
// const greetingText = document.getElementById('greetingText'); // Текст "Меня зовут..."
// const playText = document.getElementById('playText'); // Текст "Поиграй со мной"
// const stamp = document.querySelector('.right_container .stamp'); // Марка
// const newslettersImage = document.querySelector(
//   '.right_container .newsletters_image'
// ); // Большое изображение щенка справа
// const rightContainer = document.querySelector('.right_container'); // Правый контейнер

// // Ссылки на чекбоксы
// const funnyCheckbox = document.querySelector(
//   'input[name="newsletterType"][value="funny"]'
// );
// const usefulCheckbox = document.querySelector(
//   'input[name="newsletterType"][value="useful"]'
// );
// const allLettersCheckbox = document.querySelector(
//   'input[name="newsletterType"][value="all_letters"]'
// );

// // Массив для хранения маленьких картинок
// const littleImages = [];

// // Переменная для основного изображения
// let playImage = null;

// // Скрываем марку изначально
// stamp.style.visibility = 'hidden';

// // Логика для чекбоксов
// function updateAllLettersCheckbox() {
//   if (funnyCheckbox.checked && usefulCheckbox.checked) {
//     allLettersCheckbox.checked = true; // Выбираем "все письма", если выбраны оба
//     funnyCheckbox.checked = false;
//     usefulCheckbox.checked = false;
//   } else {
//     allLettersCheckbox.checked = false; // Сбрасываем "все письма", если не выбраны оба
//   }
// }

// // Добавляем обработчики для чекбоксов
// funnyCheckbox.addEventListener('change', updateAllLettersCheckbox);
// usefulCheckbox.addEventListener('change', updateAllLettersCheckbox);

// // Обработчик для чекбокса "все письма"
// allLettersCheckbox.addEventListener('change', () => {
//   if (allLettersCheckbox.checked) {
//     funnyCheckbox.checked = false;
//     usefulCheckbox.checked = false;
//   }
// });

// // Функция для проверки, находятся ли все маленькие картинки на большом изображении щенка
// function checkIfAllImagesPlaced() {
//   const mainRect = newslettersImage.getBoundingClientRect(); // Границы большого изображения щенка
//   return littleImages.every((img) => {
//     const imgRect = img.getBoundingClientRect(); // Границы маленькой картинки
//     return (
//       imgRect.left >= mainRect.left &&
//       imgRect.right <= mainRect.right &&
//       imgRect.top >= mainRect.top &&
//       imgRect.bottom <= mainRect.bottom
//     );
//   });
// }

// // Функция для показа формы подписки после "Поиграть!"
// function showFormAfterPlay() {
//   // Показываем форму подписки
//   newsletterForm.style.display = 'flex';

//   // Показываем марку
//   stamp.style.visibility = 'visible';

//   // Меняем текст приветствия
//   introText.textContent = 'Спасибо!';
//   greetingText.textContent =
//     'Теперь я сыт и готов доставлять вам письма. Марку уже наклеил. Какой адрес?';

//   // Удаляем маленькие картинки и основное изображение слева
//   littleImages.forEach((img) => img.remove());
//   littleImages.length = 0; // Очищаем массив маленьких картинок
//   playImage?.remove(); // Удаляем кликабельное изображение слева
//   playImage = null;

//   // Обновляем изображение щенка справа на счастливое
//   newslettersImage.src =
//     'https://via.placeholder.com/450x300?text=Happy+Pigeon'; // URL счастливого щенка
//   newslettersImage.alt = 'Счастливый щенок';
// }

// // Функция для показа формы подписки после "Не хочу играть..."
// function showFormAfterNoPlay() {
//   // Показываем форму подписки
//   newsletterForm.style.display = 'flex';

//   // Показываем марку
//   stamp.style.visibility = 'visible';

//   // Меняем текст приветствия
//   introText.textContent = 'Хвост опущен, но дух не сломлен!';
//   greetingText.textContent = 'Какой у вас адрес?';
//   playText.style.display = 'none';

//   // Обновляем изображение щенка справа на грустное
//   newslettersImage.src = 'https://via.placeholder.com/450x300?text=Sad+Pigeon'; // URL грустного щенка
//   newslettersImage.alt = 'Грустный щенок';
// }

// // Функция для создания и добавления маленьких картинок
// function generateLittleImages() {
//   for (let i = 0; i < 4; i++) {
//     const littleImage = document.createElement('img');
//     littleImage.src = 'https://via.placeholder.com/50?text=Item'; // URL маленькой картинки
//     littleImage.alt = 'Маленькая картинка';
//     littleImage.classList.add('newsletters_image_little');
//     littleImage.style.position = 'absolute';

//     // Генерируем случайные координаты для маленьких картинок рядом с кликабельным изображением
//     const mainRect = playImage.getBoundingClientRect();
//     const randomX = Math.random() * 200 + mainRect.right;
//     const randomY = Math.random() * 200 + mainRect.top;
//     littleImage.style.left = `${randomX}px`;
//     littleImage.style.top = `${randomY}px`;

//     // Добавляем обработчик для перетаскивания
//     makeDraggable(littleImage);

//     // Сохраняем ссылку на созданную маленькую картинку в массиве
//     littleImages.push(littleImage);

//     // Добавляем маленькую картинку в правый контейнер
//     rightContainer.appendChild(littleImage);
//   }

//   // Добавляем обработчик проверки размещения маленьких картинок
//   document.addEventListener('mouseup', () => {
//     if (checkIfAllImagesPlaced()) {
//       showFormAfterPlay();
//     }
//   });
// }

// // Функция для перетаскивания элементов
// function makeDraggable(element) {
//   let isDragging = false;
//   let offsetX, offsetY;

//   element.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//     element.style.cursor = 'grabbing';
//   });

//   document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//       element.style.left = `${e.pageX - offsetX}px`;
//       element.style.top = `${e.pageY - offsetY}px`;
//     }
//   });

//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//     element.style.cursor = 'grab';
//   });
// }

// // Обработчик клика на кнопку "Поиграть!"
// playButton.addEventListener('click', () => {
//   if (!playImage) {
//     playImage = document.createElement('img');
//     playImage.src =
//       'https://thumbs.dreamstime.com/z/realistic-gold-gift-box-ribbon-d-rendering-png-icon-transparent-background-ai-generated-vector-350275987.jpg'; // URL начального изображения
//     playImage.alt = 'Подарок';
//     playImage.classList.add('newsletters_image_play');
//     playImage.style.cursor = 'pointer';

//     // Добавляем новое изображение в приветственную секцию
//     document.querySelector('.newsletters_intro').appendChild(playImage);

//     // Добавляем обработчик клика на новое изображение
//     playImage.addEventListener('click', function () {
//       // Меняем изображение слева при первом клике
//       if (playImage.src.includes('gift-box')) {
//         playImage.src = 'https://via.placeholder.com/150?text=New+Image'; // URL нового изображения слева
//         playImage.alt = 'Новое изображение';
//       }

//       // Генерируем маленькие картинки
//       generateLittleImages();
//     });
//   }

//   // Скрываем текст "Поиграй со мной" и кнопки
//   playText.style.display = 'none';
//   playButton.style.display = 'none';
//   noPlayButton.style.display = 'none';

//   // Меняем изображение щенка справа
//   newslettersImage.src =
//     'https://new.mailfit.com/wp-content/themes/mailfit_2024-master/assets/img/newsletter/pegion-1.webp'; // URL нового изображения щенка
//   newslettersImage.alt = 'Новое изображение щенка';
// });

// // Обработчик клика на кнопку "Не хочу играть..."
// noPlayButton.addEventListener('click', () => {
//   // Показываем форму подписки сразу
//   showFormAfterNoPlay();

//   // Скрываем кнопки
//   playButton.style.display = 'none';
//   noPlayButton.style.display = 'none';
// });

// // Обработчик отправки формы
// newsletterForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const birthday = document.getElementById('birthday').value;
//   const newsletters = Array.from(
//     document.querySelectorAll('input[name="newsletterType"]:checked')
//   ).map((box) => box.value);

//   if (!email || newsletters.length === 0) {
//     alert(
//       'Пожалуйста, введите ваш email и выберите хотя бы один тип рассылки.'
//     );
//     return;
//   }

//   // Очищаем форму после отправки
//   newsletterForm.reset();

//   // Скрываем форму подписки
//   newsletterForm.style.display = 'none';

//   // Скрываем марку
//   stamp.style.visibility = 'hidden';

//   // Изменяем текст слева
//   introText.textContent = 'Отправил первое сообщение';
//   greetingText.textContent = ''; // Очищаем второй текст
//   playText.style.display = 'none'; // Скрываем текст "Поиграй со мной"

//   // Растягиваем изображение щенка справа на весь контейнер
//   newslettersImage.style.width = '100%';
//   newslettersImage.style.height = 'auto';

//   // Меняем изображение щенка справа на финальное
//   newslettersImage.src =
//     'https://via.placeholder.com/600x400?text=Final+Message';
//   newslettersImage.alt = 'Финальное изображение щенка';

//   // Создаем кнопку "Вернуться на главную страницу"
//   const leftContainer = document.querySelector('.left_container');
//   leftContainer.innerHTML = ''; // Очищаем содержимое левого контейнера

//   // Создаем текст "Отправил первое сообщение"
//   const messageText = document.createElement('p');
//   messageText.textContent = 'Отправил первое сообщение';
//   messageText.classList.add('newsletters_big_p'); // Используем стиль для большого текста
//   leftContainer.appendChild(messageText);

//   // Создаем кнопку "Вернуться на главную страницу"
//   const returnHomeButton = document.createElement('button');
//   returnHomeButton.textContent = 'Вернуться на сайт';
//   returnHomeButton.classList.add('play_button'); // Добавляем класс play_button
//   returnHomeButton.style.marginTop = '20px'; // Отступ сверху
//   returnHomeButton.addEventListener('click', () => {
//     window.location.href = 'index.html'; // Переход на главную страницу
//   });

//   leftContainer.appendChild(returnHomeButton); // Добавляем кнопку в левый контейнер
// });

// // КНОПКА “ЕЩЕ” У ОБНОВЛЕНИЙ

// document.addEventListener('DOMContentLoaded', () => {
//   const updatesContainer = document.querySelector('.updates-container');
//   const loadMoreButton = document.querySelector('.latest_update_buttom'); // Изменено на latest_update_buttom
//   const allUpdates = [
//     {
//       icon: 'icon1.png',
//       date: '03.01.2023',
//       text: 'Пофиксили "Коробочный рубеж"',
//     },
//     {
//       icon: 'icon2.png',
//       date: '03.01.2023',
//       text: 'Добавили новые уровни в "Приключения"',
//     },
//     {
//       icon: 'icon3.png',
//       date: '03.01.2023',
//       text: 'Исправлены ошибки в "Мультиплеере"',
//     },
//     {
//       icon: 'icon4.png',
//       date: '04.01.2023',
//       text: 'Обновлена система достижений',
//     },
//     { icon: 'icon5.png', date: '05.01.2023', text: 'Добавлены новые скины' },
//     {
//       icon: 'icon6.png',
//       date: '06.01.2023',
//       text: 'Оптимизирована производительность',
//     },
//     {
//       icon: 'icon7.png',
//       date: '07.01.2023',
//       text: 'Добавлен новый режим "Выживание"',
//     },
//     {
//       icon: 'icon8.png',
//       date: '08.01.2023',
//       text: 'Улучшена графика на всех уровнях',
//     },
//     {
//       icon: 'icon9.png',
//       date: '09.01.2023',
//       text: 'Исправлены проблемы с сетевым соединением',
//     },
//     {
//       icon: 'icon10.png',
//       date: '10.01.2023',
//       text: 'Добавлены новые достижения для игроков',
//     },
//   ];

//   let currentIndex = 0;

//   const showUpdates = () => {
//     updatesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых обновлений

//     const updatesToShow = allUpdates.slice(currentIndex, currentIndex + 3); // Получаем следующие 3 обновления
//     updatesToShow.forEach((update) =>
//       updatesContainer.appendChild(createUpdateElement(update))
//     );

//     currentIndex += updatesToShow.length; // Обновляем индекс текущих обновлений

//     // Проверяем, есть ли еще обновления
//     if (currentIndex >= allUpdates.length) {
//       loadMoreButton.disabled = true; // Делаем кнопку неактивной
//       loadMoreButton.style.pointerEvents = 'none'; // Отключаем события указателя
//       loadMoreButton.style.color = 'gray'; // Меняем цвет текста на серый
//     } else {
//       loadMoreButton.style.pointerEvents = 'auto'; // Включаем события указателя
//       loadMoreButton.style.color = ''; // Возвращаем цвет текста по умолчанию
//     }
//   };

//   const createUpdateElement = ({ icon, date, text }) => {
//     const updateDiv = document.createElement('div');
//     updateDiv.classList.add('update', 'visible');

//     const iconElement = document.createElement('img');
//     iconElement.src = icon;
//     iconElement.alt = 'Иконка';
//     iconElement.classList.add('update-icon');

//     const updateText = document.createElement('div');
//     updateText.classList.add('update-text');

//     updateText.innerHTML = `<p>${date}</p><p>${text}</p>`; // Используем innerHTML для добавления текста

//     updateDiv.append(iconElement, updateText); // Используем метод append для добавления элементов

//     return updateDiv;
//   };

//   // Сначала показываем первые три обновления
//   showUpdates();

//   // Добавляем обработчик события на кнопку
//   loadMoreButton.addEventListener('click', showUpdates);
// });

// // ПАДАЮЩИЕ СОБАЧКИ

// let clickCount = 0; // Click counter
// const button = document.getElementById('button_dog'); // Get button image
// const fallDogsContainer = document.getElementById('fall_dogs');
// const footer = document.querySelector('footer'); // Get footer

// // Array of dog images
// const dogImages = [
//   'https://code.s3.yandex.net/web-code/procrastinate/2.png',
//   'https://code.s3.yandex.net/web-code/procrastinate/3.png',
//   'https://code.s3.yandex.net/web-code/procrastinate/4.png',
//   'https://code.s3.yandex.net/web-code/procrastinate/5.png',
// ];

// // Variable to store interval ID
// let fallingInterval;

// button.addEventListener('click', () => {
//   clickCount++; // Increase click counter

//   if (clickCount === 4) {
//     // If clicked 4 times
//     startFallingImages(); // Start falling images
//     clickCount = 0; // Reset counter
//   }
// });

// function startFallingImages() {
//   // Stop previous timer if it exists
//   if (fallingInterval) {
//     clearInterval(fallingInterval);
//   }

//   // Start interval for creating images
//   fallingInterval = setInterval(() => {
//     createFallingImage();
//   }, 500); // Interval of 500 ms between each image
// }

// function createFallingImage() {
//   const img = document.createElement('img'); // Create image element
//   img.src = dogImages[Math.floor(Math.random() * dogImages.length)]; // Random image
//   img.classList.add('dogs_falling'); // Add class for animation

//   // Get the width of the window
//   const windowWidth = window.innerWidth;

//   // Set the width of the image
//   const imgWidth = 100; // Set the width of the image

//   // Set a random horizontal position
//   const randomLeft = Math.random() * (windowWidth - imgWidth); // Random position from 0 to window width minus image width
//   img.style.position = 'absolute'; // Set absolute positioning
//   img.style.left = randomLeft + 'px'; // Set left position
//   img.style.top = '0px'; // Start from the top of the container

//   fallDogsContainer.appendChild(img); // Add image to container

//   // Start falling animation
//   setTimeout(() => {
//     img.classList.add('fall'); // Start falling animation
//   }, 5); // Small delay to trigger animation

//   // Check if the image has reached the footer
//   const checkFooterCollision = setInterval(() => {
//     const imgRect = img.getBoundingClientRect(); // Get image coordinates
//     const footerRect = footer.getBoundingClientRect(); // Get footer coordinates

//     // Check if the image is within the footer area
//     if (
//       imgRect.top >= footerRect.top && // Top of image is at or below footer
//       imgRect.bottom <= footerRect.bottom && // Bottom of image is within footer height
//       imgRect.right > footerRect.left && // Image is within footer width
//       imgRect.left < footerRect.right // Image is within footer width
//     ) {
//       img.style.display = 'none'; // Hide image
//       clearInterval(checkFooterCollision); // Clear collision check
//     }
//   }, 100); // Check every 100 ms
// }

// // КНИГА

// const pages = [
//   'Это первая страница книги. Здесь можно разместить введение или аннотацию.',
//   'Это вторая страница книги. Здесь можно продолжить рассказ.',
//   'Это третья страница книги. Здесь можно разместить заключение или выводы.',
// ];

// let currentPage = 0;

// const pageContent = document.getElementById('pageContent');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// function updatePage() {
//   pageContent.textContent = pages[currentPage];

//   prevBtn.disabled = currentPage === 0;
//   nextBtn.disabled = currentPage === pages.length - 1;
// }

// prevBtn.addEventListener('click', () => {
//   if (currentPage > 0) {
//     currentPage--;
//     updatePage();
//   }
// });

// nextBtn.addEventListener('click', () => {
//   if (currentPage < pages.length - 1) {
//     currentPage++;
//     updatePage();
//   }
// });

// // Инициализация страницы
// updatePage();

// // ПОДВАЛЬНАЯ КНОПКА ВВЕРХ

// document.getElementById('scrollToTop').addEventListener('click', function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth', // Плавная прокрутка
//   });
// });

// // КНОПКА ДЕНЬ/НОЧЬ

// const switchButton = document.getElementById('themeSwitch');
// let isNightMode = false;

// switchButton.addEventListener('click', () => {
//   isNightMode = !isNightMode;

//   // Переключаем класс для тела документа
//   document.body.classList.toggle('night', isNightMode);

//   // Переключаем класс для кнопки
//   switchButton.classList.toggle('active', isNightMode);
// });

// <select id="language-switcher">
//   <option value="en">English</option>
//   <option value="ru">Русский</option>
// </select>;

// // ДЛЯ СМЕНЫ ЯЗЫКА
// const languageSwitcher = document.getElementById('language-switcher');
// let currentLanguage = 'en';

// // Функция для загрузки языкового файла и обновления текста на странице
// function loadLanguage(language) {
//   fetch(`${language}.json`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((translations) => {
//       document.getElementById('welcome').innerText = translations.welcome;
//       document.getElementById('description').innerText =
//         translations.description;
//       document.getElementById('action-button').innerText = translations.button;
//     })
//     .catch((error) => console.error('Error loading language file:', error));
// }

// // Проверка сохраненного языка и установка его как текущего
// const savedLanguage = localStorage.getItem('language') || 'en';
// languageSwitcher.value = savedLanguage;
// loadLanguage(savedLanguage);

// // Слушатель события для изменения языка
// languageSwitcher.addEventListener('change', (event) => {
//   currentLanguage = event.target.value;
//   localStorage.setItem('language', currentLanguage);
//   loadLanguage(currentLanguage);
// });

// // Сохранение выбора языка в localStorage
// languageSwitcher.addEventListener('change', (event) => {
//   localStorage.setItem('language', event.target.value);
//   loadLanguage(event.target.value);
// });
