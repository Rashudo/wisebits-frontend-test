[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/2959-shield.svg)](https://madewithsvelte.com/p/stts/shield-link)


Тестовое задание для компании Wisebits
==================================================


Перед запуском
------------

```
npm install
```

Скрипты
-------

### Запуск сервера разработки

`npm run dev`

### Запуск svelte-check

`npm run check`
или
`npm run check:watch`

### Запуск тестов

`npm run test`
или
`npm run test:watch`

### Сборка

`npm run build`


## Описание реализации
Проект разделён на контейнеры, чтобы не смешивать логику.
Все контейнеры находятся в папке `src/containers`. 
Внутри контейнера располагаются компоненты, стили, сервисы, сущности, сторы и контракты, которые используются только в этом контейнере.

"Общение" между контейнерами происходит через actions, например, toast показывается через `showToast` action.

Внутренняя логика работы контейнера находится в `service`, который работает с сущностями и сторами.

Помимо контейнеров в проекте представлены общие инструменты, которые могут использоваться в разных частях проекта.
Они располагаются в папке `src/lib`. Например, там находится клиент для работы с API, помощник сброса таймера и тд.

Тесты находятся в папке `test`.

Переменные окружения находятся в файле `.env`.

## Описание контейнеров
**assets** - Статические файлы

**actions** - Юзкейсы
[Пример actions](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/toast/actions)

**components** - Компоненты
[Пример components](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/components)

**contracts** - Контракты
[Пример contracts](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/contracts)

**entities** - Сущности
[Пример entities](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/entities)

**exceptions** - Исключения
[Пример exceptions](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/exceptions)

**services** - Сервисы
[Пример exceptions](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/services)

**stores** - Сторы
[Пример stores](https://github.com/Rashudo/wisebits-frontend-test/tree/main/src/containers/coffee-list/stores)

## Улучшения и доработки
- Добавить тесты для всех контейнеров
- Добавить взаимодействие с алиасами, чтобы не использовать относительные пути
- Добавить прелоадер
- Добавить анимации и плавный скролл