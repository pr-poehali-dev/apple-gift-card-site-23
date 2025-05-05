import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
      <header className="fixed w-full bg-white border-b border-gray-200 py-4 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0599 10.3799C17.0099 8.27994 18.7599 7.17994 18.8299 7.13994C17.8799 5.72994 16.3699 5.53994 15.8499 5.51994C14.5699 5.38994 13.3399 6.26994 12.6899 6.26994C12.0299 6.26994 11.0499 5.53994 9.9799 5.56994C8.57991 5.59994 7.28991 6.37994 6.58991 7.59994C5.11991 10.0899 6.22991 13.7499 7.61991 15.8099C8.32991 16.8199 9.15991 17.9499 10.2499 17.9099C11.3099 17.8699 11.7299 17.2299 12.9999 17.2299C14.2599 17.2299 14.6599 17.9099 15.7699 17.8799C16.9199 17.8599 17.6399 16.8699 18.3299 15.8499C19.1499 14.6799 19.4799 13.5399 19.4999 13.4799C19.4599 13.4699 17.1099 12.5999 17.0599 10.3799Z" fill="black"/>
              <path d="M15.1199 3.11218C15.6799 2.42218 16.0499 1.49218 15.9299 0.552185C15.1299 0.592185 14.1399 1.1222 13.5499 1.7922C13.0299 2.39218 12.5799 3.35218 12.7199 4.25218C13.6099 4.32218 14.5399 3.79218 15.1199 3.11218Z" fill="black"/>
            </svg>
            <span className="font-semibold text-lg">Apple Gift Cards</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-gray-600">Главная</Link>
            <Link to="/products" className="text-sm font-medium hover:text-gray-600">Карты</Link>
            <Link to="/guide" className="text-sm font-medium hover:text-gray-600">Инструкция</Link>
          </nav>
          <Button asChild variant="outline">
            <Link to="/products">Купить</Link>
          </Button>
        </div>
      </header>

      {/* Добавляем отступ для контента, чтобы он не был скрыт за фиксированным хедером */}
      <div className="pt-16"></div>

      {/* Основная секция */}
      <main>
        {/* Герой-секция */}
        <section className="py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Apple Gift Card</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Одна карта. Миллионы способов использования. Идеальный подарок для всех, кто любит Apple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/products">Выбрать карту</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/guide">Узнать больше</Link>
            </Button>
          </div>
        </section>

        {/* Карточки */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Выберите номинал</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1000, 2500, 5000].map((value) => (
                <div key={value} className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0599 10.3799C17.0099 8.27994 18.7599 7.17994 18.8299 7.13994C17.8799 5.72994 16.3699 5.53994 15.8499 5.51994C14.5699 5.38994 13.3399 6.26994 12.6899 6.26994C12.0299 6.26994 11.0499 5.53994 9.9799 5.56994C8.57991 5.59994 7.28991 6.37994 6.58991 7.59994C5.11991 10.0899 6.22991 13.7499 7.61991 15.8099C8.32991 16.8199 9.15991 17.9499 10.2499 17.9099C11.3099 17.8699 11.7299 17.2299 12.9999 17.2299C14.2599 17.2299 14.6599 17.9099 15.7699 17.8799C16.9199 17.8599 17.6399 16.8699 18.3299 15.8499C19.1499 14.6799 19.4799 13.5399 19.4999 13.4799C19.4599 13.4699 17.1099 12.5999 17.0599 10.3799Z" fill="white"/>
                        <path d="M15.1199 3.11218C15.6799 2.42218 16.0499 1.49218 15.9299 0.552185C15.1299 0.592185 14.1399 1.1222 13.5499 1.7922C13.0299 2.39218 12.5799 3.35218 12.7199 4.25218C13.6099 4.32218 14.5399 3.79218 15.1199 3.11218Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{value} ₽</h3>
                  <p className="text-gray-600 mb-6">Apple Gift Card</p>
                  <Button asChild className="w-full">
                    <Link to={`/products#card-${value}`}>Выбрать</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Для всего что любит</h3>
                <p className="text-gray-600">
                  Приложения, игры, музыка, фильмы и многое другое в App Store и iTunes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Без срока годности</h3>
                <p className="text-gray-600">
                  Используйте когда захотите, карта не имеет ограничений по времени
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Моментальная доставка</h3>
                <p className="text-gray-600">
                  Получите код активации сразу после оплаты по электронной почте
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-20 bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Выберите номинал карты и оформите заказ прямо сейчас
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link to="/products" className="flex items-center gap-2">
                Перейти к покупке <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Главная</Link>
              <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">Карты</Link>
              <Link to="/guide" className="text-sm text-gray-600 hover:text-gray-900">Инструкция</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
