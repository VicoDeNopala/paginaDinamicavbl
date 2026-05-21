function Gallery() {
  return (
    <section id="galeria" className="container py-5">
      <h2 className="section-title">Galería</h2>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1501612780327-45045538702b"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/kXYiU_JCYtU"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-4">
        <audio controls className="w-100">
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>
    </section>
  );
}

export default Gallery;
