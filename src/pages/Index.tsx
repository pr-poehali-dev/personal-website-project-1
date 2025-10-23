import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            PORTFOLIO
          </h1>
          <div className="w-16 h-1 bg-black mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl">
            Школьник
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Привет! Я школьник, который увлекается современными технологиями
                и постоянно учится чему-то новому.
              </p>
              <p>
                Мне интересно познавать мир через проекты, эксперименты и
                общение с единомышленниками.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-2 border-black hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="Briefcase" size={24} className="mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Интересы</h3>
                  <p className="text-gray-600 font-light">
                    Изучение новых технологий, чтение, спорт
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-black hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="User" size={24} className="mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Навыки</h3>
                  <p className="text-gray-600 font-light">
                    Быстрая обучаемость, креативное мышление, работа в команде
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-black hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="ArrowRight" size={24} className="mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Цели</h3>
                  <p className="text-gray-600 font-light">
                    Развиваться в выбранных направлениях и создавать полезные проекты
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24 mt-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Связаться
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    className="border-2 border-black focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="border-2 border-black focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Напишите ваше сообщение..."
                  rows={6}
                  className="border-2 border-black focus:ring-2 focus:ring-black resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full md:w-auto px-12 py-6 text-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-gray-600">
              © 2024 Portfolio. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:underline font-medium">
                GitHub
              </a>
              <a href="#" className="text-sm hover:underline font-medium">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
