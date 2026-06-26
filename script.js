function checkPassword() {
    const input = document
        .getElementById("password")
        .value
        .trim()
        .toUpperCase();

    if (input === "ZERODAY") {
        window.location.href = "secret.html";
    } else {
        alert("틀린 암호입니다.");
    }
}
