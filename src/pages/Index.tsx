import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background with ice effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.05),transparent_50%)] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SPREYDI
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#bio"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Биография
            </a>
            <a
              href="#music"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Музыка
            </a>
            <a
              href="#social"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Социальные сети
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              SPREYDI
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 animate-fade-in">
              Экспериментальная и электронная музыка с атмосферными звуками
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Icon name="Play" className="mr-2" size={20} />
                Слушать
              </Button>
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="bio" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Биография
          </h2>
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Spreydi — это путешествие в глубины звука, где каждый трек
                    становится ледяным кристаллом в океане электронной музыки.
                    Моя музыка рождается из тишины арктических просторов и
                    превращается в атмосферные звуковые ландшафты.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Экспериментируя с синтезаторами и цифровыми эффектами, я
                    создаю звуковые текстуры, которые переносят слушателя в мир
                    загадочных кристаллов и бесконечных ледяных горизонтов.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-cyan-900 to-slate-900 rounded-lg flex items-center justify-center">
                    <Icon
                      name="Waves"
                      size={120}
                      className="text-cyan-400 opacity-50"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Музыка
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Frozen Echoes", duration: "4:23", type: "Ambient" },
              {
                title: "Crystal Caves",
                duration: "5:17",
                type: "Experimental",
              },
              { title: "Arctic Pulse", duration: "3:45", type: "Electronic" },
              { title: "Ice Fragments", duration: "6:02", type: "Atmospheric" },
              { title: "Glacial Drift", duration: "4:38", type: "Ambient" },
              { title: "Polar Lights", duration: "5:24", type: "Cinematic" },
            ].map((track, index) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-700 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Play" size={20} className="text-white" />
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">
                      {track.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-400">{track.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Социальные сети
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { platform: "SoundCloud", icon: "Music", followers: "12.5K" },
              { platform: "Spotify", icon: "Headphones", followers: "8.2K" },
              { platform: "Instagram", icon: "Instagram", followers: "15.3K" },
              { platform: "YouTube", icon: "Youtube", followers: "6.7K" },
            ].map((social, index) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-700 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={social.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {social.platform}
                  </h3>
                  <p className="text-slate-400">
                    {social.followers} подписчиков
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2024 SPREYDI. Все права защищены.
          </p>
          <p className="text-slate-500 text-sm">
            Создано с помощью Поехали! — разработка сайтов через русский язык
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
