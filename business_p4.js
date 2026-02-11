// ==========================================
// BUSINESS PAPER 4 STORAGE & GENERATOR
// ==========================================

// === 1. ADD DATA TO THE GLOBAL AI ENGINE ===
Object.assign(paperData, {
    
    // --- 2024 FEB / MARCH SERIES ---
    '2024_fm_42': { 
        title: "Clothing Company (CC)", 
        pdf: "9609_m24_qp_42.pdf", 
        questions: [
            { n:'1', m:20, t:"Evaluate the effectiveness of CC's marketing strategy between 2010 and 2020.", l:'400-600'},
            { n:'2', m:20, t:"Advise CC on an operations strategy to enable its future survival and growth.", l:'400-600'}
        ] 
    },

    // --- 2025 FEB / MARCH SERIES ---
    '2025_fm_42': { 
        title: "Daniel & Carl for Education (DCE)", 
        pdf: "9609_m25_qp_42.pdf", 
        questions: [
            { n:'1', m:20, t:"Evaluate DCE's marketing strategy between 2019 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise Daniel on the importance of transformational leadership to ensure the survival of DCE.", l:'400-600'}
        ] 
    },

    // --- 2025 MAY / JUNE SERIES ---
    '2025_mj_41': { 
        title: "Riki's Restaurant (RR)", 
        pdf: "9609_s25_qp_41.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate the impact of Chelsea's HR strategy on RR's performance between 2021 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise Mario on the most appropriate approach he should use to develop a new business strategy to improve the performance of RR against its competitors.", l:'400-600'}
        ] 
    },
    '2025_mj_42': { 
        title: "Questions Answered (QA)", 
        pdf: "9609_s25_qp_42.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate the usefulness to QA of the approaches used to develop its business strategy between 2021 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise QA on a coordinated marketing strategy for the future success of QA2.", l:'400-600'}
        ] 
    },
    '2025_mj_43': { 
        title: "City-top Honey (CH)", 
        pdf: "9609_s25_qp_43.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate how significant Enterprise Resource Planning (ERP) was to CH's operations strategy between 2019 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise CH on the best approach to develop a future business strategy.", l:'400-600'}
        ] 
    },

    // --- 2025 OCT / NOV SERIES ---
    '2025_on_41': { 
        title: "Fashion Market (FM)", 
        pdf: "9609_w25_qp_41.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate FM's marketing strategy between 2021 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise FM's directors whether blue ocean strategy is the best approach to develop a future business strategy.", l:'400-600'}
        ] 
    },
    '2025_on_42': { 
        title: "Kelp Kings (KK)", 
        pdf: "9609_w25_qp_42.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate the effectiveness of KK's operations strategy between 2020 and 2024.", l:'400-600'},
            { n:'2', m:20, t:"Advise KK on the likely impact of the new government's policies on its future business strategies.", l:'400-600'}
        ] 
    },
    '2025_on_43': { 
        title: "Sarah's Headsets (SH)", 
        pdf: "9609_w25_qp_43.pdf",
        questions: [
            { n:'1', m:20, t:"Evaluate the effectiveness of SH's marketing strategy between 2017 and 2025.", l:'400-600'},
            { n:'2', m:20, t:"Advise Sarah on whether PEST analysis is the most useful approach for SH in developing a new business strategy.", l:'400-600'}
        ] 
    }
});

// === 2. THE VISUAL CARDS ===
const busP4Cards = `
    <div style="text-align:center; margin-bottom:30px;">
        <h2 style="font-size:2rem; color:var(--lime-dark); font-family:'Playfair Display', serif;">💼 Business: Paper 4</h2>
        <p style="color:#666;">Business Strategy</p>
    </div>

    <div class="series-header"><div class="year-big">2024</div><div class="series-name">Feb / March Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('2024_fm_42')">
            <span class="paper-tag">9609/42</span>
            <h3>Clothing Company (CC)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>
    
    <div class="series-header"><div class="year-big">2025</div><div class="series-name">Feb / March Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('2025_fm_42')">
            <span class="paper-tag">9609/42</span>
            <h3>Daniel & Carl for Education (DCE)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>

    <div class="series-header"><div class="year-big">2025</div><div class="series-name">May / June Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('2025_mj_41')">
            <span class="paper-tag">9609/41</span>
            <h3>Riki's Restaurant (RR)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('2025_mj_42')">
            <span class="paper-tag">9609/42</span>
            <h3>Questions Answered (QA)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('2025_mj_43')">
            <span class="paper-tag">9609/43</span>
            <h3>City-top Honey (CH)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>

    <div class="series-header"><div class="year-big">2025</div><div class="series-name">Oct / Nov Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('2025_on_41')">
            <span class="paper-tag">9609/41</span>
            <h3>Fashion Market (FM)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('2025_on_42')">
            <span class="paper-tag">9609/42</span>
            <h3>Kelp Kings (KK)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
        <div class="paper-card" onclick="openPaper('2025_on_43')">
            <span class="paper-tag">9609/43</span>
            <h3>Sarah's Headsets (SH)</h3>
            <p style="color:#888; margin-top:5px;">Paper 4 • PDF Available</p>
        </div>
    </div>
`;

// === 3. INJECT INTO INDEX.HTML AUTOMATICALLY ===
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container-bus-p4');
    if (container) {
        container.innerHTML = busP4Cards;
    }
});