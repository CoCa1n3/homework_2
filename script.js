// Функция для проверки ответа на вопрос
function checkAnswer(question, correctAnswer) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

// Функция для запуска теста и подсчета правильных ответов
function runTest() {
    let score = 0;

    if (checkAnswer("1. Как меня зовут", "Умар")) {
        score++;
    }

    if (checkAnswer("2. Сколько мне лет", "19")) {
        score++;
    }

    if (checkAnswer("3. BMW или mers", "bmw" || "BMW")) {
        score++;
    }

    if (checkAnswer("5.В каком году я родился", "2005")) {
        score++;
    }

    if (checkAnswer("4.Сколько океанов на планете", "4" || "четыри")) {
        score++;
    }

    if (checkAnswer("6.Единица измерения силы тока - это", "Ампер" || "ампер")) {
        score++;
    }

    if (checkAnswer("7. Какое число больше  1 или 2", "2")) {
        score++;
    }

    if (checkAnswer("8. Какое число больше  2 или 3", "3")) {
        score++;
    }

    if (checkAnswer("9. Какое число больше  3 или 4", "4")) {
        score++;
    }

    if (checkAnswer("10. Какое число больше  4 или 5", "5")) {
        score++;
    }

    // Вывод результата
    alert("Тест завершен! Количество правильных ответов: " + score);
}

// Запуск теста при подтверждении пользователем
if (confirm("Хотите пройти тест по JavaScript?")) {
    runTest();
} else {
    alert("Тест отменен.");
}
