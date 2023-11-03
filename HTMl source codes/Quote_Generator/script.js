const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The only constant in life is change. - Heraclitus",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "If you want to shine like the sun, first burn like the sun. - A. P. J. Abdul Kalam",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "Our lives begin to end the day we become silent about things that matter. - Martin Luther King, Jr.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us. - Joseph Campbell",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  ];
  
function newQuote(){
    var randomnumbers = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomnumbers];
}