function checkForSpam(message) {
    let lowerMassage = message.toLowerCase();
    return (lowerMassage.includes("spam") || lowerMassage.includes("sale"));
}