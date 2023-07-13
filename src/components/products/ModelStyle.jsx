import React, { useState } from "react";
import styles from "./ModelStyle.module.css";

const ModelStyle = ({ title, description }) => {
  return (
    <div className={styles.modelsStyle}>
      <h3 className={styles.styleTitle}>{title}</h3>
      <p className={styles.styleDescription}>{description}</p>
    </div>
  );
};
const StyleSection = () => {
  const [isStylesVisible, setIsStylesVisible] = useState(false);

  const toggleStylesVisibility = () => {
    setIsStylesVisible(!isStylesVisible);
  };

  return (
    <div className={styles.styleSection}>
      <h2 className={styles.styleMainTitle} onClick={toggleStylesVisibility}>
        Shop by Style
      </h2>
      <section className={`${styles.stylesSubsection} ${isStylesVisible ? styles.visible : ""}`}>
        <div className={styles.modelStylesContainer}>
          <div className={styles.row}>
            <div className={styles.modelStyle}>
              <ModelStyle
                title="Ali"
                description="Ali's style is bold and versatile, with a focus on statement pieces. She likes to mix and match different patterns and colors to create eye-catching looks. Her wardrobe is full of comfortable yet stylish pieces, such as loose-fitting pants and oversized tops, that can be dressed up or down. Whether she's picking the kids up from school or attending a business meeting, Ali's wardrobe has got her covered."
              />
            </div>
            <div className={styles.modelStyle}>
              <ModelStyle
                title="Amanda"
                description="Amanda's style is classic and timeless, with a focus on clean lines and neutral colors. She prefers simple yet elegant pieces that can be worn in a variety of settings. Her wardrobe consists of well-tailored blouses, skirts, and dresses in shades of black, white, and gray. Amanda's style is all about embracing femininity while still being practical and comfortable."
              />
            </div>
            <div className={styles.modelStyle}>
              <ModelStyle
                title="Daisy"
                description="Daisy's style is feminine and playful, with a focus on soft colors and flowy fabrics. She likes to incorporate fun and flirty details into her outfits, such as ruffles, bows, and lace. Her wardrobe is filled with dresses, skirts, and tops in shades of pink, lavender, and cream. Whether she's running errands or dressing up for a night out, Daisy's pieces are perfect for any occasion."
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.modelStyle}>
              <ModelStyle
                title="Jennifer"
                description="Jennifer's style is edgy and modern, with a focus on bold prints and statement accessories. She likes to experiment with different textures and fabrics, and often mixes and matches unexpected pieces. Her wardrobe includes leather jackets, graphic t-shirts, and chunky jewelry. Jennifer's wardrobe is perfect for balancing her busy work schedule with her personal life, as her pieces can easily be dressed up or down."
              />
            </div>
            <div className={styles.modelStyle}>
              <ModelStyle
                title="Mirabel"
                description="Mirabel's style is eclectic and bohemian, with a focus on unique prints and vintage-inspired pieces. She likes to incorporate a mix of patterns and textures into her outfits, and often wears flowing maxi dresses and layered jewelry. Her style is all about embracing one's individuality and having fun with fashion."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleSection;

// import React from "react";
// import styles from "./ModelStyle.module.css";

// const ModelStyle = ({ title, description }) => {
//   return (
//     <div className={styles.modelsStyle}>
//       <h3 className={styles.styleTitle}>{title}</h3>
//       <p className={styles.styleDescription}>{description}</p>
//     </div>
//   );
// };

// const StyleSection = () => {
//   return (
//     <div className={styles.styleSection}>
//       <h2 className={styles.styleMainTitle}>Shop by Style</h2>
//       <section className={styles.stylesSubsection}>
//         <div className={styles.modelStylesContainer}>
//           <div className={styles.row}>
//             <div className={styles.modelStyle}>
//               <ModelStyle
//                 title="Ali"
//                 description="Ali's style is bold and versatile, with a focus on statement pieces. She likes to mix and match different patterns and colors to create eye-catching looks. Her wardrobe is full of comfortable yet stylish pieces, such as loose-fitting pants and oversized tops, that can be dressed up or down. Whether she's picking the kids up from school or attending a business meeting, Ali's wardrobe has got her covered."
//               />
//             </div>
//             <div className={styles.modelStyle}>
//               <ModelStyle
//                 title="Amanda"
//                 description="Amanda's style is classic and timeless, with a focus on clean lines and neutral colors. She prefers simple yet elegant pieces that can be worn in a variety of settings. Her wardrobe consists of well-tailored blouses, skirts, and dresses in shades of black, white, and gray. Amanda's style is all about embracing femininity while still being practical and comfortable."
//               />
//             </div>
//             <div className={styles.modelStyle}>
//               <ModelStyle
//                 title="Daisy"
//                 description="Daisy's style is feminine and playful, with a focus on soft colors and flowy fabrics. She likes to incorporate fun and flirty details into her outfits, such as ruffles, bows, and lace. Her wardrobe is filled with dresses, skirts, and tops in shades of pink, lavender, and cream. Whether she's running errands or dressing up for a night out, Daisy's pieces are perfect for any occasion."
//               />
//             </div>
//           </div>
//           <div className={styles.row}>
//             <div className={styles.modelStyle}>
//               <ModelStyle
//                 title="Jennifer"
//                 description="Jennifer's style is edgy and modern, with a focus on bold prints and statement accessories. She likes to experiment with different textures and fabrics, and often mixes and matches unexpected pieces. Her wardrobe includes leather jackets, graphic t-shirts, and chunky jewelry. Jennifer's wardrobe is perfect for balancing her busy work schedule with her personal life, as her pieces can easily be dressed up or down."
//               />
//             </div>
//             <div className={styles.modelStyle}>
//               <ModelStyle
//                 title="Mirabel"
//                 description="Mirabel's style is eclectic and bohemian, with a focus on unique prints and vintage-inspired pieces. She likes to incorporate a mix of patterns and textures into her outfits, and often wears flowing maxi dresses and layered jewelry. Her style is all about embracing one's individuality and having fun with fashion."
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const StyleSection = () => {
//   return (
//     <>
//       <h2 className={styles.styleMainTitle}>Shop by Style</h2>
//       <section className={styles.stylesSubsection}>
//         <div className={styles.modelStyle}>
//           <ModelStyle
//             title="Ali"
//             description="Ali's style is bold and versatile, with a focus on statement pieces. She likes to mix and match different patterns and colors to create eye-catching looks. Her wardrobe is full of comfortable yet stylish pieces, such as loose-fitting pants and oversized tops, that can be dressed up or down. Whether she's picking the kids up from school or attending a business meeting, Ali's wardrobe has got her covered."
//           />
//         </div>
//         <div className={styles.modelStyle}>
//           <ModelStyle
//             title="Amanda"
//             description="Amanda's style is classic and timeless, with a focus on clean lines and neutral colors. She prefers simple yet elegant pieces that can be worn in a variety of settings. Her wardrobe consists of well-tailored blouses, skirts, and dresses in shades of black, white, and gray. Amanda's style is all about embracing femininity while still being practical and comfortable."
//           />
//         </div>
//         <div className={styles.modelStyle}>
//           <ModelStyle
//             title="Daisy"
//             description="Daisy's style is feminine and playful, with a focus on soft colors and flowy fabrics. She likes to incorporate fun and flirty details into her outfits, such as ruffles, bows, and lace. Her wardrobe is filled with dresses, skirts, and tops in shades of pink, lavender, and cream. Whether she's running errands or dressing up for a night out, Daisy's pieces are perfect for any occasion."
//           />
//         </div>
//         <div className={styles.modelStyle}>
//           <ModelStyle
//             title="Jennifer"
//             description="Jennifer's style is edgy and modern, with a focus on bold prints and statement accessories. She likes to experiment with different textures and fabrics, and often mixes and matches unexpected pieces. Her wardrobe includes leather jackets, graphic t-shirts, and chunky jewelry. Jennifer's wardrobe is perfect for balancing her busy work schedule with her personal life, as her pieces can easily be dressed up or down."
//           />
//         </div>
//         <div className={styles.modelStyle}>
//           <ModelStyle
//             title="Mirabel"
//             description="Mirabel's style is eclectic and bohemian, with a focus on unique prints and vintage-inspired pieces. She likes to incorporate a mix of patterns and textures into her outfits, and often wears flowing maxi dresses and layered jewelry. Her style is all about embracing one's individuality and having fun with fashion."
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default StyleSection;

// import React from "react";
// import "./styles.css";

// const ModelStyle = ({ title, description }) => {
//   return (
//     <div className="models-style">
//       <h3 className="style-title">{title}</h3>
//       <p className="style-description">{description}</p>
//     </div>
//   );
// };

// const StyleSection = () => {
//   return (
//     <section id="styles-subsection">
//       <div className="model-style">
//         <ModelStyle
//           title="Ali"
//           description="Ali's style is bold and versatile, with a focus on statement pieces. She likes to mix and match different patterns and colors to create eye-catching looks. Her wardrobe is full of comfortable yet stylish pieces, such as loose-fitting pants and oversized tops, that can be dressed up or down. Whether she's picking the kids up from school or attending a business meeting, Ali's wardrobe has got her covered."
//         />
//       </div>
//       <div className="model-style">
//         <ModelStyle
//           title="Amanda"
//           description="Amanda's style is classic and timeless, with a focus on clean lines and neutral colors. She prefers simple yet elegant pieces that can be worn in a variety of settings. Her wardrobe consists of well-tailored blouses, skirts, and dresses in shades of black, white, and gray. Amanda's style is all about embracing femininity while still being practical and comfortable."
//         />
//       </div>
//       <div className="model-style">
//         <ModelStyle
//           title="Daisy"
//           description="Daisy's style is feminine and playful, with a focus on soft colors and flowy fabrics. She likes to incorporate fun and flirty details into her outfits, such as ruffles, bows, and lace. Her wardrobe is filled with dresses, skirts, and tops in shades of pink, lavender, and cream. Whether she's running errands or dressing up for a night out, Daisy's pieces are perfect for any occasion."
//         />
//       </div>
//       <div className="model-style">
//         <ModelStyle
//           title="Jennifer"
//           description="Jennifer's style is edgy and modern, with a focus on bold prints and statement accessories. She likes to experiment with different textures and fabrics, and often mixes and matches unexpected pieces. Her wardrobe includes leather jackets, graphic t-shirts, and chunky jewelry. Jennifer's wardrobe is perfect for balancing her busy work schedule with her personal life, as her pieces can easily be dressed up or down."
//         />
//       </div>
//       <div className="model-style">
//         <ModelStyle
//           title="Mirabel"
//           description="Mirabel's style is eclectic and bohemian, with a focus on unique prints and vintage-inspired pieces. She likes to incorporate a mix of patterns and textures into her outfits, and often wears flowing maxi dresses and layered jewelry. Her style is all about embracing one's individuality and having fun with fashion."
//         />
//       </div>
//     </section>
//   );
// };

// export default StyleSection;
