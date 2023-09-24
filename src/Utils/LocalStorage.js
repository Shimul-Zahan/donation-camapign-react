
const searchItemInLCS = () => {
    const donation = localStorage.getItem('donation');
    if (donation) {
        return JSON.parse(donation);
    } else {
        return [];
    }
}

const saveToLocalStorage = donation => {
    const donationList = searchItemInLCS();
    donationList.push(donation);
    localStorage.setItem('donation', JSON.stringify(donationList));
}

export { searchItemInLCS, saveToLocalStorage }