# Тестовое задание для компании AnyWayAnyDay
Подробное описание тестового задания находится в репозитории в файле test-task-description.pdf
Задание было выполненно с использованием следующих технологий и подходов:
* **Flux** архитектура, для организации кода в проекте и их реализацию диспетчера
* **React** для реализации компонент по Flux архитектуре
* **jQuery** для запросов к api по jsonp
* **Babel** для транспайлинга EcmaScript6 в EcmaScript5
* **Webpack** как модульная система

##Использование
Для работы с проектом необходимо установить в сисетму nodejs и npm
Клонируем репозиторий:
``` bash
git clone https://github.com/olegman/anywayanyday-test-task.git
```
Переходим в папку с проектом:
``` bash
cd anywayanyday-test-task
```
Устанавливаем все зависимости:
``` bash
npm install
```
Запускаем watcher (будет собран скрипт для разработки и пересобираться каждый раз при изменении):
``` bash
npm start
```
Сборка проекта для production среды осуществляется командой:
``` bash
npm run build
```
Далее можно просто открыть в браузере файлы *public/index.dev.html* или *public/index.html*, для разработки и production среды соответственно.

Также доступна [рабочая демонстрация](http://olegman.github.io/anywayanyday-test-task/public/) проекта.
