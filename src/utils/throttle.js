const throttle = function (func, timeout) {
    let isThrottled; // Флаг (выполнять переданную функцию или нет);
    let savedArgs; // Переменная для хранения аргументов;
    let savedThis; // Переменная для хранения this;

    const wrapper = function () { // Создаем функцию обертку;
        if (isThrottled) { // Если флаг = true, сохраняем аргументы и this и завершаем выполнение функции-обертки;
            // eslint-disable-next-line prefer-rest-params
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        // eslint-disable-next-line prefer-rest-params
        func.apply(this, arguments); // Иначе выполняем переданную функцию;
        isThrottled = true; // Устанавливаем флаг в true (переданную функцию снова не будет выполняться);

        setTimeout(() => { // Запускаем таймер с переданным таймаутом;
            isThrottled = false; // По истечении таймаута устанавливаем флаг в false (переданная функция снова может выполняться) ;

            if (savedArgs) { // Проверяем что в переменной сохранены аргументы;
                wrapper.apply(savedThis, savedArgs); // Запускаем wrapper с сохраненными this и аргументами. Так как флаг = false это приведет к выполнению нашей переданной функции;
                savedArgs = null; // Обнуляем аргументы
                savedThis = null;
            }
        }, timeout);
    }

    return wrapper; // Возвращаем нашу функцию обертку;
}

export default throttle;
