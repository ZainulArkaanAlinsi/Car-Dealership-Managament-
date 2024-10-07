class Car {
    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    }

    getFormattedPrice() {
        return `30JT`;
    }
}

const carList = [];
const carListContainer = document.getElementById('car');

document.getElementById('addButton').addEventListener('click', () => {
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    if (model && price && year) {
        const newCar = new Car(model, price, year);
        carList.push(newCar);

        updateCarList();
    } else {
        alert('masukan terlebih dahulu  ');
    }
});

function updateCarList() {
    carListContainer.innerHTML = '';

    carList.forEach((car, index) => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <span class="car-model">${car.model} ${car.year}</span>
            <span class="car-price">${car.getFormattedPrice()}</span>
        `;

        carItem.addEventListener('click', () => {
            handleCarClick(carItem, car);
        });

        carListContainer.appendChild(carItem);
    });
}

function handleCarClick(carItem, car) {
    document.querySelectorAll('.car-item').forEach(item => {
        item.classList.remove('selected');
    });

    carItem.classList.add('selected');

    alert(`kamu telah memilih : ${car.model} (${car.year})`);
}