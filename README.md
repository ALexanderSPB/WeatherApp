## Техническое задание

  Клиентское приложение, отображающее прогноз погоды на 7 дней по выбранной локации, сохраняющее запрошенные данные в локальное хранилище, выводящее график изменений по полученным данным.
В этом приложениие используется информация о погоде с сайта [OpenWeather](https://openweathermap.org/).
Приложение использует React концепцию, React-router, store из Redux.

  Для получения прогноза погоды используется HTTP клиент [axios](https://www.npmjs.com/package/axios).
После ввода названия города происходит запрос на сервер OpenWeather с помощью axios.get(url).
Полученная информация записывается в store из Redux, после чего приложение переходит на страницу '/forecast/:city', где отображается дата, описание погоды с иконкой, минимальная, максимальная температуры на каждый день. При нажатии мышью на какой-нибудь из отображённых дней приложение переходит на страницу '/daily/:city' где отобразится подробная информация о погоде на данный день.

  На главной странице так же присутствует
  - Информация о ранее введённых запросах с возможностью перехода на страницу с прогнозом погоды на выбранный город.
  - Кнопка перехода на страницу истории '/histiry', где есть подробная информация о погоде в каждом запрошенном городе.
  - Кнопка перехада на строницу статистики '/statistics', где строятся графики зависимости температуры от дня в каждом запрошенном городе. Графики строятся с помощью библиотеки [chart.js](http://www.chartjs.org/) и [react-chartjs](https://github.com/reactjs/react-chartjs). Важно отметить, что react-chartjs требует chart.js версией не выше v1.1.1.

# Запуск приложения

  Для запуска необходим npm.
    В дирректории с проектов необходимо выполнить
    ```
    npm install
    ```
    Далее
    ```
    npm start
    ```
