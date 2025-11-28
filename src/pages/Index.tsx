import { Link } from "react-router-dom";
import cherryBlossoms from "@/assets/cherry-blossoms-hero.png";
import origamiCrane from "@/assets/origami-crane.png";
import cuteFuji from "@/assets/cute-fuji.png";
import cuteLantern from "@/assets/cute-lantern.png";
import luckyCat from "@/assets/lucky-cat.png";
import kokeshiDoll from "@/assets/kokeshi-doll.png";
import daruma from "@/assets/daruma.png";
import matchaCup from "@/assets/matcha-cup.png";
import onigiri from "@/assets/onigiri.png";
import fan from "@/assets/fan.png";
import bento from "@/assets/bento.png";
import studentCharacter from "@/assets/student-character.png";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={luckyCat} alt="" className="absolute top-20 left-10 w-20 h-20 opacity-30 animate-bounce" style={{ animationDuration: '3s' }} />
        <img src={daruma} alt="" className="absolute top-40 right-20 w-16 h-16 opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <img src={matchaCup} alt="" className="absolute bottom-40 left-20 w-16 h-16 opacity-30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <img src={onigiri} alt="" className="absolute top-1/2 right-10 w-16 h-16 opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        <img src={fan} alt="" className="absolute bottom-20 right-32 w-20 h-20 opacity-20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        style={{
          backgroundImage: `url(${cherryBlossoms})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 animate-fade-in">
          {/* Cute decorative elements */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <img src={origamiCrane} alt="Origami crane" className="w-16 h-16 animate-scale-in hover:scale-110 transition-transform cursor-pointer" />
            <img src={cuteFuji} alt="Mount Fuji" className="w-16 h-16 animate-scale-in hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.1s' }} />
            <img src={cuteLantern} alt="Japanese lantern" className="w-16 h-16 animate-scale-in hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.2s' }} />
            <img src={kokeshiDoll} alt="Kokeshi doll" className="w-16 h-16 animate-scale-in hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.3s' }} />
            <img src={bento} alt="Bento box" className="w-16 h-16 animate-scale-in hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.4s' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            ひなほ先生
          </h1>

          <p className="text-3xl md:text-4xl text-primary font-semibold mb-4">
            Hinaho Sensei
          </p>

          {/* Character with message */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="relative">
              <img
                src={studentCharacter}
                alt="Student"
                className="w-48 h-48 animate-scale-in"
              />
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card rounded-2xl px-6 py-3 shadow-lg border-2 border-primary/30">
                <p className="text-2xl font-bold text-primary whitespace-nowrap">
                  寂しくなります
                </p>
                <p className="text-xs text-foreground/60 text-center mt-1">
                  We will miss you
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-foreground/80">
            <p className="leading-relaxed">
              Thank you for teaching us the beauty of the Japanese language and culture.
              Your patience, kindness, and dedication have helped us grow, even when our brains felt like over-cooked ramen.
              Arigatou gozaimasu.
              You’ve changed us for the better—and maybe turned us all into future Japan lovers, travelers, and sushi-addicts.
            </p>

            <p className="leading-relaxed">
              先生、本当にありがとうございました。
              <br />
              <span className="text-sm">(Sensei, thank you very much)</span>
            </p>

            <div className="flex items-center justify-center gap-2 text-primary text-2xl">
              <Heart className="w-6 h-6 fill-primary animate-pulse" />
              <Heart className="w-8 h-8 fill-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 fill-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div className="pt-8 flex justify-center gap-4 flex-wrap">
            <img src={luckyCat} alt="Lucky cat" className="w-12 h-12 hover:scale-125 transition-transform cursor-pointer" />
            <Link to="/gallery">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Memories Gallery 思い出
              </Button>
            </Link>
            <img src={daruma} alt="Daruma" className="w-12 h-12 hover:scale-125 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="py-20 px-6 relative">
        {/* Decorative side elements */}
        <img src={matchaCup} alt="" className="absolute left-4 top-1/4 w-24 h-24 opacity-40 hidden lg:block" />
        <img src={onigiri} alt="" className="absolute right-4 top-1/3 w-24 h-24 opacity-40 hidden lg:block" />

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl p-12 border-4 border-primary/20 relative">
            {/* Corner decorations */}
            <img src={fan} alt="" className="absolute -top-6 -right-6 w-20 h-20 rotate-12" />
            <img src={kokeshiDoll} alt="" className="absolute -top-6 -left-6 w-16 h-16" />

            <h2 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
              <img src={origamiCrane} alt="" className="w-8 h-8" />
              Our Heartfelt Message
              <img src={origamiCrane} alt="" className="w-8 h-8 scale-x-[-1]" />
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Dear Hinaho Sensei,
              </p>

              <p>
                Every lesson with you was more than just learning Japanese—it was stepping into a world of culture, kindness, and quiet magic.
                You guided us patiently, like someone teaching a toddler to walk…
                Your yasashii shidou and warm smile made even the toughest kanji feel like friendly characters we could understand.
                Hontou ni arigatou gozaimasu, for teaching with patience, care, and a little bit of magic.
              </p>

              <p>
                The way you explained each word and phrase—with that spark in your eyes,
                like “Yes, you WILL understand this eventually!”—is something we’ll never forget.
                Every lesson felt less like a class and more like a warm conversation over chai,
                where mistakes were allowed and learning felt like joy.
              </p>

              <p>
                Though we say goodbye today, the knowledge and inspiration you gave us will keep walking beside us as we continue our nihongo journey.
                But honestly—we’re going to miss you a lot. A LOT. A LOT. More than we can even say,
                especially now that learning Japanese has made us all a little introverted and shy about our feelings.
                We really hope our paths cross again someday, because saying goodbye feels too small for what you’ve given us.
                </p>
              <p>
                Sumimasen 🙇‍♂️
                I wanted to create something even better, but due to end-sems chaos mode, time ran away faster than a shinkansen.
              </p>

              <div className="flex items-center justify-center gap-4 py-4">
                <img src={luckyCat} alt="Lucky cat" className="w-12 h-12" />
                <img src={daruma} alt="Daruma" className="w-10 h-10" />
                <img src={bento} alt="Bento" className="w-12 h-12" />
              </div>

              <p className="text-center font-semibold text-primary text-xl pt-4">
                どうもありがとうございました！
                <br />
                <span className="text-sm text-foreground/60">(Thank you so much!)</span>
              </p>

              <div className="text-center pt-6">
                <p className="text-foreground/70">
                  With love and gratitude,
                  <br />
                  Your Students
                </p>
              </div>
            </div>

            {/* Bottom corner decorations */}
            <img src={matchaCup} alt="" className="absolute -bottom-4 -left-4 w-16 h-16" />
            <img src={onigiri} alt="" className="absolute -bottom-4 -right-4 w-14 h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;