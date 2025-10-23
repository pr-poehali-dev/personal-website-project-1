import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Лера",
      subtitle: "17 лет",
      content: "Меня зовут Лера, мне 17 лет",
      image: "https://cdn.poehali.dev/files/84920589-9e28-40be-92b6-8e19bbc3e386.jpeg"
    },
    {
      title: "Хобби",
      subtitle: "Танцы",
      content: "Моё хобби — это танцы. Это моя страсть и способ самовыражения.",
      image: "https://cdn.poehali.dev/projects/4a36a762-bcd3-47bd-bb72-9242e5a217d9/files/cf501058-3ca9-43c6-aadc-087611ef0938.jpg"
    },
    {
      title: "Учёба",
      subtitle: "11Б класс",
      content: "Я учусь в 51 школе в 11Б классе",
      image: "https://cdn.poehali.dev/files/b37c6c96-c7f4-4275-b493-b1f75b52c11f.jpeg"
    },
    {
      title: "ЕГЭ",
      subtitle: "Экзамены 2025",
      content: "Я сдаю ЕГЭ по профильной математике, английскому, обществознанию и русскому языку",
      image: "https://cdn.poehali.dev/projects/4a36a762-bcd3-47bd-bb72-9242e5a217d9/files/41a52748-bd6a-451c-8060-331a26cb8352.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-24 md:py-32 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="relative">
            {slides[currentSlide].image && (
              <div className="mb-12 flex justify-center">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-black"
                />
              </div>
            )}

            <div className="mb-12 text-center">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                {slides[currentSlide].title}
              </h1>
              <div className="w-16 h-1 bg-black mb-8 mx-auto"></div>
              <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="text-center mb-16">
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {slides[currentSlide].content}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <Button
                onClick={prevSlide}
                variant="outline"
                className="border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>

              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                className="border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
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