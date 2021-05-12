const aboutDisplayController = (() => {
  const aboutHeader = function() {
    const h2 = document.createElement('h2');
    h2.textContent = "About Lilly";

    return h2;
  }

  const aboutParagraph = function() {
    const p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt nobis earum, magni fuga libero eum, architecto illo fugit odio iusto, quibusdam ducimus veritatis ullam pariatur non mollitia beatae suscipit nihil totam. Necessitatibus iste aspernatur voluptates possimus, consequuntur eos, officiis aperiam quisquam ad rem vel vero? Ut, necessitatibus vitae. Ducimus quam incidunt eligendi doloremque iure quaerat architecto, inventore magni dignissimos?";

    return p
  }

  const about = function() {
    const aboutContainer = document.createElement('section');
    aboutContainer.id = "about-container";
    aboutContainer.appendChild(aboutHeader());
    aboutContainer.appendChild(aboutParagraph());

    return aboutContainer;
  }

  return { about }
})();

export default aboutDisplayController.about();
