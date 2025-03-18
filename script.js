let devs = []
const form = document.getElementById("devForm");
const btnTech = document.getElementById("addTech");
const techContainer = document.getElementById("technology");

btnTech.addEventListener('click', function () {
    let div = document.createElement("div");
    div.classList.add("technology");

    let inpTech = document.createElement("input");
    inpTech.type = "text";
    inpTech.placeholder = "Nome Tecnologia";
    inpTech.required = true;

    let radios = document.createElement("div");
    let exp = ["0-2 anos", "3-4 anos", "5+ anos"];

    for (let i = 0; i < exp.length; i++) {
        let label = document.createElement("label");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `experiencia-${techContainer.children.length}`;
        radio.value = exp[i];
        radio.required = true;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(exp[i]));
        radios.appendChild(label);
    };

    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Remover";
    btnRemove.type = "button"
    btnRemove.onclick = function () {
        techContainer.removeChild(div);
    };

    div.appendChild(inpTech);
    div.appendChild(radios);
    div.appendChild(btnRemove);
    techContainer.appendChild(div);

});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let technology = [];
    let techDivs = document.getElementsByClassName("technology")

    for (let i = 0; i < techDivs.length; i++) {
        let nameTech = techDivs[i].children[0].value;
        let radios = techDivs[i].children[1].getElementsByTagName("input");

        let experience = '';
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                experience = radios[i].value;
                break;
            }
        }

        if (nameTech && experience) {
            technology.push({nameTech, experience});

        }
    }

    if (name && technology.length > 0) {
        devs.push({name, technology});
        console.log(devs);
        form.reset();
        techContainer.innerHTML = "";
    } else {
        alert("Preencha todos os campos antes de cadastrar.");
    }
});