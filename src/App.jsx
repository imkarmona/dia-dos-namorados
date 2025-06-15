import React, { useState } from 'react';
import './App.css';

function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="app-bg">
      {!revealed ? (
        <div className="centered">
          <h1 className="title">Um presente especial para você</h1>
          <p className="subtitle">Se prepara pra uma surpresa que vai deixar seu coração quentinho. Toque no botão abaixo para revelar o que te espera.</p>
          <button className="reveal-btn" onClick={() => setRevealed(true)}>
            Revelar Surpresa
          </button>
        </div>
      ) : (
        <div className="surprise">
          <h2 className="main-title">Feliz Dia dos Namorados e 1 ano, meu amor!</h2>
          <p className="main-subtitle">Que seja o primeiro de muitos, te amo demais!!! eu quero casar com ocê, ta bom?</p>
          <div className="memories">
            <h3>Nossas Memórias</h3>
            <div className="memories-cards horizontal-scroll">
              <div className="memory-card">
                <img src="/public/image-1.jpeg" alt="Primeiro encontro" />
              </div>
              <div className="memory-card">
                <img src="/public/image-2.jpeg" alt="Viagem inesquecível" />
              </div>
              <div className="memory-card">
                <img src="/public/image-3.jpeg" alt="Momento especial" />
              </div>
              <div className="memory-card">
                <img src="/public/image-4.jpeg" alt="Momento especial" />
              </div>
            </div>
          </div>
          <div className="love-letter">
            <h3>Uma Mensagem para Você</h3>
            <div className="letter-card">
              <p>Te amo pra sempre, você é a pecinha q faltava pra completar o guilerme bobão, obrigado por tudo, sou completamente apaixonado por cada detalhe seu 💖</p>
            </div>
              <p className="main-subtitle">Cê viu que moço romantico?</p>
          </div>
          <div className="spotify-section">
            <h3>Nossa Playlist</h3>
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/4ebYHfEiwObn61nhapUsSu?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
            <div className="time-together"></div>
            <h3>Estamos oficialmente juntos há:</h3>
            <p className="time-counter">
              {(() => {
              const startDate = new Date('2024-06-12');
              const now = new Date();
              const diff = now - startDate;
              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
              const minutes = Math.floor((diff / (1000 * 60)) % 60);
              const seconds = Math.floor((diff / 1000) % 60);
              return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
              })()}
            </p>
        </div>
      )}
    </div>
  );
}

export default App;
