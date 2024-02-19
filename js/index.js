// CLOSE-NAV
document.querySelectorAll(".closeNav").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("nav-mb-input").checked = false;
  });
});

// TABS-FEATURE
const descriptions = [
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
const tabs = document.querySelectorAll(".tab");
const descriptionsFeature = document.querySelector(".descriptions-feature");
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

// TOASTS
const btnDownload = document.querySelectorAll(".btn-download");
const btnDownloadFeature = document.querySelector(".btn-download-feature");
const toastList = document.querySelector(".toasts");
btnDownload.forEach((btn) => {
  btn.addEventListener("click", () => {
    createToast("download");
  });
});
btnDownloadFeature.addEventListener("click", () => {
  createToast("download-feature");
});
const createToast = (status) => {
  let templateInner = ``;
  switch (status) {
    case "download":
      templateInner = `<span>Download sucess!</span>`;
      break;
    case "send-message":
      templateInner = `<span>Send message sucess!</span>`;
      break;
    case "get-started":
      templateInner = `<span>Get started sucess!</span>`;
      break;
    case "download-feature":
      templateInner = `<span>Download sucess!</span>`;
      break;
    case "error":
      templateInner = `<span>Please fill in all fields!</span>`;
      break;
    default:
      break;
  }
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
                      <span class="countdown"></span>`;
  toastList.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "hide_massage ease 2s forwards";
    toast.style.animation = "hide_massage_mobile ease 2s forwards";
  }, 4500);
  setTimeout(() => {
    toast.remove();
  }, 6500);
};

// SUBMIT-FORM
const btnForm = document.querySelector(".btn-form");
const btnSend = document.querySelector(".btn-send-contact-us");
const handleSubmition = (typeSubmit) => {
  if (typeSubmit === "get-started") {
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    if (!nameInput || !emailInput || !passwordInput) {
      createToast("error");
    } else {
      createToast("get-started");
    }
  } else if (typeSubmit === "send-message") {
    var nameInput = document.getElementById("name-contact").value;
    var emailInput = document.getElementById("email-contact").value;
    var passwordInput = document.getElementById("password-contact").value;
    var messageInput = document.getElementById("message-contact").value;
    if (!nameInput || !emailInput || !passwordInput || !messageInput) {
      createToast("error");
    } else {
      createToast("send-message");
    }
  }
};
btnForm.addEventListener("click", () => {
  handleSubmition("get-started");
});
btnSend.addEventListener("click", () => {
  handleSubmition("send-message");
});
