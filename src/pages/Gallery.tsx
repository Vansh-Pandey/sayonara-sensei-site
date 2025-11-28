import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from "lucide-react";
import cherryBlossoms from "@/assets/cherry-blossoms-hero.png";
import origamiCrane from "@/assets/origami-crane.png";
import luckyCat from "@/assets/lucky-cat.png";
import kokeshiDoll from "@/assets/kokeshi-doll.png";
import daruma from "@/assets/daruma.png";
import matchaCup from "@/assets/matcha-cup.png";
import onigiri from "@/assets/onigiri.png";
import fan from "@/assets/fan.png";
import bento from "@/assets/bento.png";

// Import your photos
import first from "@/assets/first.jpeg";
import second from "@/assets/second.jpeg";
import third from "@/assets/third.jpeg";
import fourth from "@/assets/fourth.jpeg"; 

const Gallery = () => {
  // Your actual photos
  const photos = [
    {
      id: 1,
      src: first,
      alt: "Memory with Hinaho Sensei 1",
    },
    {
      id: 2,
      src: second,
      alt: "Memory with Hinaho Sensei 2",
    },
    {
      id: 3,
      src: third,
      alt: "Memory with Hinaho Sensei 3",
    },
    {
      id: 4,
      src: fourth,
      alt: "Memory with Hinaho Sensei 4",
    },
  ];

  const decorativeElements = [
    { img: luckyCat, alt: "Lucky cat" },
    { img: daruma, alt: "Daruma" },
    { img: matchaCup, alt: "Matcha" },
    { img: onigiri, alt: "Onigiri" },
    { img: kokeshiDoll, alt: "Kokeshi" },
    { img: fan, alt: "Fan" },
    { img: bento, alt: "Bento" },
  ];

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url(${cherryBlossoms})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src={luckyCat} alt="" className="absolute top-32 left-5 w-16 h-16 opacity-25 animate-bounce hidden md:block" style={{ animationDuration: '3s' }} />
        <img src={kokeshiDoll} alt="" className="absolute top-1/4 right-8 w-14 h-14 opacity-25 animate-bounce hidden md:block" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <img src={matchaCup} alt="" className="absolute bottom-1/3 left-12 w-14 h-14 opacity-25 animate-bounce hidden md:block" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <img src={daruma} alt="" className="absolute top-1/2 right-16 w-12 h-12 opacity-25 animate-bounce hidden md:block" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        <img src={onigiri} alt="" className="absolute bottom-20 left-1/4 w-14 h-14 opacity-25 animate-bounce hidden md:block" style={{ animationDuration: '3s', animationDelay: '2s' }} />
        <img src={fan} alt="" className="absolute top-2/3 right-1/4 w-16 h-16 opacity-20 animate-bounce hidden lg:block" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />
      </div>

      <div className="absolute inset-0 bg-background/85" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/">
              <Button 
                variant="outline" 
                className="mb-6 border-primary/30 hover:bg-primary/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="text-center mb-12">
              <div className="flex justify-center gap-4 mb-4 flex-wrap">
                {decorativeElements.map((elem, i) => (
                  <img 
                    key={i} 
                    src={elem.img} 
                    alt={elem.alt} 
                    className="w-12 h-12 hover:scale-125 transition-transform cursor-pointer animate-scale-in" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                思い出 Memories Gallery
              </h1>
              <p className="text-lg text-foreground/70">
                Our precious moments with Hinaho Sensei
              </p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="group relative aspect-square bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-primary/20"
              >
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Corner decorations on hover */}
                <img 
                  src={decorativeElements[index % decorativeElements.length].img} 
                  alt="" 
                  className="absolute top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-80 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-12 text-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border-2 border-primary/20 inline-block relative">
              <img src={bento} alt="" className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16" />
              <div className="flex items-center gap-4 justify-center flex-wrap mb-4">
                <img src={matchaCup} alt="" className="w-10 h-10" />
                <p className="text-foreground/70 text-lg">
                  Cherished memories with Hinaho Sensei
                </p>
                <img src={onigiri} alt="" className="w-10 h-10" />
              </div>
              <p className="text-sm text-primary font-semibold">
                ありがとうございました ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;