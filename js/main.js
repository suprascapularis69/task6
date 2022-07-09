let changeBtn = document.querySelector('.change-btn');

changeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active-btn');
    let priceValue = document.querySelectorAll('.price-value');
    let discount = 20;
    for (let i = 0; i < priceValue.length; i++) {
        function setPrice() {
            let defaultPrice = priceValue[i].getAttribute('data-target');
            let active = changeBtn.classList.contains('active-btn');
            let monthlyPrice = +priceValue[i].innerHTML;
            let annuallyPrice = Math.round((monthlyPrice * 12) * (1 - (discount / 100)));
            if (active) {
                priceValue[i].innerHTML = annuallyPrice;
            } else {
                priceValue[i].innerHTML = defaultPrice;
            }
        }
        setPrice();
    }
})
