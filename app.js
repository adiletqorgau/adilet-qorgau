const phone = "77789980315";

const documents = [
  { title: "Срок исковой давности", category: "МФО, банки, коллекторы", url: "documents/mfo/srok-iskovoy-davnosti.html", tags: ["мфо", "банк", "долг", "срок", "исковая давность"] },
  { title: "Отмена исполнительной надписи", category: "МФО, банки, коллекторы", url: "documents/mfo/otmena-ispolnitelnoy-nadpisi.html", tags: ["мфо", "нотариус", "исполнительная надпись"] },
  { title: "Отмена заочного решения суда", category: "МФО, банки, коллекторы", url: "documents/mfo/otmena-zaochnogo-resheniya.html", tags: ["суд", "заочное решение", "мфо"] },
  { title: "Снижение неустойки", category: "МФО, банки, коллекторы", url: "documents/mfo/snizhenie-neustoyki.html", tags: ["неустойка", "пеня", "кредит", "займ"] },
  { title: "Восстановление срока", category: "МФО, банки, коллекторы", url: "documents/mfo/vosstanovlenie-sroka.html", tags: ["срок", "жалоба", "возражение"] },
  { title: "Рассрочка исполнения решения суда", category: "МФО, банки, коллекторы", url: "documents/mfo/rassrochka-resheniya-suda.html", tags: ["рассрочка", "отсрочка", "суд"] },
  { title: "Жалоба на коллекторов", category: "МФО, банки, коллекторы", url: "documents/mfo/zhaloba-na-kollektorov.html", tags: ["коллекторы", "жалоба", "мфо"] },

  { title: "Снятие ареста", category: "ЧСИ и исполнительное производство", url: "documents/chsi/snyatie-aresta.html", tags: ["чси", "арест", "счет"] },
  { title: "Снятие запрета на выезд", category: "ЧСИ и исполнительное производство", url: "documents/chsi/snyatie-zapreta-na-vyezd.html", tags: ["чси", "выезд", "запрет"] },
  { title: "Жалоба на ЧСИ", category: "ЧСИ и исполнительное производство", url: "documents/chsi/zhaloba-na-chsi.html", tags: ["чси", "жалоба", "исполнитель"] },
  { title: "Приостановление исполнительного производства", category: "ЧСИ и исполнительное производство", url: "documents/chsi/priostanovlenie-ispolnitelnogo-proizvodstva.html", tags: ["чси", "приостановление"] },
  { title: "Прекращение исполнительного производства", category: "ЧСИ и исполнительное производство", url: "documents/chsi/prekrashchenie-ispolnitelnogo-proizvodstva.html", tags: ["чси", "прекращение"] },
  { title: "Рассрочка или отсрочка исполнения", category: "ЧСИ и исполнительное производство", url: "documents/chsi/rassrochka-otsrochka-ispolneniya.html", tags: ["рассрочка", "отсрочка", "чси"] },
  { title: "Возврат исполнительного документа", category: "ЧСИ и исполнительное производство", url: "documents/chsi/vozvrat-ispolnitelnogo-dokumenta.html", tags: ["возврат", "исполнительный документ"] },
  { title: "Обжалование оценки имущества", category: "ЧСИ и исполнительное производство", url: "documents/chsi/obzhalovanie-ocenki-imushestva.html", tags: ["оценка", "имущество", "чси"] },
  { title: "Банкротство физических лиц при исполнительном производстве", category: "ЧСИ и исполнительное производство", url: "documents/chsi/bankrotstvo-fizicheskih-lic.html", tags: ["банкротство", "чси", "долг"] },

  { title: "Внесудебное банкротство", category: "Банкротство физических лиц", url: "documents/bankrotstvo/vnesudebnoe-bankrotstvo.html", tags: ["банкротство", "внесудебное"] },
  { title: "Восстановление платежеспособности", category: "Банкротство физических лиц", url: "documents/bankrotstvo/vosstanovlenie-platezhesposobnosti.html", tags: ["банкротство", "платежеспособность"] },
  { title: "Жалоба на отказ по банкротству", category: "Банкротство физических лиц", url: "documents/bankrotstvo/zhaloba-na-otkaz.html", tags: ["банкротство", "отказ", "жалоба"] },

  { title: "Восстановление срока принятия наследства", category: "Наследственные дела", url: "documents/nasledstvo/vosstanovlenie-sroka-nasledstva.html", tags: ["наследство", "срок"] },
  { title: "Принятие наследства", category: "Наследственные дела", url: "documents/nasledstvo/prinyatie-nasledstva.html", tags: ["наследство", "принятие"] },
  { title: "Включение имущества в наследственную массу", category: "Наследственные дела", url: "documents/nasledstvo/vklyuchenie-imushchestva.html", tags: ["наследство", "имущество"] },
  { title: "Обязательная доля в наследстве", category: "Наследственные дела", url: "documents/nasledstvo/obyazatelnaya-dolya.html", tags: ["наследство", "доля"] },
  { title: "Оспаривание наследства", category: "Наследственные дела", url: "documents/nasledstvo/osparivanie-nasledstva.html", tags: ["наследство", "оспаривание"] },
  { title: "Оспаривание свидетельства о наследстве", category: "Наследственные дела", url: "documents/nasledstvo/osparivanie-svidetelstva.html", tags: ["наследство", "свидетельство"] },
  { title: "Признание права собственности в порядке наследования", category: "Наследственные дела", url: "documents/nasledstvo/pravo-sobstvennosti-nasledstvo.html", tags: ["наследство", "собственность"] },

  { title: "Расторжение брака", category: "Семейные споры", url: "documents/family/rastorzhenie-braka.html", tags: ["развод", "брак"] },
  { title: "Взыскание алиментов", category: "Семейные споры", url: "documents/family/vzyskanie-alimentov.html", tags: ["алименты", "ребенок"] },
  { title: "Увеличение размера алиментов", category: "Семейные споры", url: "documents/family/uvelichenie-razmera-alimentov.html", tags: ["алименты", "увеличение"] },
  { title: "Уменьшение размера алиментов", category: "Семейные споры", url: "documents/family/umenshenie-razmera-alimentov.html", tags: ["алименты", "уменьшение"] },
  { title: "Раздел имущества", category: "Семейные споры", url: "documents/family/razdel-imushestva.html", tags: ["раздел", "имущество", "супруги"] },
  { title: "Споры о детях", category: "Семейные споры", url: "documents/family/deti.html", tags: ["дети", "ребенок", "семья"] },
  { title: "Установление отцовства", category: "Семейные споры", url: "documents/family/ustanovlenie-otcovstva.html", tags: ["отцовство", "семья"] },
  { title: "Оспаривание отцовства", category: "Семейные споры", url: "documents/family/osparivanie-otcovstva.html", tags: ["отцовство", "оспаривание"] },
  { title: "Лишение родительских прав", category: "Семейные споры", url: "documents/family/lishenie-roditelskih-prav.html", tags: ["родительские права", "дети"] },

  { title: "Взыскание ущерба после ДТП", category: "ДТП, ущерб, моральный вред", url: "documents/dtp/vzyskanie-ushcherba-posle-dtp.html", tags: ["дтп", "ущерб"] },
  { title: "Страховые выплаты", category: "ДТП, ущерб, моральный вред", url: "documents/dtp/strahovye-vyplaty.html", tags: ["страховка", "выплаты", "дтп"] },
  { title: "Претензия виновнику ДТП", category: "ДТП, ущерб, моральный вред", url: "documents/dtp/pretenziya-vinovniku-dtp.html", tags: ["дтп", "претензия"] },
  { title: "Моральный вред", category: "ДТП, ущерб, моральный вред", url: "documents/dtp/moralniy-vred.html", tags: ["моральный вред", "ущерб"] },

  { title: "Незаконное увольнение", category: "Трудовые споры", url: "documents/trud/nezakonnoe-uvolnenie.html", tags: ["увольнение", "работа"] },
  { title: "Восстановление на работе", category: "Трудовые споры", url: "documents/trud/vosstanovlenie-na-rabote.html", tags: ["работа", "восстановление"] },
  { title: "Взыскание заработной платы", category: "Трудовые споры", url: "documents/trud/vzyskanie-zarabotnoy-platy.html", tags: ["зарплата", "работодатель"] },
  { title: "Компенсации и выплаты", category: "Трудовые споры", url: "documents/trud/kompensacii-i-vyplaty.html", tags: ["компенсация", "выплаты"] },
  { title: "Жалоба на работодателя в инспекцию труда", category: "Трудовые споры", url: "documents/trud/zhaloba-rabotodatelyu-v-inspekciyu-truda.html", tags: ["жалоба", "работодатель", "инспекция"] },

  { title: "Жалоба в прокуратуру", category: "Административные жалобы", url: "documents/admin/zhaloba-v-prokuraturu.html", tags: ["прокуратура", "жалоба"] },
  { title: "Жалоба в полицию", category: "Административные жалобы", url: "documents/admin/zhaloba-v-policiyu.html", tags: ["полиция", "жалоба"] },
  { title: "Жалоба в Антикор", category: "Административные жалобы", url: "documents/admin/zhaloba-v-antikor.html", tags: ["антикор", "жалоба"] },
  { title: "Жалоба на судью", category: "Административные жалобы", url: "documents/admin/zhaloba-na-sudyu.html", tags: ["судья", "жалоба"] },
  { title: "Жалоба на госорганы", category: "Административные жалобы", url: "documents/admin/zhaloba-na-gosorgany.html", tags: ["госорган", "жалоба"] },

  { title: "Апелляционная жалоба", category: "Апелляции и кассации", url: "documents/appeal/apellyacionnaya-zhaloba.html", tags: ["апелляция", "жалоба", "суд"] },
  { title: "Кассационная жалоба", category: "Апелляции и кассации", url: "documents/appeal/kassacionnaya-zhaloba.html", tags: ["кассация", "жалоба", "суд"] },
  { title: "Частная жалоба", category: "Апелляции и кассации", url: "documents/appeal/chastnaya-zhaloba.html", tags: ["частная жалоба", "суд"] },
  { title: "Восстановление процессуального срока", category: "Апелляции и кассации", url: "documents/appeal/vosstanovlenie-processualnogo-sroka.html", tags: ["срок", "процессуальный"] },
  { title: "Возражение на апелляционную жалобу", category: "Апелляции и кассации", url: "documents/appeal/vozrazhenie-na-apellyacionnuyu-zhalobu.html", tags: ["возражение", "апелляция"] },

  { title: "Отмена исполнительной надписи нотариуса", category: "Нотариус и исполнительные надписи", url: "documents/notary/otmena-ispolnitelnoy-nadpisi.html", tags: ["нотариус", "исполнительная надпись", "отмена"] },
  { title: "Возражение против исполнительной надписи", category: "Нотариус и исполнительные надписи", url: "documents/notary/vozrazhenie-protiv-ispolnitelnoy-nadpisi.html", tags: ["нотариус", "возражение"] },
  { title: "Снятие ареста после отмены исполнительной надписи", category: "Нотариус и исполнительные надписи", url: "documents/notary/snyatie-aresta-posle-otmeny-in.html", tags: ["арест", "нотариус"] },
  { title: "Жалоба на нотариуса", category: "Нотариус и исполнительные надписи", url: "documents/notary/zhaloba-na-notariusa.html", tags: ["нотариус", "жалоба"] },
  { title: "Жалоба в нотариальную палату", category: "Нотариус и исполнительные надписи", url: "documents/notary/zhaloba-v-notarialnuyu-palatu.html", tags: ["нотариальная палата", "жалоба"] }
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
  const grouped = categories
    .filter((category) => category !== "Все")
    .map((category) => ({
      category,
      items: items.filter((item) => item.category === category)
    }))
    .filter((group) => group.items.length > 0);

  documentGrid.innerHTML = grouped
    .map((group, index) => {
      const open = state.query || index === 0 ? "open" : "";
      const rows = group.items
        .map((item) => {
          return `
            <li class="document-row">
              <a class="document-title" href="${item.url}">${item.title}</a>
              <div class="document-actions">
                <a class="text-link" href="${item.url}">Подробнее</a>
                <a class="buy-link" href="${orderLink(item.title)}" target="_blank" rel="noopener">Купить</a>
              </div>
            </li>
          `;
        })
        .join("");

      return `
        <details class="catalog-folder" ${open}>
          <summary>
            <span class="folder-title">${group.category}</span>
            <span class="folder-count">${group.items.length}</span>
          </summary>
          <ul class="folder-documents">
            ${rows}
          </ul>
        </details>
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
