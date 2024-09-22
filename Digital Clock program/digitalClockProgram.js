function digitalClockProgram() {
    const date = new Date();
    let hour = date.getHours()
    let westTime = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    document.getElementById('clock').textContent = `${hour}:${minute}:${second} ${westTime}`
}

digitalClockProgram();
setInterval(digitalClockProgram, 1000);