let puertaAbierta = false;
let bombaEncendida = false;
let estadoAnterior = "NORMAL"; 

const ctx = document.getElementById('sensorChart').getContext('2d');
const sensorChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            { label: 'Temperatura (°C)', borderColor: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.1)', data: [], borderWidth: 2, tension: 0.4, fill: true, yAxisID: 'y' },
            { label: 'Humo (ppm)', borderColor: '#C084FC', backgroundColor: 'rgba(192, 132, 252, 0.1)', data: [], borderWidth: 2, tension: 0.4, fill: true, yAxisID: 'y1' }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94A3B8', font: { family: 'Poppins' } } } },
        scales: {
            x: { ticks: { color: '#64748B' }, grid: { color: '#1E293B' } },
            y: { type: 'linear', display: true, position: 'left', ticks: { color: '#38BDF8' }, grid: { color: '#1E293B' } },
            y1: { type: 'linear', display: true, position: 'right', ticks: { color: '#C084FC' }, grid: { drawOnChartArea: false } }
        }
    }
});

function addEventLog(mensaje, tipo = "info") {
    const logContainer = document.getElementById('eventLog');
    const timeString = new Date().toLocaleTimeString();
    const logElement = document.createElement('div');
    logElement.className = `log-item log-${tipo}`;
    logElement.innerHTML = `<span class="log-time">[${timeString}]</span><span class="log-msg">${mensaje}</span>`;
    logContainer.prepend(logElement);
    if (logContainer.children.length > 30) logContainer.removeChild(logContainer.lastChild);
}

addEventLog("Sistema iniciado. Monitoreo activado.", "info");

function togglePuerta() {
    puertaAbierta = !puertaAbierta;
    const btn = document.getElementById('btnPuerta');
    if (puertaAbierta) {
        btn.className = 'btn btn-on'; btn.innerHTML = '<i class="fa-solid fa-door-open"></i> Abierta';
        addEventLog("Puerta abierta manualmente.", "warning");
    } else {
        btn.className = 'btn btn-off'; btn.innerHTML = '<i class="fa-solid fa-door-closed"></i> Cerrada';
        addEventLog("Puerta cerrada.", "info");
    }
}

function toggleBomba() {
    bombaEncendida = !bombaEncendida;
    const btn = document.getElementById('btnBomba');
    if (bombaEncendida) {
        btn.className = 'btn btn-on'; btn.innerHTML = '<i class="fa-solid fa-water"></i> Activado';
        addEventLog("Aspersor activado manualmente.", "warning");
    } else {
        btn.className = 'btn btn-off'; btn.innerHTML = '<i class="fa-solid fa-faucet-drip"></i> Apagado';
        addEventLog("Aspersor desactivado.", "info");
    }
}

setInterval(() => {
    let temp = (Math.random() * (45 - 20) + 20).toFixed(1);
    let hum = Math.floor(Math.random() * (60 - 30) + 30);
    let humo = Math.floor(Math.random() * 400); 
    let flamaDetectada = (temp > 40 && humo > 300);

    document.getElementById('valTemp').innerText = temp;
    document.getElementById('valHum').innerText = hum;
    document.getElementById('valHumo').innerText = humo;

    const nowTime = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    sensorChart.data.labels.push(nowTime);
    sensorChart.data.datasets[0].data.push(temp);
    sensorChart.data.datasets[1].data.push(humo);
    if (sensorChart.data.labels.length > 15) {
        sensorChart.data.labels.shift(); sensorChart.data.datasets[0].data.shift(); sensorChart.data.datasets[1].data.shift();
    }
    sensorChart.update();

    const msgHumo = document.getElementById('msgHumo'); const cardHumo = document.getElementById('card-humo');
    const iconFlama = document.getElementById('iconFlama'); const msgFlama = document.getElementById('msgFlama'); const cardFlama = document.getElementById('card-flama');
    
    cardHumo.className = 'card'; cardFlama.className = 'card';

    if (humo < 100) {
        msgHumo.className = "status-indicator text-success"; msgHumo.innerHTML = '<i class="fa-solid fa-circle-check"></i> Nivel seguro';
    } else if (humo < 300) {
        msgHumo.className = "status-indicator text-warning"; msgHumo.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Precaución';
        cardHumo.classList.add('card-alert-warning');
    } else {
        msgHumo.className = "status-indicator text-danger"; msgHumo.innerHTML = '<i class="fa-solid fa-fire-circle-exclamation"></i> Humo crítico';
        cardHumo.classList.add('card-alert-danger');
    }

    if (flamaDetectada) {
        iconFlama.className = "fa-solid fa-fire flame-icon active"; msgFlama.className = "status-indicator text-danger"; msgFlama.innerText = "¡FUEGO DETECTADO!";
        cardFlama.classList.add('card-alert-danger');
    } else {
        iconFlama.className = "fa-solid fa-fire-extinguisher flame-icon"; msgFlama.className = "status-indicator text-muted mt-2"; msgFlama.innerText = "Sin presencia de llama";
    }

    const riskBadge = document.getElementById('riskBadge'); const riskIcon = document.getElementById('riskIcon'); const riskText = document.getElementById('riskText'); const cardTemp = document.getElementById('card-temp');
    let estadoActual = "NORMAL";

    if (flamaDetectada || humo >= 300) {
        estadoActual = "PELIGRO"; riskBadge.className = "risk-badge status-danger"; riskIcon.className = "fa-solid fa-triangle-exclamation"; riskText.innerText = "ALERTA CRÍTICA"; cardTemp.classList.add('card-alert-danger');
        if (!puertaAbierta) { togglePuerta(); addEventLog("Protocolo: Puerta abierta.", "danger"); }
        if (!bombaEncendida) { toggleBomba(); addEventLog("Mitigación activada.", "danger"); }
    } else if (humo > 100 || temp > 35) {
        estadoActual = "PRECAUCION"; riskBadge.className = "risk-badge status-warning"; riskIcon.className = "fa-solid fa-circle-exclamation"; riskText.innerText = "PRECAUCIÓN"; cardTemp.className = 'card card-alert-warning';
    } else {
        estadoActual = "NORMAL"; riskBadge.className = "risk-badge status-normal"; riskIcon.className = "fa-solid fa-shield-halved"; riskText.innerText = "ESTADO NORMAL"; cardTemp.className = 'card';
    }

    if (estadoActual !== estadoAnterior) {
        if (estadoActual === "PELIGRO") addEventLog(`CRÍTICO: Temp ${temp}°C, Humo ${humo}ppm.`, "danger");
        else if (estadoActual === "PRECAUCION") addEventLog(`Advertencia: Parámetros anormales.`, "warning");
        else if (estadoActual === "NORMAL") addEventLog("Condiciones seguras.", "info");
        estadoAnterior = estadoActual;
    }
}, 3000);