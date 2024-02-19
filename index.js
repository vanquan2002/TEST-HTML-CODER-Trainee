document.querySelectorAll(".closeNav").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("nav-mb-input").checked = false;
  });
});

var descriptions = [
  {
    des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.",
    des2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
  },
  {
    des1: "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in ligula eget nisi interdum molestie. Mauris auctor, justo nec malesuada pharetra, eros metus feugiat ligula, non fermentum elit felis non velit.",
    des2: "Nullam in ligula eget nisi interdum molestie. Mauris auctor, justo nec malesuada pharetra, eros metus feugiat ligula, non fermentum elit felis non velit.",
  },

  {
    des1: "Ut sed tellus in ex varius vestibulum. Fusce sodales est ac felis tempus, sed viverra est facilisis. Sed eu augue eget enim rhoncus finibus. Mauris placerat velit vel justo vehicula, in consequat justo tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus.",
    des2: "Mauris placerat velit vel justo vehicula, in consequat justo tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
  },
];

var tabs = document.querySelectorAll(".tab");
var descriptionsFeature = document.querySelector(".descriptions-feature");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");

    descriptionsFeature.classList.add("fade-out");

    setTimeout(() => {
      descriptionsFeature.querySelector(
        ".descriptions-feature-item-1"
      ).innerText = descriptions[i].des1;
      descriptionsFeature.querySelector(
        ".descriptions-feature-item-2"
      ).innerText = descriptions[i].des2;
      descriptionsFeature.classList.remove("fade-out");
    }, 250);
  });
});
