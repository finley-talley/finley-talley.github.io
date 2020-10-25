$(document).ready(function(){

  var secrets = [
  "even though i’m body positive for other people, i put so much of my value into my looks. i feel like i measure where i am in my life (whether i’m doing well, whether i’m seeing someone) with my appearance.",
  "in high school, i had a ton of friends that were my same race but i never /really/ felt included in their group because i’m mixed. i sort of felt not enough for them. but i see that we’re different kinds of people and that they were friends way before they met me. i don’t think i missed out on anything.",
  "i got into gnarly car accidents when i was like 15. i was struck, sitting on the passenger side of the car, each time. it gave me anxiety for years and i never fully realized it, never owned up to it until this year. i finally got my license two days ago. i’ve never been prouder.",
  "i have siblings and most of us are close except one of us. they’ve gone through mental health struggles before and i never know how to help them. maybe i don’t know how to help them because i should try harder. i hate that i don’t. ",
  "i fall asleep thinking of making my exes jealous with other men. it’s really satisfying. i’m actually not ashamed of this.",
  "i’m scared that i’ll never love someone the way i loved my ex.",
  "i peed my pants in the 4th grade because i was too scared of public bathrooms. i kind of just walked home at the end of the day. my mom didn’t notice.",
  "one of my biggest fears is being left alone emotionally and socially",
  "i have a crush on someone who barely knows i exist",
  "i actually really want a girlfriend",
  "i've known that i'm transgender since i was 15",
  "i take on too many responsibilities for myself",
  "i hate chewing gum and stretchy cheese because they're so stringy",
  "i stim when i'm by myself",
  "i really like keeping up with the kardashians",
  "i want to get married someday, and it's my biggest dream, way bigger than even going to college or graduating.",
  "i really enjoy sex and the concept of it and i hate being a virgin",
  "i still haven't had my first kiss",
  "i try to pretend i don't care anymore, but if i could, i would choose to have my biological family in my life",
  "i wholeheartedly love being gay and queer and i hate when other gay people try to make that 'cringey'",
  "i'm so afraid my voice sounds like james charles",
  "i'm super nervous about my appearance all the time but can't admit it",
  "my mental health is always 20x worse than i'd ever let on but i can't let my friends know that!",
  "i script many of the things i say in my head to prevent anxiety",
  "i journaled about you and cried over you for weeks and we're not even dating. i'm still not okay and at this rate i don't know if i ever will be. i'm scared of what my life looks like without you",
  "buying things actually makes me really really happy.",
  "i lean into my queerness more than my ethnicity because my racial identity is still so complicated for me. i don't know how to exist as (Race) without diluting myself intentionally or feeling like i'm not good enough for someone of my race."
  ];

  document.getElementById('randomText').innerHTML =
    '<span>' + secrets[Math.floor(Math.random()*secrets.length)] + '</span>';

});
