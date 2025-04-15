const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

function renderCards() {
const row = document.querySelector(".row");
row.innerHTML = "";

teamMembers.forEach(member => {
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-xl-4";
  
  col.innerHTML = `
    <div class="card bg-dark text-white h-100">
      <div class="row h-100">
        <div class="col-4">
          <img src="${member.img}" class="card-img h-100" alt="${member.name}">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title fw-bold text-uppercase">${member.name}</h5>
            <p class="card-text">${member.role}</p>
            <p class="card-text text-info">${member.email}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  row.appendChild(col);
});
}
renderCards();


document.getElementById('addMemberButton').addEventListener('click', () => {
  const nameInput = document.getElementById('nameFormControlInput');
  const roleInput = document.getElementById('roleFormControlInput');
  const emailInput = document.getElementById('emailFormControlInput');
  const imgInput = document.getElementById('imgUrlFormControlInput');
  const newMember = {
    name: nameInput.value,
    role: roleInput.value,
    email: emailInput.value,
    img: imgInput.value
  };

  teamMembers.push(newMember);
  renderCards();

  nameInput.value = '';
  roleInput.value = '';
  emailInput.value = '';
  imgInput.value = '';
});