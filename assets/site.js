(() => {
  const demo = document.querySelector('.calendar-demo');
  const count = document.querySelector('#week-count');
  const days = document.querySelector('#calendar-days');
  const today = new Date(); today.setHours(12, 0, 0, 0);
  let anchor = new Date(today);
  const addDays = (date, amount) => { const next = new Date(date); next.setDate(next.getDate() + amount); return next; };
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const format = date => `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  const iso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  function render() {
    const weeks = Number(count.value);
    const start = addDays(anchor, -anchor.getDay() - Math.floor((weeks - 1) / 2) * 7);
    const end = addDays(start, weeks * 7 - 1);
    demo.dataset.weeks = String(weeks);
    document.querySelector('#calendar-month').textContent = `${anchor.getFullYear()}년 ${anchor.getMonth() + 1}월`;
    days.replaceChildren();
    for (let n = 0; n < weeks * 7; n++) {
      const date = addDays(start, n);
      const cell = document.createElement('div'); cell.className = 'calendar-day';
      const time = document.createElement('time'); time.dateTime = iso(date); time.textContent = `${date.getMonth() + 1}.${date.getDate()}`;
      time.setAttribute('aria-label', format(date));
      if (sameDay(date, today)) { cell.classList.add('is-today'); time.setAttribute('aria-current', 'date'); }
      cell.append(time); days.append(cell);
    }
    document.querySelector('#calendar-range').textContent = `${format(start)}부터 ${format(end)}까지`;
  }
  if (demo) {
    count.addEventListener('change', render);
    document.querySelector('#previous-week').addEventListener('click', () => { anchor = addDays(anchor, -7); render(); });
    document.querySelector('#next-week').addEventListener('click', () => { anchor = addDays(anchor, 7); render(); });
    document.querySelector('#calendar-today').addEventListener('click', () => { anchor = new Date(today); render(); });
    render();
  }
  const descriptions = {
    tasks: ['날짜별 할 일과 우선순위, 떠오른 생각을 같은 화면에서 정리합니다.', '달력 옆에 날짜별 할 일과 브레인 덤프를 표시한 TaskDo 화면', 1196, 1260],
    goals: ['완료한 할 일이 목표에 얼마나 기여했는지 기록하고 진행률을 조절합니다.', '할 일을 완료하며 목표 진행률을 조절하는 화면', 1040, 600],
    memo: ['메모를 독립된 창으로 열고 Markdown, 체크리스트와 이미지를 기록합니다.', '체크리스트와 이미지를 담은 독립 메모 창', 720, 720],
    routine: ['날짜별 반복 루틴과 시각을 지정하고 실행 중 알림을 설정합니다.', '할 일의 시간, 알림과 반복 주기를 설정하는 화면', 880, 944]
  };
  const tabs = [...document.querySelectorAll('[data-screen]')];
  function selectScreen(tab, focus) {
    const name = tab.dataset.screen;
    tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; });
    const [description, alt, width, height] = descriptions[name];
    const image = document.querySelector('#feature-screen'); image.src = `assets/screens/${name}.png`; image.alt = alt; image.width = width; image.height = height;
    document.querySelector('#screen-description').textContent = description;
    document.querySelector('#screen-panel').setAttribute('aria-labelledby', tab.id);
    document.querySelector('#full-screen-link').href = image.src;
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScreen(tab, false));
    tab.addEventListener('keydown', event => {
      let next;
      if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (index + 1) % tabs.length;
      if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectScreen(tabs[next], true); }
    });
  });
})();
