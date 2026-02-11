// === 1. ADD DATA TO THE GLOBAL AI ENGINE ===
// By using Object.assign, we add these to the existing paperData without deleting Paper 3!
Object.assign(paperData, {
    '2024_mj_41': { 
        title: "Global Logistics (GL)", 
        pdf: "9609_s24_qp_41.pdf", 
        questions: [
            { n:'1', m:20, t:'Evaluate strategic options for GL.', l:'400-500'},
            { n:'2', m:20, t:'Recommend a new organisational structure.', l:'400-500'}
        ] 
    }
});

// === 2. THE VISUAL CARDS ===
const busP4Cards = `
    <div style="text-align:center; margin-bottom:30px;">
        <h2 style="font-size:2rem; color:var(--lime-dark); font-family:'Playfair Display', serif;">💼 Business: Paper 4</h2>
        <p style="color:#666;">Business Strategy</p>
    </div>
    
    <div class="series-header"><div class="year-big">2024</div><div class="series-name">May / June Series</div></div>
    <div class="papers-grid">
        <div class="paper-card" onclick="openPaper('2024_mj_41')">
            <span class="paper-tag">9609/41</span>
            <h3>Global Logistics (GL)</h3>
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