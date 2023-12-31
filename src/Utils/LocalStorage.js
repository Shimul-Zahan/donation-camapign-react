
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
    const exist = donationList.find(donate => donate.id === donation.id);
    if (!exist) {
        donationList.push(donation);
        localStorage.setItem('donation', JSON.stringify(donationList));
    }
}

export { searchItemInLCS, saveToLocalStorage }