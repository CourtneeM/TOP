const heroDisplayController = (() =>{
  const heroImg = function() {
    const img = document.createElement('img');
    img.src = "./assets/hero_img.jpg";
    
    return img;
  }

  const heroText = function() {
    const h2 = document.createElement('h2');
    h2.textContent = "Enjoy a quiet atmosphere and an aroma of fresh tea";
    
    return h2;
  }

  const imgOverlay = function() {
    const div = document.createElement('div');
    return div;
  }
  
  const hero = function() {
    const heroContainer = document.createElement('section');
    heroContainer.id = "hero-container";
    heroContainer.appendChild(heroImg());
    heroContainer.appendChild(heroText());
    heroContainer.appendChild(imgOverlay());

    return heroContainer;
  }

  return { hero }
})();


export default heroDisplayController.hero();
