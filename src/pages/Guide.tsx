import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, Gift, Smartphone, Check } from "lucide-react";

const Guide = () => {
  const steps = [
    {
      title: "Выберите номинал",
      description: "Выберите карту подходящего вам номинала: 1000, 2500 или 5000 рублей.",
      icon: <Gift size={24} className="text-gray-700" />
    },
    {
      title: "Оплатите заказ",
      description: "Оплатите заказ удобным способом: банковская карта, электронные деньги и другие.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
    },
    {
      title: "Получите код",
      description: "Получите код активации на указанный вами email-адрес сразу после оплаты.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
      title: "Активируйте карту",
      description: "Перейдите в App Store или iTunes и активируйте полученный код.",
      icon: <Smartphone size={24} className="text-gray-700" />
    }
  ];

  const faq = [
    {
      question: "Что такое Apple Gift Card?",
      answer: "Apple Gift Card — это универсальная подарочная карта для покупок в App Store, iTunes Store, Apple Books и оплаты подписок на Apple Music, Apple TV+, Apple Arcade, iCloud+ и других сервисов Apple."
    },
    {
      question: "Как активировать Apple Gift Card?",
      answer: "Для активации карты на iPhone, iPad или iPod touch: Откройте App Store, нажмите на изображение профиля, выберите 'Пополнить баланс' и введите код. На Mac: откройте App Store, нажмите на ваше имя, затем 'Пополнить счет' и введите код. На ПК с Windows: откройте iTunes, выберите 'Учетная запись' > 'Пополнить учетную запись' и введите код."
    },
    {
      question: "Есть ли срок действия у карты?",
      answer: "Нет, Apple Gift Card не имеет срока действия. Вы можете использовать её баланс в любое удобное время."
    },
    {
      question: "Можно ли передать карту другому человеку?",
      answer: "Да, вы можете подарить полученный код другому человеку. Он сможет активировать его на своём Apple ID."
    },
    {
      question: "Что делать, если код не работает?",
      answer: "Убедитесь, что вы правильно вводите код, включая все дефисы. Если проблема сохраняется, свяжитесь с нашей службой поддержки, предоставив детали заказа."
    },
    {
      question: "Могу ли я использовать карту для покупки устройств Apple?",
      answer: "Нет, Apple Gift Card можно использовать только для цифровых покупок в App Store, iTunes Store, Apple Books, а также для оплаты подписок и услуг, включая Apple Music, Apple TV+, Apple Arcade и iCloud+."
    }
  ];

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
            <Link to="/" className="font-semibold text-lg">Apple Gift Cards</Link>
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
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft size={16} />
              На главную
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-12">Как использовать Apple Gift Card</h1>

          {/* Шаги по использованию */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Процесс покупки и активации</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full text-center text-sm mr-2">{index + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Инструкция по активации */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Подробная инструкция по активации</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-medium mb-4">iPhone, iPad или iPod touch</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</div>
                    <div>
                      <p>Откройте App Store</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</div>
                    <div>
                      <p>Нажмите на иконку профиля в правом верхнем углу</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">3</div>
                    <div>
                      <p>Нажмите «Пополнить баланс» или «Использовать подарочную карту или код»</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">4</div>
                    <div>
                      <p>Введите код с полученного письма или используйте камеру для сканирования кода</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">5</div>
                    <div>
                      <p>Нажмите «Активировать»</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Mac</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</div>
                    <div>
                      <p>Откройте App Store</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</div>
                    <div>
                      <p>Нажмите на ваше имя в нижнем левом углу окна или кнопку «Войти»</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">3</div>
                    <div>
                      <p>Нажмите «Пополнить счет»</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">4</div>
                    <div>
                      <p>Нажмите «Использовать подарочную карту» и введите код</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">5</div>
                    <div>
                      <p>Нажмите «Активировать»</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Часто задаваемые вопросы */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle size={24} className="text-gray-700" />
              <h2 className="text-2xl font-semibold">Часто задаваемые вопросы</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}` }>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Call to action */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Готовы приобрести Apple Gift Card?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Выберите номинал, который подходит именно вам, и начните наслаждаться всеми возможностями экосистемы Apple.
            </p>
            <Button asChild size="lg">
              <Link to="/products">Выбрать карту</Link>
            </Button>
          </section>
        </div>
      </main>

      {/* Футер */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
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

export default Guide;