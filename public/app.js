/**
 * DevAtlas - Frontend Interaction Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  let dsaData = [];
  let cheatsData = {};

  // 1. Fetch Stats & Populate
  fetch("/api/stats")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("stat-dsa").innerText =
        `${data.algorithmsCount}+`;
      document.getElementById("stat-cheats").innerText =
        `${data.cheatsheetsCount}+`;
    })
    .catch((err) => console.error("Failed to load stats:", err));

  // 2. Fetch DSA Catalog
  fetch("/api/dsa")
    .then((res) => res.json())
    .then((data) => {
      dsaData = data;
      renderDsa(dsaData);
    })
    .catch((err) => console.error("Failed to load DSA:", err));

  // 3. Fetch Cheatsheets
  fetch("/api/cheats")
    .then((res) => res.json())
    .then((data) => {
      cheatsData = data;
      renderCheats(cheatsData);
    })
    .catch((err) => console.error("Failed to load cheats:", err));

  function renderDsa(items) {
    const container = document.getElementById("dsaGrid");
    if (!items.length) {
      container.innerHTML =
        '<p style="color: var(--text-secondary)">No algorithms matched your search.</p>';
      return;
    }

    container.innerHTML = items
      .map(
        (item) => `
      <div class="item-card">
        <div class="card-badge">${item.category} • ${item.complexity}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
    `,
      )
      .join("");
  }

  function renderCheats(categories) {
    const container = document.getElementById("cheatsGrid");
    let cardsHtml = "";

    Object.entries(categories).forEach(([category, items]) => {
      items.forEach((item) => {
        let codeContent =
          item.cmd || item.pattern || `HTTP ${item.code}: ${item.name}`;
        let description = item.desc;

        cardsHtml += `
          <div class="item-card">
            <div class="card-badge">${category.toUpperCase()}</div>
            <p>${description}</p>
            <div class="code-snippet">${escapeHtml(codeContent)}</div>
          </div>
        `;
      });
    });

    container.innerHTML = cardsHtml;
  }

  // 4. Live Search Filter
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Filter DSA
    const filteredDsa = dsaData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query),
    );
    renderDsa(filteredDsa);

    // Filter Cheats
    const filteredCheats = {};
    Object.entries(cheatsData).forEach(([cat, items]) => {
      const matched = items.filter((item) => {
        const text = JSON.stringify(item).toLowerCase();
        return text.includes(query) || cat.toLowerCase().includes(query);
      });
      if (matched.length) filteredCheats[cat] = matched;
    });
    renderCheats(filteredCheats);
  });

  // 5. Benchmark Playground
  const runBtn = document.getElementById("runBenchmarkBtn");
  runBtn.addEventListener("click", async () => {
    const size = document.getElementById("arraySize").value;
    runBtn.disabled = true;
    runBtn.innerText = "⚡ Running Benchmarks...";

    // Reset UI
    document.getElementById("time-quick").innerText = "computing...";
    document.getElementById("time-merge").innerText = "computing...";
    document.getElementById("time-heap").innerText = "computing...";
    document.getElementById("bar-quick").style.width = "20%";
    document.getElementById("bar-merge").style.width = "20%";
    document.getElementById("bar-heap").style.width = "20%";

    try {
      const response = await fetch("/api/benchmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size }),
      });
      const data = await response.json();
      const res = data.results;

      const maxTime = Math.max(res.quickSort, res.mergeSort, res.heapSort, 1);

      document.getElementById("time-quick").innerText =
        `${res.quickSort.toFixed(2)} ms`;
      document.getElementById("time-merge").innerText =
        `${res.mergeSort.toFixed(2)} ms`;
      document.getElementById("time-heap").innerText =
        `${res.heapSort.toFixed(2)} ms`;

      document.getElementById("bar-quick").style.width =
        `${Math.min(100, Math.max(10, (res.quickSort / maxTime) * 100))}%`;
      document.getElementById("bar-merge").style.width =
        `${Math.min(100, Math.max(10, (res.mergeSort / maxTime) * 100))}%`;
      document.getElementById("bar-heap").style.width =
        `${Math.min(100, Math.max(10, (res.heapSort / maxTime) * 100))}%`;
    } catch (err) {
      console.error("Benchmark failed:", err);
    } finally {
      runBtn.disabled = false;
      runBtn.innerText = "▶ Run Benchmark";
    }
  });

  function escapeHtml(str) {
    return str.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[m],
    );
  }
});
