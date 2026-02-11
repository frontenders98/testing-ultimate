// ==========================================
// ECONOMICS PAPER 4 STORAGE & GENERATOR
// ==========================================

// === 1. ADD DATA TO THE GLOBAL AI ENGINE ===
Object.assign(paperData, {
    
    // --- 2025 FEB / MARCH SERIES ---
    'econ_2025_fm_42': { 
        title: "China's population trend", 
        pdf: "9708_m25_qp_42.pdf", 
        questions: [
            { n:'4', m:20, t:"With the help of a diagram, assess the effectiveness of government policies that might be used to reduce demand-pull inflation.", l:'400-600'},
            { n:'5', m:20, t:"With the help of a diagram, evaluate the effectiveness of the use of expenditure-switching policies to reduce a current account deficit on the balance of payments.", l:'400-600'}
        ] 
    },

    // --- 2025 OCT / NOV SERIES ---
    'econ_2025_on_41': { 
        title: "Working overseas", 
        pdf: "9708_w25_qp_41.pdf",
        questions: [
            { n:'4', m:20, t:"Evaluate the effect of a rise in the exchange rate on the achievement of the macroeconomic aims of a country.", l:'400-600'},
            { n:'5', m:20, t:"Economic growth can only occur when an economy is below full employment. Evaluate this statement.", l:'400-600'}
        ] 
    },
    'econ_2025_on_42': { 
        title: "Resources in Brazil", 
        pdf: "9708_w25_qp_42.pdf",
        questions: [
            { n:'4', m:20, t:"Evaluate the effect of a fall in the exchange rate on the achievement of the macroeconomic aims of a country.", l:'400-600'},
            { n:'5', m:20, t:"Evaluate whether the presence of multinational companies (MNCs) in low-income countries is always beneficial.", l:'400-600'}
        ] 
    },
    'econ_2025_on_43': { 
        title: "Inequality and globalisation", 
        pdf: "9708_w25_qp_43.pdf",
        questions: [
            { n:'4', m:20, t:"With the help of a diagram, evaluate the effectiveness of using monetary policy to increase the rate of economic growth in a country.", l:'400-600'},
            { n:'5', m:20, t:"'The use of tariffs is the most effective way to correct a balance of payments deficit.' With the help of a diagram, evaluate this statement.", l:'400-600'}
        ] 
    },
    'econ_2025_on_44': { 
        title: "Market Economies", 
        pdf: "9708_w25_qp_44.pdf",
        questions: [
            { n:'4', m:20, t:"A country imposes a tariff of 20% on imported goods and restricts the number of immigrants entering the country. Evaluate, with the aid of a diagram(s), the impact of these two policies on the rate of inflation in that country.", l:'400-600'},
            { n:'5', m:20, t:"Evaluate whether an increase in a government's budget deficit will always lead to economic growth.", l:'400-600'}
        ] 
    }
});

// === 2. THE VISUAL CARDS ===
const econP4Cards = `
    <div style="text-align:center; margin-bottom:30px;">
        <h2 style="font-size:2rem; color:var(--lime-dark); font-family:'Playfair Display', serif;">📈 Economics: Paper 4</h2>
        <p style="color:#666;">Data Response and Essays</p>
    </div>

    <div class="series-header"><div class="year-big">2025</div><div class="series-name">Feb / March Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('econ_2025_fm_42')">
            <span class="paper-tag">9708/42</span>
            <h3>China's population trend</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>

    <div class="series-header"><div class="year-big">2025</div><div class="series-name">Oct / Nov Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('econ_2025_on_41')">
            <span class="paper-tag">9708/41</span>
            <h3>Working overseas</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('econ_2025_on_42')">
            <span class="paper-tag">9708/42</span>
            <h3>Resources in Brazil</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('econ_2025_on_43')">
            <span class="paper-tag">9708/43</span>
            <h3>Inequality and globalisation</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('econ_2025_on_44')">
            <span class="paper-tag">9708/44</span>
            <h3>Market Economies</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>
`;

// === 3. INJECT INTO INDEX.HTML IMMEDIATELY ===
const econP4Container = document.getElementById('container-econ-p4');
if (econP4Container) {
    econP4Container.innerHTML = econP4Cards;
}