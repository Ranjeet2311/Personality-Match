const personalityList = [
  {
    name: "Leonardo DiCaprio",
    pic: "./images/actor/leo.jpg",
    text: " You realise that there is nothing more precious than the soul connections you share, and that you're actively making space for those who've uplifted your spirit through the years. ",
  },
  {
    name: "Dwayne Johnson",
    pic: "./images/actor/rock.jpg",
    text: " You and your amour are actively finding ways to escape the social scene so you can get ample of time alone. If the city life is being unkind, remember that you always have the option to wander off into the hills.",
  },
  {
    name: "Will Smith",
    pic: "./images/actor/will.jpg",
    text: " Word for the wise: reaffirm those boundaries, boo, and make a conscious effort to not let others get to you. Remembering the Polish proverb 'Not my circus, not my monkeys' will serve you well at a time like this.",
  },
  {
    name: "Tom Cruise",
    pic: "./images/actor/tom.jpg",
    text: "  Remember, there's a lot that happens before the birthing process, though, labour pains included. So, take the seeming unpleasant experiences in your stride too with the inner knowing that they are teaching you important life lessons.",
  },
  {
    name: "Johnny Depp",
    pic: "./images/actor/depp.jpg",
    text: " It's time to introspect on Lucifer Morningstar's favourite question, “What is it that you truly desire?” While you're acing the career game, there's a lot more you are meant to achieve in the coming year.",
  },
  {
    name: "Brad Pitt",
    pic: "./images/actor/pitt.jpg",
    text: " There's only one way to make space for what Destiny has in store and it requires you to be the wildest version of yourself.",
  },
  {
    name: "Denzel Washington",
    pic: "./images/actor/denzel.jpg",
    text: " Embody courage as you march forward and onwards anyway. Make a ritual out of replacing 'fear' with 'faith'. Oh, the treasures you will find once you cross the threshold, baby",
  },
  {
    name: "Angelina Jolie",
    pic: "./images/actor/jolly.jpg",
    text: " Today, you're being reminded that your inner compass is pointing in the direction of this purpose. Don't resist the changes.",
  },
  {
    name: "Scarlett Johansson",
    pic: "./images/actor/scar.jpg",
    text: " Trust that your physical reality will begin to mirror your beliefs back at you, beautiful! Meanwhile, things on the domestic front are looking as good as they feel.",
  },
  {
    name: "Natalie Portman",
    pic: "./images/actor/portman.png",
    text: " Spirit is asking you to care for your home as it cares for you. To uplift the energy around you by engaging in simple cleansing and purification rituals.",
  },
  {
    name: "Nicole Kidman",
    pic: "./images/actor/kidman.jpg",
    text: " One of those days when nothing and nobody seems to be going your way. In fact, you’re constantly fire-fighting because those around you are causing more problems than they’re solving.",
  },
  {
    name: "Emma Watson",
    pic: "./images/actor/emma.jpg",
    text: " Step back and watch what's unfolding as you take charge of your vibration. This will help you realise that you are not the ‘doer’ and you do not have to control everything.",
  },
];

const btn = document.querySelector("#btn");
// const restartButton = document.querySelector("#start-button");
const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const infoWrapper = document.querySelector("#info-wrapper");

const arrayLength = personalityList.length;
const randomNumberGenerator = Math.floor(Math.random() * arrayLength);

console.log(randomNumberGenerator);
console.log(arrayLength);

btn.addEventListener("click", () => {
  if (input1.value.length > 2) {
    if (input2.value > 10 && input2.value < 100) {
      input1.style.display = "none";
      input2.style.display = "none";
      btn.style.display = "none";
      infoWrapper.innerHTML = `      <div class="result">
            <h1 class="h1" >!CONGRATULATIONS!</h1>
            <h1>${input1.value} , ${input2.value}, your personality matches </h1>
            <img class="actor-img" src=${personalityList[randomNumberGenerator].pic} alt="">
            <h1>${personalityList[randomNumberGenerator].name}</h1>
            <p class="p"><span>Lesson for the day: </span> ${personalityList[randomNumberGenerator].text} </p>
            <button id="start-button" class="btn">Start Again</button>
        
          </div>`;

      document.querySelector("#start-button").addEventListener("click", () => {
        console.log("restart");
        location.reload();
      });
    } else {
      alert(
        "Please check and correct you name and age. You must be between 10 - 100 years"
      );
    }
  } else if (
    input1.value.length < 2 &&
    input2.value < 10 &&
    input2.value > 100
  ) {
    alert("Enter a valid name and age ");
  } else {
    alert("Enter you name and age");
  }
});
