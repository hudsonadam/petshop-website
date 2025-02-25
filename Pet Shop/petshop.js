document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("GdINA5tX1Kyk9W949");
  
    const pets = [
      {
        name: "Golden Retriever",
        type: "Dog",
        price: "Rs 8,000",
        image:
          "https://th.bing.com/th/id/R.d3c9282fa58834b00161f25181fc3caf?rik=zOVFZu364ARJuA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb4%2fGolden_Retriever_puppy_standing.jpg&ehk=Kk2kjbQaS3iQrO0963NOU8IKTCWRw23eH6dmLA8jFa8%3d&risl=1&pid=ImgRaw&r=0"
      },
      {
        name: "Pomeranian",
        type: "Dog",
        price: "Rs 4,000",
        image:
          "https://i.pinimg.com/originals/64/93/5c/64935c73f0dff87d037d85491307b274.jpg"
      },
      {
        name: "Husky",
        type: "Dog",
        price: "Rs 9,000",
        image:
          "https://th.bing.com/th/id/OIP.hmeV_PRrfkAqPX67Wakq1gHaE6?rs=1&pid=ImgDetMain"
      },
      {
        name: "German Shepherd",
        type: "Dog",
        price: "Rs 10,000",
        image: "https://wallpaperaccess.com/full/370687.jpg"
      },
      {
        name: "Labrador",
        type: "Dog",
        price: "Rs 4,500",
        image:
          "https://www.101dogbreeds.com/wp-content/uploads/2018/10/Labrador-Retriever-Puppies.jpg"
      },
      {
        name: "Persian Cat",
        type: "Cat",
        price: "Rs 5,000",
        image:
          "https://cdn.fotofits.com/petzlover/gallery/img/l/persian-503981.jpg"
      },
      {
        name: "Aegean Cat",
        type: "Cat",
        price: "Rs 4,000",
        image:
          "https://vetstreet-brightspot.s3.amazonaws.com/45/8a/b631e9c44a148130feea7c99cbc7/aegean-cat-alamy-dykp57-645.jpg"
      },
      {
        name: "American Curl",
        type: "Cat",
        price: "Rs 6,000",
        image:
          "https://www.zooplus.de/magazin/wp-content/uploads/2017/04/american-curl-kitten-cremefarbe.jpg"
      },
      {
        name: "Cyprus Cat",
        type: "Cat",
        price: "Rs 3,300",
        image:
          "https://www.catbreedselector.com/wp-content/uploads/2017/04/Cyprus-Kitten.jpg"
      },
      {
        name: "Bengal Cat",
        type: "Cat",
        price: "Rs 4,100",
        image: "https://cats.com/wp-content/uploads/2020/10/The-Bengal-cat.jpg"
      },
      {
        name: "Cape Parrot",
        type: "Parrot",
        price: "Rs 4,800",
        image:
          "https://www.singing-wings-aviary.com/wp-content/uploads/2016/12/Cape-Parrot-Pictures.jpg"
      },
      {
        name: "Grey Parrot",
        type: "Parrot",
        price: "Rs 5,800",
        image:
          "https://www.thesprucepets.com/thmb/5JxmlzHhN1MuL1kw0dR4Wxf_A2M=/4875x3251/filters:fill(auto,1)/african-grey-parrot--psittacus-erithacus--captive-121805814-5b4bf98346e0fb003790af41.jpg"
      },
      {
        name: "Brown-Necked Parrot",
        type: "Parrot ",
        price: "Rs 5,250",
        image:
          "https://www.zoozlin.eu/media/photos/animal/item/gallery/images-1137/f56df186fa6593b664309dab18585e8b-t1.jpeg"
      },
      {
        name: "Red-Fronted Parrot",
        type: "Parrot",
        price: "Rs 5,650",
        image:
          "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/251890341/1800"
      },
      {
        name: "Meyer's Parrot",
        type: "Parrot",
        price: "Rs 4,650",
        image:
          "https://www.singing-wings-aviary.com/wp-content/uploads/2016/09/Meyer%E2%80%99s-Parrot.jpg"
      },
      {
        name: "Yellow-Collared Lovebirds",
        type: "Lovebirds",
        price: "Rs 2,400",
        image:
          "https://pangovet.com/wp-content/uploads/2024/06/yellow-collared-lovebird-perched-on-tree_Rich-Lindie-Shutterstock.jpg"
      },
      {
        name: "Rosie Faced Lovebird",
        type: "Lovebirds",
        price: "Rs 3,100",
        image:
          "https://pangovet.com/wp-content/uploads/2024/06/rosy-faced-lovebird_Jearu-Shutterstock.jpg"
      },
      {
        name: "Fischer's Lovebirds",
        type: "Lovebirds",
        price: "Rs 3,700",
        image:
          "https://pangovet.com/wp-content/uploads/2024/06/Fischers-Lovebirds_Danita-Delimont_Shutterstock.jpg"
      },
      {
        name: "Lilian’s Lovebirds",
        type: "Lovebirds",
        price: "Rs 2,900",
        image:
          "https://pangovet.com/wp-content/uploads/2024/06/Lilians-Lovebirds_Ward-Poppe_Shutterstock.jpg"
      },
      {
        name: "Madagascar Lovebirds",
        type: "Lovebirds",
        price: "Rs 2,500",
        image:
          "https://pangovet.com/wp-content/uploads/2024/06/a-grey-headed-lovebird-on-a-tree-branch_Eckhard-Lietzow_Shutterstock.jpg"
      },
      {
        name: "Alaskan Rabbit",
        type: "Rabbit",
        price: "Rs 1,500",
        image:
          "https://www.thesprucepets.com/thmb/c3lZFDzHokm6ARCGsIbVp4TXISM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Alaska_schwarz-5c0da4e046e0fb00016992f0.jpg"
      },
      {
        name: "American Rabbit",
        type: "Rabbit",
        price: "Rs 1,900",
        image:
          "https://www.thesprucepets.com/thmb/CoczPUNei0-6EBC6ZOhG2wLVSNo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-136483182-241a399c9e434c189feec1efc812bee4.jpg"
      },
      {
        name: "Argente Rabbit",
        type: "Rabbit",
        price: "Rs 3,100",
        image:
          "https://www.thesprucepets.com/thmb/GPeJkNch4Jvl5FBrGISUjsQCdv8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-612847338-87887af373ab4cc5aaf0913e772be954.jpg"
      },
      {
        name: "Britannia Petite ",
        type: "Rabbit",
        price: "Rs 3,800",
        image:
          "https://www.thesprucepets.com/thmb/iMaLYUN-8Q4IwglY1BvqLwDfNcg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-499241363-0c04e48597ac49218b8143a464fd1820.jpg"
      },
      {
        name: "American Sable",
        type: "Rabbit",
        price: "Rs 2,500",
        image:
          "https://www.thesprucepets.com/thmb/nC_x5ehMcTEvKO7ZW0NDUpesJGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1306004020-3b8f0f72e50246129af29395f3976bfb.jpg"
      },
      {
        name: "Goldfish",
        type: "Fish",
        price: "Rs 400",
        image:
          "https://th.bing.com/th/id/R.200617c64d29ec58584ad4c86293a449?rik=h7xvmtsNJJ1VFA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f3%2ff%2f821729-gold-fish-wallpaper-2057x1200-windows-7.jpg&ehk=AAIRIum9%2bqzX4V2IJIMctDxFyAnUs%2bkIszRphh%2bMs34%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        name: "Beta Fish",
        type: "Fish",
        price: "Rs 700",
        image:
          "https://www.aquariumnexus.com/wp-content/uploads/2019/10/beautiful-betta-fish.webp"
      },
      {
        name: "Molly Fish",
        type: "Fish",
        price: "Rs 600",
        image:
          "https://www.aquariumnexus.com/wp-content/uploads/2020/04/black-molly-fish.webp"
      },
      {
        name: "Sword Tails",
        type: "Fish",
        price: "Rs 500",
        image:
          "https://www.aquariumnexus.com/wp-content/uploads/2023/04/red-swordtail.webp"
      },
      {
        name: "Cherry Barbs",
        type: "Fish",
        price: "Rs 900",
        image:
          "https://www.aquariumnexus.com/wp-content/uploads/2023/04/cherry-barb.webp"
      },
      {
        name: "Welsh Harlequin",
        type: "Duck",
        price: "Rs 2,000",
        image:
          "https://www.raising-ducks.com/_astro/welshharlequinduck1_2qm02w.webp"
      },
      {
        name: "Pekin",
        type: "Duck",
        price: "Rs 1,000",
        image: "https://www.raising-ducks.com/_astro/pekin3_ZFyFAu.webp"
      },
      {
        name: "Call",
        type: "Duck",
        price: "Rs 1,750",
        image:
          "https://www.raising-ducks.com/_astro/white-female-call-ducks_2uJz03.webp"
      },
      {
        name: "Blue Swedish",
        type: "Duck",
        price: "Rs 1,300",
        image:
          "https://www.raising-ducks.com/_astro/blue-swedish-duck_ZoUj4A.webp"
      },
      {
        name: "Rouen",
        type: "Duck",
        price: "Rs 1,700",
        image: "https://www.raising-ducks.com/_astro/rouen-drake_1KxtNu.webp"
      }
    ];
  
    const petContainer = document.querySelector(".pet-container");
  
    function renderPets() {
      petContainer.innerHTML = "";
      pets.forEach((pet) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
  
        petCard.innerHTML = `
                  <img src="${pet.image}" alt="${pet.name}">
                  <h3>${pet.name}</h3>
                  <p>Type: ${pet.type}</p>
                  <p>Price: ${pet.price}</p>
                  <button class="order-btn" data-name="${pet.name}" data-price="${pet.price}">Order Now</button>
              `;
  
        petContainer.appendChild(petCard);
      });
    }
  
    renderPets();
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("order-btn")) {
        document.getElementById("pet-name").value = event.target.getAttribute(
          "data-name"
        );
        document.getElementById("pet-price").value = event.target.getAttribute(
          "data-price"
        );
        document.getElementById("order-modal").style.display = "flex";
      }
    });
  
    document
      .getElementById("order-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        const formData = {
          name: document.getElementById("customer-name").value,
          email: document.getElementById("customer-email").value,
          address: document.getElementById("customer-address").value,
          pet: document.getElementById("pet-name").value,
          price: document.getElementById("pet-price").value,
          quantity: document.getElementById("quantity").value
        };
  
        emailjs
          .send("service_gdlpwyd", "template_7skocaa", formData)
          .then(() => alert("Order placed! Details sent to shopkeeper."))
          .catch((err) => console.error("EmailJS Error:", err));
  
        document.getElementById("order-modal").style.display = "none";
      });
  
    document
      .getElementById("theme-toggle")
      .addEventListener("click", () =>
        document.body.classList.toggle("dark-mode")
      );
  });
  
  document.getElementById("close-modal").addEventListener("click",function(event){
    document.getElementById("order-modal").style.display = "none";
  })