/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/
//#1
var buttons = document.querySelectorAll('.showButton');
var Tabs = document.querySelectorAll('.tab');

var hideAllTabs = () => {
    Tabs.forEach(tab => tab.classList.remove('active'));
}
buttons.forEach(button => {
    button.onclick = () => {
        hideAllTabs();
        Tabs.forEach(tab => {
            if (button.dataset.tab === tab.dataset.tab) {
                tab.classList.add('active');
            }
        })
    }
})