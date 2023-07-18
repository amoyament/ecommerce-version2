import React, { useState } from "react";
import "./ModelStyle.css";
const ModelStyle = ({ title, description }) => {
  return (
    <div className="models-style">
      <h3 className="style-title">{title}</h3>
      <p className="style-description">{description}</p>
    </div>
  );
};

// Main StyleSection component
const StyleSection = ({ onModelClick }) => {
  // State to toggle visibility of styles
  const [isStylesVisible, setIsStylesVisible] = useState(false);
  // Toggle visibility of styles
  const toggleStylesVisibility = () => {
    setIsStylesVisible(!isStylesVisible);
  };
  // Handle click on model to implement new api call
  const handleModelClick = (model) => {
    onModelClick(model);
  };

  return (
    <div className="style-section">
      <h2 className="style-main-title" onClick={toggleStylesVisibility}>
        Shop by Style
      </h2>
      <section className={`styles-subsection ${isStylesVisible ? "visible" : ""}`}>
        <div className="model-styles-container">
          <div className="row">
            <div className="model-style" onClick={() => handleModelClick("Ali")}>
              <ModelStyle
                title="Ali's Threads"
                description="Ali's style is bold and versatile, with a focus on statement pieces. She likes to mix and match different patterns and colors to create eye-catching looks. Her wardrobe is full of comfortable yet stylish pieces, such as loose-fitting pants and oversized tops, that can be dressed up or down. Whether she's picking the kids up from school or attending a business meeting, Ali's wardrobe has got her covered."
              />
            </div>
            <div className="model-style" onClick={() => handleModelClick("Amanda")}>
              <ModelStyle
                title="Amanda's Threads"
                description="Amanda's style is classic and timeless, with a focus on clean lines and neutral colors. She prefers simple yet elegant pieces that can be worn in a variety of settings. Her wardrobe consists of well-tailored blouses, skirts, and dresses in shades of black, white, and gray. Amanda's style is all about embracing femininity while still being practical and comfortable."
              />
            </div>
            <div className="model-style" onClick={() => handleModelClick("Daisy")}>
              <ModelStyle
                title="Daisy's Threads"
                description="Daisy's style is feminine and playful, with a focus on soft colors and flowy fabrics. She likes to incorporate fun and flirty details into her outfits, such as ruffles, bows, and lace. Her wardrobe is filled with dresses, skirts, and tops in shades of pink, lavender, and cream. Whether she's running errands or dressing up for a night out, Daisy's pieces are perfect for any occasion."
              />
            </div>
          </div>
          <div className="row">
            <div className="model-style" onClick={() => handleModelClick("Jennifer")}>
              <ModelStyle
                title="Jennifer's Threads"
                description="Jennifer's style is edgy and modern, with a focus on bold prints and statement accessories. She likes to experiment with different textures and fabrics, and often mixes and matches unexpected pieces. Her wardrobe includes leather jackets, graphic t-shirts, and chunky jewelry. Jennifer's wardrobe is perfect for balancing her busy work schedule with her personal life, as her pieces can easily be dressed up or down."
              />
            </div>
            <div className="model-style" onClick={() => handleModelClick("Mirabel")}>
              <ModelStyle
                title="Mirabel's Threads"
                description="Mirabel's style is eclectic and bohemian, with a focus on unique prints and vintage-inspired pieces. She likes to incorporate a mix of patterns and textures into her outfits, and often wears flowing maxi dresses and layered jewelry, effortlessly showcasing her free-spirited nature. Her style is all about embracing one's individuality and having fun with fashion, creating a captivating and whimsical look."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleSection;
