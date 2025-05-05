import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Gift } from "lucide-react";

const Products = () => {
  const giftCards = [
    {
      id: "card-1000",
      value: 1000,
      description: "Идеально для покупки приложений и подписок",
      features: ["Моментальная доставка", "Без срока действия", "Для App Store и iTunes"]
    },
    {
      id: "card-2500",
      value: 2500,
      description: "Для приложений, игр, фильмов и музыки",
      features: ["Моментальная доставка", "Без срока действия", "Для App Store и iTunes"]
    },
    {
      id: "card-5000",
      value: 5000,
      description: "Максимум возможностей для вашего устройства",
      features: ["Моментальная доставка", "Без срока действия", "Для App Store и iTunes"]
    },
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Apple Gift Cards</h1>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все карты</TabsTrigger>
              <TabsTrigger value="digital">Цифровые</TabsTrigger>
              <TabsTrigger value="physical">Физические</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {giftCards.map((card) => (
                  <Card key={card.id} id={card.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl">{card.value} ₽</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-6">
                        <div className="relative w-40 h-28 bg-gray-50 rounded-lg flex items-center justify-center">
                          <Gift className="text-gray-400" size={32} />
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full">
                            {card.value} ₽
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {card.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center gap-2">
                        <ShoppingCart size={16} />
                        Купить сейчас
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="digital">
              <div className="text-center py-10">
                <p className="text-gray-600 mb-4">
                  Цифровые карты отправляются на указанный email сразу после оплаты.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {giftCards.map((card) => (
                    <Card key={card.id} id={card.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl">{card.value} ₽</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center mb-6">
                          <div className="relative w-40 h-28 bg-gray-50 rounded-lg flex items-center justify-center">
                            <Gift className="text-gray-400" size={32} />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full">
                              {card.value} ₽
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {card.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check size={16} className="text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full flex items-center gap-2">
                          <ShoppingCart size={16} />
                          Купить сейчас
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="physical">
              <div className="text-center py-10">
                <p className="text-gray-600">
                  Физические карты в настоящее время недоступны.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gray-50 rounded-lg p-6 mt-12">
            <h2 className="text-xl font-semibold mb-4">Информация о картах</h2>
            <p className="text-gray-600 mb-4">
              Apple Gift Card — универсальная подарочная карта для всего, что вам нравится в экосистеме Apple: приложения, игры, музыка, фильмы, TV-шоу, iCloud и многое другое.
            </p>
            <p className="text-gray-600 mb-4">
              После покупки вы получите код для активации на вашем Apple ID. Баланс карты не имеет срока действия и может быть использован в любое время.
            </p>
            <div className="flex justify-center mt-6">
              <Button asChild variant="outline">
                <Link to="/guide">Подробная инструкция</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
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

export default Products;
