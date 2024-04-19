for (let destination of scotland) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="scotland__card">
          <div><img class="fish__image image--card" src="${scotland.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species"> Species: ${fish.species}</div>
            <div class="fish__length">Length in inches: ${fish.length}</div>
            <div class="fish__location">Found in: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`;
  }