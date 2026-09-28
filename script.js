// Telegram WebApp ob'ektini olish
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.expand(); // Mini App-ni to'liq ekranga yoyish
  
  // Telegram foydalanuvchi ismini chiqarish
  if (tg.initDataUnsafe?.user) {
    const user = tg.initDataUnsafe.user;
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
      userNameElement.innerText = `👋 ${user.first_name}`;
    }
  }
}

// So'zlarni o'rganish tugmasi bosilganda
function startLearning() {
  if (tg) {
    tg.showAlert("O'rganish bo'limi tez orada ishga tushadi!");
  } else {
    alert("O'rganish bo'limi tez orada ishga tushadi!");
  }
}
