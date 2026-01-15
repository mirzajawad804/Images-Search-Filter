let grid = document.querySelector(".grid");
let searchInput = document.querySelector(".search-input");

    let data = [
      {
        name: "Mirza Jawad",
        title: "Mirza Jawad",
        img: "https://i.pinimg.com/736x/ca/cc/d7/caccd7ac23121bf1d2cb4b9e4fc0675f.jpg",
        desc: "Mirza Jawad is a professional web developer with strong experience in HTML, CSS, and JavaScript skills. He is professional experienced in how to roast the teachers and mischievous."
      },
      {
        name: "Mirza Khalil",
        title: "Mirza Khalil",
        img: "https://i.pinimg.com/1200x/47/80/33/4780337135f73945eb533d10007d8223.jpg",
        desc: "Mirza Khalil is a professional web developer with strong HTML, CSS, JS, C++, and PYTHON skills. He is professional experienced in How to roast others and teachers."
      },
      {
        name: "Mirza Jahazaib",
        title: "Mirza Jahzaib",
        img: "https://i.pinimg.com/736x/04/4e/93/044e939dc7c38303fc242d1db3d451b3.jpg",
        desc: "Mirza Jahzaib is a professional web developer with strong HTML, CSS, JS, React.JS, Node.JS and PHP skills."
      },
      {
        name: "Mirza Abdurehamn",
        title: "Mirza Abdurehamn",
        img: "https://i.pinimg.com/1200x/17/7a/b7/177ab7e00f21a6f4bc4c18aebd13b23b.jpg",
        desc: "Mirza Abdurehamn is a professional Badmash. He is professional experienced in cricket and how is making april fool others."
      },
      {
        name: "Ayesha Baig",
        title: "Ayesha Baig",
        img: "https://i.pinimg.com/736x/43/7b/ec/437becd0c12ff6387a20f5ab7c8f165b.jpg",
        desc: "Aesha baig is a professional front-end web developer experienced in HTML and CSS and Bit of JS."
      },
      {
        name: "Abdullah Mughal",
        title: "Abdullah Mughal",
        img: "https://i.pinimg.com/736x/92/b5/cb/92b5cbfbcba1f65b302f095efaeec734.jpg",
        desc: "Abdullah Mughal is a roast from other. He is professional experienced in all physiacl games and PUBG. He is a best player of PUBG."
      },
      {
        name: "Faizan Mughal",
        title: "Faizan Mughal",
        img: "https://i.pinimg.com/1200x/f2/70/a7/f270a78b23245899708892c501b4c191.jpg",
        desc: "Faizan Mughal is a professional chapri in thus world. he is lover of free-fire. He is professional experienced in One-Tap of free-fire game."
      },
      {
        name: "Mirza Fahad",
        title: "Mirza Fahad",
        img: "https://i.pinimg.com/736x/bd/ed/c5/bdedc577da0a0c5aa4e5192ed3cc8ca0.jpg",
        desc: "Mirza Fahad is a professional software engineer. He is professional experienced in instagram. He is very big heart."
      },
      {
        name: "Mirza Asad",
        title: "Mirza Asad",
        img: "https://i.pinimg.com/736x/dc/92/f2/dc92f2bd71cbc09b0254fbe7b446a635.jpg",
        desc: "Mirza Asad is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Abdullah Mughal",
        title: "Abdullah Mughal",
        img: "https://i.pinimg.com/736x/e5/71/d9/e571d98fa59c97ea01dd886f7aad6c68.jpg",
        desc: "Abdullah Mughal is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Mirza Naqash",
        title: "Mirza Naqash",
        img: "https://i.pinimg.com/736x/4c/4e/1d/4c4e1d05c7d0297ddf43c05be3ad7da0.jpg",
        desc: "Mirza Naqash is a real life taken-3 player. he is a ver dangoures player. He is professional experienced in Math."
      },
      {
        name: "Rana Ali",
        title: "Rana Ali",
        img: "https://i.pinimg.com/736x/7d/58/be/7d58be2ff5881fad5b186d9ce8975937.jpg",
        desc: "Rana Ali is a real life taken-6 player. He is really most dangoures player. He is professioanl experienced in all World Subject(really)"
      },
      {
        name: "Rana Khawar",
        title: "Rana Khawar",
        img: "https://i.pinimg.com/736x/07/b7/6b/07b76bae46fdf5ce62ccdfeb271dbb26.jpg",
        desc: "Rana Khawar is a professional chapri. he is experinced in all bad work of world. He is professional experienced in physics and a bit of Math"
      },
      {
        name: "Ayaz Raza",
        title: "Ayaz Raza",
        img: "https://i.pinimg.com/736x/7b/76/41/7b7641e41593cabd269e40bfc6d786f9.jpg",
        desc: "Ayaz Raza is a professional web developer experienced in HTML, CSS, JS, C++, Python. He is professional experienced in Computer science."
      },
      {
        name: "Rana Adnan",
        title: "Rana Adnan",
        img: "https://i.pinimg.com/736x/04/50/cf/0450cff7f1f3312b493c2492425b2bfc.jpg",
        desc: "Rana Adnan is a professional in all science subject. he is professional experienced in BIOLOGY, CHEMISTRY, ZOLOGY, COMPURT SCIENCE"
      },
      {
        name: "Mirza Sanan",
        title: "Mirza Sanan",
        img: "https://i.pinimg.com/736x/d6/89/95/d689958708e628dfd6c033802a87a4c7.jpg",
        desc: "Mirza sanan is a professional cheff. He cooked all things in this world. He is professional experienced in Baking a Fast food."
      },
      {
        name: "Amna Jatt",
        title: "Amna Jatt",
        img: "https://i.pinimg.com/736x/1d/79/cb/1d79cb71ca8b30bec24f273bd5e0893c.jpg",
        desc: "Amna Jatt is a professional front-end web developer experienced in HTML, CSS, JS, React.JS, Node.JS and PHP."
      },
      {
        name: "Rana Waqas",
        title: "Rana Waqas",
        img: "https://i.pinimg.com/736x/24/55/30/24553045baa642acc726be763b802a7e.jpg",
        desc: "Rana Waqas is a professional  web developer experienced in HTML, CSS, JS, React.JS, Node.JS and PHP."
      },
      {
        name: "Ahmad dogar",
        title: "Ahmad Dogar",
        img: "https://i.pinimg.com/736x/db/83/aa/db83aa77d6a04a0a270d6055be6dc543.jpg",
        desc: "Ahmad Dogar is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Kabir Gujjar",
        title: "Kabir Gujjar",
        img: "https://i.pinimg.com/736x/74/25/42/7425421b0893a3b3ce47a7bf82ab5486.jpg",
        desc: "Kabir Gujjar is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Rana Zeeshan",
        title: "Rana Zeeshan",
        img: "https://i.pinimg.com/736x/9a/06/5d/9a065db4fd04e113d81c7ef983046f70.jpg",
        desc: "Rana Zeeshan is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Gulam Ali",
        title: "Gulam Ali",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqID-Q6umewIgu-8YQ3UiQpvzm2T4bWy527A&s",
        desc: "Gulam Ali is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Waqas Gujjar",
        title: "Waqas Gujjar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTVL4acPoTq01TrFNnM65xDlT5B4_oiq7ew&s",
        desc: "Waqas Gujjar is a professional front-end web developer experienced in HTML and CSS."
      },
      {
        name: "Mirza shazaib",
        title: "Mirza shazaib",
        img: "https://i.pinimg.com/736x/42/ce/f8/42cef8ecba28acd3f2b7f034f5b4a857.jpg",
        desc: "Mirza shazaib is a professional front-end web developer experienced in HTML and CSS."
      }

    ];

    function createCards(items) {
      grid.innerHTML = "";

      items.forEach(function (item) {

        let card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-name", item.name);

        let imgBox = document.createElement("div");
        imgBox.className = "img-box";

        let span = document.createElement("span");
        span.className = "img-title";
        span.innerText = item.title;

        let img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;

        let p = document.createElement("p");
        p.innerText = item.desc;

        imgBox.appendChild(span);
        imgBox.appendChild(img);

        card.appendChild(imgBox);
        card.appendChild(p);

        grid.appendChild(card);
      });
    }

    createCards(data);

    searchInput.addEventListener("input", function () {
      let value = searchInput.value.toLowerCase();

      let filtered = data.filter(function (item) {
        return (
          item.name.toLowerCase().includes(value) ||
          item.title.toLowerCase().includes(value)
        );
      });

      createCards(filtered);
    });

