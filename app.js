const phone = "77789980315";

const documents = [
  {
    title: "Возражение на иск МФО или банка о взыскании задолженности",
    category: "МФО, банки, коллекторы",
    price: "3 000 ₸",
    tags: ["мфо", "банк", "коллекторы", "долг", "иск"]
  },
  {
    title: "Заявление о применении срока исковой давности",
    category: "МФО, банки, коллекторы",
    price: "2 500 ₸",
    tags: ["срок", "исковая давность", "долг", "мфо"]
  },
  {
    title: "Заявление об отмене заочного или упрощенного решения суда",
    category: "МФО, банки, коллекторы",
    price: "3 000 ₸",
    tags: ["заочное решение", "упрощенное решение", "суд"]
  },
  {
    title: "Заявление ЧСИ о снятии ареста с банковских счетов",
    category: "ЧСИ и исполнительное производство",
    price: "2 000 ₸",
    tags: ["чси", "арест", "счет", "исполнительное производство"]
  },
  {
    title: "Заявление ЧСИ о снятии запрета на выезд",
    category: "ЧСИ и исполнительное производство",
    price: "2 500 ₸",
    tags: ["чси", "запрет", "выезд", "граница"]
  },
  {
    title: "Жалоба на действия или бездействие частного судебного исполнителя",
    category: "ЧСИ и исполнительное производство",
    price: "3 000 ₸",
    tags: ["чси", "жалоба", "бездействие"]
  },
  {
    title: "Исковое заявление о расторжении брака",
    category: "Семейные споры",
    price: "2 000 ₸",
    tags: ["развод", "брак", "семья"]
  },
  {
    title: "Иск о взыскании алиментов на ребенка",
    category: "Семейные споры",
    price: "2 500 ₸",
    tags: ["алименты", "ребенок", "семья"]
  },
  {
    title: "Иск о разделе совместно нажитого имущества супругов",
    category: "Семейные споры",
    price: "3 000 ₸",
    tags: ["раздел имущества", "супруги", "семья"]
  },
  {
    title: "Иск об определении места жительства ребенка",
    category: "Семейные споры",
    price: "3 000 ₸",
    tags: ["ребенок", "место жительства", "семья"]
  },
  {
    title: "Иск об установлении порядка общения с ребенком",
    category: "Семейные споры",
    price: "3 000 ₸",
    tags: ["ребенок", "общение", "семья"]
  },
  {
    title: "Документы по банкротству физических лиц",
    category: "Банкротство физических лиц",
    price: "по запросу",
    tags: ["банкротство", "физические лица", "долг"]
  },
  {
    title: "Документы по наследственным делам",
    category: "Наследственные дела",
    price: "по запросу",
    tags: ["наследство", "нотариус", "имущество"]
  },
  {
    title: "Документы по ДТП, ущербу и моральному вреду",
    category: "ДТП, ущерб, моральный вред",
    price: "по запросу",
    tags: ["дтп", "ущерб", "моральный вред"]
  },
  {
    title: "Документы по трудовым спорам",
    category: "Трудовые споры",
    price: "по запросу",
    tags: ["работа", "труд", "увольнение", "зарплата"]
  },
  {
    title: "Административная жалоба",
    category: "Административные жалобы",
    price: "по запросу",
    tags: ["административная жалоба", "госорган", "обращение"]
  },
  {
    title: "Апелляционная или кассационная жалоба",
    category: "Апелляции и кассации",
    price: "по запросу",
    tags: ["апелляция", "кассация", "жалоба", "суд"]
  },
  {
    title: "Заявление по исполнительной надписи нотариуса",
    category: "Нотариус и исполнительные надписи",
    price: "по запросу",
    tags: ["нотариус", "исполнительная надпись", "отмена"]
  }
];

const state = {
  category: "Все",
  query: ""
};

const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelector("#filterButtons");
const documentGrid = document.querySelector("#documentGrid");
const catalogSummary = document.querySelector("#catalogSummary");
const emptyState = document.querySelector("#emptyState");
const applicationForm = document.querySelector("#applicationForm");
const formNote = document.querySelector("#formNote");

const categories = ["Все", ...new Set(documents.map((item) => item.category))];

function orderLink(title) {
  const message = `Здравствуйте! Хочу заказать документ: ${title}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function matchesQuery(item, query) {
  if (!query) {
    return true;
  }

  const haystack = [item.title, item.category, ...item.tags].join(" ").toLowerCase();
  return haystack.includes(query);
}

function filteredDocuments() {
  const query = normalize(state.query);
  return documents.filter((item) => {
    const categoryMatch = state.category === "Все" || item.category === state.category;
    return categoryMatch && matchesQuery(item, query);
  });
}

function renderFilters() {
  filterButtons.innerHTML = categories
    .map((category) => {
      const pressed = category === state.category ? "true" : "false";
      return `<button type="button" data-category="${category}" aria-pressed="${pressed}">${category}</button>`;
    })
    .join("");
}

function renderDocuments() {
  const items = filteredDocuments();

  documentGrid.innerHTML = items
    .map((item) => {
      return `
        <article class="document-card">
          <span class="category">${item.category}</span>
          <h3>${item.title}</h3>
          <div class="document-meta">
            <span class="price">${item.price}</span>
            <a class="buy-link" href="${orderLink(item.title)}" target="_blank" rel="noopener">Заказать</a>
          </div>
        </article>
      `;
    })
    .join("");

  catalogSummary.textContent = `Найдено: ${items.length} из ${documents.length}`;
  emptyState.hidden = items.length > 0;
}

function render() {
  renderFilters();
  renderDocuments();
}

filterButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderDocuments();
});

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#clientName").value.trim();
  const clientPhone = document.querySelector("#clientPhone").value.trim();
  const problem = document.querySelector("#clientProblem").value.trim();

  if (!name || !clientPhone || !problem) {
    formNote.textContent = "Заполните имя, телефон и описание проблемы.";
    return;
  }

  formNote.textContent = "";

  const message = [
    "Здравствуйте! Хочу оставить заявку.",
    "",
    `Имя: ${name}`,
    `Телефон: ${clientPhone}`,
    `Проблема: ${problem}`
  ].join("\n");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

render();
