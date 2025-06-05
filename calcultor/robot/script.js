

//rotbotItems.js
const robotItems = [
    { desc: 'Motor', img: 'motor1.png',qty: 1},
    { desc: 'Motor Driver', img: 'robot2.jpg', qty: 1},
    { desc: 'IMU', img: 'robot1.jpg', qty: 1 },
    { desc: 'Lidar', img: 'robot2.jpg', qty: 1  },
    { desc: 'Motherboard', img: 'robot1.jpg', qty: 1  },
    { desc: 'Powersupply', img: 'robot2.jpg', qty: 1  },
    { desc: 'Micro Controller', img: 'robot1.jpg', qty: 1  },
    { desc: 'Software System', img: 'robot2.jpg', qty: 1  },
    { desc: 'Caster Wheel', img: 'robot1.jpg', qty: 1  },
    { desc: 'Camera', img: 'robot2.jpg', qty: 1 },
    { desc: 'Robot Design', img: 'robot1.jpg', qty: 1}
];

 

// Add motorTypes
const motorTypes = [
    { name: "Motor 1", img: "images/motor1.png", desc: "High torque motor for heavy loads.", price: 10 },
    { name: "Motor 2", img: "images/motor2.png", desc: "Medium speed, general purpose motor.", price: 20 },
    { name: "Motor 3", img: "images/motor3.png", desc: "High speed, low torque motor.", price: 30 }
];

// Add motorDriverTypes
const motorDriverTypes = [
    { name: "Motor Driver 1", img: "images/motor driver1.png", desc: "High current driver.", price: 15 },
    { name: "Motor Driver 2", img: "images/motor driver2.png", desc: "Efficient, compact driver.", price: 25 },
    { name: "Motor Driver 3", img: "images/motor driver3.png", desc: "Driver for high speed motors.", price: 35 }
];

// Add imuTypes
const imuTypes = [
    { name: "IMU 1", img: "images/imu1.png", desc: "Basic IMU sensor.", price: 50 },
    { name: "IMU 2", img: "images/imu2.png", desc: "Advanced IMU with gyro.", price: 100 },
    { name: "IMU 3", img: "images/imu3.png", desc: "High precision IMU.", price: 200 }
];

// Add Lidar types
const lidarTypes = [
    { name: "Lidar 1", img: "images/lidar1.png", desc: "Basic Lidar sensor.", price: 500 },
    { name: "Lidar 2", img: "images/lidar2.png", desc: "Medium range Lidar.", price: 600 },
    { name: "Lidar 3", img: "images/lidar3.png", desc: "High precision Lidar.", price: 700 }
];

// Add Motherboard types
const motherboardTypes = [
    { name: "Motherboard 1", img: "images/motherboard1.png", desc: "Basic motherboard.", price: 300 },
    { name: "Motherboard 2", img: "images/motherboard2.png", desc: "Advanced motherboard.", price: 600 },
    { name: "Motherboard 3", img: "images/motherboard3.png", desc: "Industrial motherboard.", price: 400 }
];

// Add Powersupply types
const powersupplyTypes = [
    { name: "Powersupply 1", img: "images/powersupply1.png", desc: "Basic powersupply.", price: 200 },
    { name: "Powersupply 2", img: "images/powersupply2.png", desc: "Efficient powersupply.", price: 400 },
    { name: "Powersupply 3", img: "images/powersupply3.png", desc: "High capacity powersupply.", price: 800 }
];

// Add microControllerTypes
const microControllerTypes = [
    { name: "Micro Controller 1", img: "images/microcontroller1.png", desc: "Basic microcontroller.", price: 100 },
    { name: "Micro Controller 2", img: "images/microcontroller2.png", desc: "Advanced microcontroller.", price: 200 },
    { name: "Micro Controller 3", img: "images/microcontroller3.png", desc: "Industrial microcontroller.", price: 400 }
];

// Add softwareSystemTypes/home/myakaythikhaing/Downloads/robotdesign2.png

const softwareSystemTypes = [
    { name: "Software System 1", img: "images/software1.png", desc: "Basic software system.", price: 500 },
    { name: "Software System 2", img: "images/software2.png", desc: "Advanced software system.", price: 300 },
    { name: "Software System 3", img: "images/software3.png", desc: "AI-enabled software system.", price: 500 }
];

// Add casterWheelTypes
const casterWheelTypes = [
    { name: "Caster Wheel 1", img: "images/caster1.png", desc: "Standard caster wheel.", price: 50 },
    { name: "Caster Wheel 2", img: "images/caster2.png", desc: "Heavy duty caster wheel.", price: 100 },
    { name: "Caster Wheel 3", img: "images/caster3.png", desc: "Omni-directional caster wheel.", price: 200 }
];

// Add cameraTypes
const cameraTypes = [
    { name: "Camera 1", img: "images/camera1.png", desc: "Basic camera.", price: 300 },
    { name: "Camera 2", img: "images/camera2.png", desc: "HD camera.", price: 600 },
    { name: "Camera 3", img: "images/camera3.png", desc: "AI camera.", price: 1200 }
];

// Add robotDesignTypes
const robotDesignTypes = [
    { name: "Robot Design 1", img: "images/robotdesign1.png", desc: "Basic robot design.", price: 1000 },
    { name: "Robot Design 2", img: "images/robotdesign2.png", desc: "Advanced robot design.", price: 2000 },
    { name: "Robot Design 3", img: "images/robotdesign3.png", desc: "Custom robot design.", price: 3000 }
];


//render the table on page load
function renderTable() {
    
    const tbody = document.querySelector('#robotList');
    tbody.innerHTML = '';
    let grandTotal = 0;

    robotItems.forEach((item, idx) => {
        let itemCell = item.desc;
        let imgCell = `<img src="${item.img}" alt="${item.desc}" width="40" id="item-img-${idx}">`;
        let infoBox = "";
        let price = item.price;

        // Motor row
        if (item.desc === "Motor") {
            let options = motorTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
            infoBox = `
                <div id="motor-info-${idx}" style="border:2px solid #2196f3; border-radius:8px; padding:12px; margin-top:8px;">
                    <img src="${motorTypes[0].img}" alt="${motorTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
                    <div><strong>Name:</strong> ${motorTypes[0].name}</div>
                    <div><strong>Description:</strong> ${motorTypes[0].desc}</div>
             </div>
            `;
            itemCell = `
                <div>
                    <select class="motor-type-select" data-row="${idx}">
                        ${options}
                    </select>
                    ${infoBox}
                </div>
            `;
            imgCell = `<img src="${motorTypes[0].img}" alt="${motorTypes[0].name}" width="40" id="item-img-${idx}">`;
            price = motorTypes[0].price;
        }

        // Motor Driver row
        if (item.desc === "Motor Driver") {
            let options = motorDriverTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
            infoBox = `
                <div id="motor-driver-info-${idx}" style="border:2px solid #4caf50; border-radius:8px; padding:12px; margin-top:8px;">
                    <img src="${motorDriverTypes[0].img}" alt="${motorDriverTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
                    <div><strong>Name:</strong> ${motorDriverTypes[0].name}</div>
                    <div><strong>Description:</strong> ${motorDriverTypes[0].desc}</div>
                </div>
            `;
            itemCell = `
                <div>
                    <select class="motor-driver-type-select" data-row="${idx}">
                        ${options}
                    </select>
                    ${infoBox}
                </div>
            `;
             imgCell = `<img src="${motorDriverTypes[0].img}" alt="${motorDriverTypes[0].name}" width="40" id="item-img-${idx}">`;
            price = motorDriverTypes[0].price;
        }

         // IMU row
        if (item.desc === "IMU") {
            let options = imuTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
            infoBox = `
                <div id="imu-info-${idx}" style="border:2px solid #ff9800; border-radius:8px; padding:12px; margin-top:8px;">
                    <img src="${imuTypes[0].img}" alt="${imuTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
                    <div><strong>Name:</strong> ${imuTypes[0].name}</div>
                    <div><strong>Description:</strong> ${imuTypes[0].desc}</div>
                </div>
            `;
            itemCell = `
                <div>
                    <select class="imu-type-select" data-row="${idx}">
                        ${options}
                    </select>
                    ${infoBox}
                </div>
            `;
            imgCell = `<img src="${imuTypes[0].img}" alt="${imuTypes[0].name}" width="40" id="item-img-${idx}">`;
            price = imuTypes[0].price;
        }

        // Lidar row
if (item.desc === "Lidar") {
    let options = lidarTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="lidar-info-${idx}" style="border:2px solid #9c27b0; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${lidarTypes[0].img}" alt="${lidarTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${lidarTypes[0].name}</div>
            <div><strong>Description:</strong> ${lidarTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="lidar-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${lidarTypes[0].img}" alt="${lidarTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = lidarTypes[0].price;
}

// Motherboard row
if (item.desc === "Motherboard") {
    let options = motherboardTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="motherboard-info-${idx}" style="border:2px solid #607d8b; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${motherboardTypes[0].img}" alt="${motherboardTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${motherboardTypes[0].name}</div>
            <div><strong>Description:</strong> ${motherboardTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="motherboard-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${motherboardTypes[0].img}" alt="${motherboardTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = motherboardTypes[0].price;
}

// Powersupply row
if (item.desc === "Powersupply") {
    let options = powersupplyTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="powersupply-info-${idx}" style="border:2px solid #795548; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${powersupplyTypes[0].img}" alt="${powersupplyTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${powersupplyTypes[0].name}</div>
            <div><strong>Description:</strong> ${powersupplyTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="powersupply-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${powersupplyTypes[0].img}" alt="${powersupplyTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = powersupplyTypes[0].price;
}

// Micro Controller row
if (item.desc === "Micro Controller") {
    let options = microControllerTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="microcontroller-info-${idx}" style="border:2px solid #3f51b5; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${microControllerTypes[0].img}" alt="${microControllerTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${microControllerTypes[0].name}</div>
            <div><strong>Description:</strong> ${microControllerTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="microcontroller-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${microControllerTypes[0].img}" alt="${microControllerTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = microControllerTypes[0].price;
}

// Software System row
if (item.desc === "Software System") {
    let options = softwareSystemTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="software-info-${idx}" style="border:2px solid #009688; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${softwareSystemTypes[0].img}" alt="${softwareSystemTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${softwareSystemTypes[0].name}</div>
            <div><strong>Description:</strong> ${softwareSystemTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="software-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${softwareSystemTypes[0].img}" alt="${softwareSystemTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = softwareSystemTypes[0].price;
}

// Caster Wheel row
if (item.desc === "Caster Wheel") {
    let options = casterWheelTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="caster-info-${idx}" style="border:2px solid #e91e63; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${casterWheelTypes[0].img}" alt="${casterWheelTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${casterWheelTypes[0].name}</div>
            <div><strong>Description:</strong> ${casterWheelTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="caster-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${casterWheelTypes[0].img}" alt="${casterWheelTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = casterWheelTypes[0].price;
}

// Camera row
if (item.desc === "Camera") {
    let options = cameraTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="camera-info-${idx}" style="border:2px solid #ff5722; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${cameraTypes[0].img}" alt="${cameraTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${cameraTypes[0].name}</div>
            <div><strong>Description:</strong> ${cameraTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="camera-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${cameraTypes[0].img}" alt="${cameraTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = cameraTypes[0].price;
}

// Robot Design row
if (item.desc === "Robot Design") {
    let options = robotDesignTypes.map((m, i) => `<option value="${i}">${m.name}</option>`).join('');
    infoBox = `
        <div id="robotdesign-info-${idx}" style="border:2px solid #607d8b; border-radius:8px; padding:12px; margin-top:8px;">
            <img src="${robotDesignTypes[0].img}" alt="${robotDesignTypes[0].name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${robotDesignTypes[0].name}</div>
            <div><strong>Description:</strong> ${robotDesignTypes[0].desc}</div>
        </div>
    `;
    itemCell = `
        <div>
            <select class="robotdesign-type-select" data-row="${idx}">
                ${options}
            </select>
            ${infoBox}
        </div>
    `;
    imgCell = `<img src="${robotDesignTypes[0].img}" alt="${robotDesignTypes[0].name}" width="40" id="item-img-${idx}">`;
    price = robotDesignTypes[0].price;
}


//Grand total calculation
        const qty = item.qty;
        const total = price * qty;
        grandTotal += total;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${itemCell}</td>
            <td>${imgCell}</td>
            <td>
                <input type="number" min="1" value="${qty}" data-idx="${idx}" class="qty-input" style="width:60px;">
            </td>
            <td class="price-cell" id="price-cell-${idx}">$${price.toLocaleString()}</td>
            <td class="row-total">$${total.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('totalPrice').textContent = `$${grandTotal.toLocaleString()}`;

// Qty input listeners
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('input', function() {
            const idx = parseInt(this.getAttribute('data-idx'), 10);
            let val = parseInt(this.value, 10);
            if (isNaN(val) || val < 1) val = 1;
            this.value = val;
            robotItems[idx].qty = val;

// Get correct price for Motor or Motor Driver
            let price = robotItems[idx].price;
            if (robotItems[idx].desc === "Motor") {
                const motorSelect = document.querySelector(`.motor-type-select[data-row="${idx}"]`);
                const selectedIdx = parseInt(motorSelect.value, 10);
                price = motorTypes[selectedIdx].price;
            }
            if (robotItems[idx].desc === "Motor Driver") {
                const driverSelect = document.querySelector(`.motor-driver-type-select[data-row="${idx}"]`);
                const selectedIdx = parseInt(driverSelect.value, 10);
                price = motorDriverTypes[selectedIdx].price;
            }

            document.getElementById(`price-cell-${idx}`).textContent = `$${price.toLocaleString()}`;
            this.closest('tr').querySelector('.row-total').textContent = `$${(price * val).toLocaleString()}`;
            updateGrandTotal();
        });
    });

// Motor select box listener
    document.querySelectorAll('.motor-type-select').forEach(select => {
        select.addEventListener('change', function() {
            const idx = parseInt(this.getAttribute('data-row'), 10);
            const selectedIdx = parseInt(this.value, 10);
            const selectedMotor = motorTypes[selectedIdx];
            // Update info box
            document.getElementById(`motor-info-${idx}`).innerHTML = `
                <img src="${selectedMotor.img}" alt="${selectedMotor.name}" style="width:60px; display:block; margin-bottom:8px;">
                <div><strong>Name:</strong> ${selectedMotor.name}</div>
                <div><strong>Description:</strong> ${selectedMotor.desc}</div>
            `;
            // Update image cell
                 document.getElementById(`item-img-${idx}`).src = selectedMotor.img;
            document.getElementById(`item-img-${idx}`).alt = selectedMotor.name;
            // Update price and total
            const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
            document.getElementById(`price-cell-${idx}`).textContent = `$${selectedMotor.price.toLocaleString()}`;
            document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedMotor.price * qty).toLocaleString()}`;
            robotItems[idx].price = selectedMotor.price;
            updateGrandTotal();
        });
    });

// Motor Driver select box listener
    document.querySelectorAll('.motor-driver-type-select').forEach(select => {
        select.addEventListener('change', function() {
            const idx = parseInt(this.getAttribute('data-row'), 10);
            const selectedIdx = parseInt(this.value, 10);
            const selectedDriver = motorDriverTypes[selectedIdx];
            // Update info box
            document.getElementById(`motor-driver-info-${idx}`).innerHTML = `
                <img src="${selectedDriver.img}" alt="${selectedDriver.name}" style="width:60px; display:block; margin-bottom:8px;">
                          <div><strong>Name:</strong> ${selectedDriver.name}</div>
                <div><strong>Description:</strong> ${selectedDriver.desc}</div>
            `;
            // Update image cell
            document.getElementById(`item-img-${idx}`).src = selectedDriver.img;
            document.getElementById(`item-img-${idx}`).alt = selectedDriver.name;
            // Update price and total
            const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
            document.getElementById(`price-cell-${idx}`).textContent = `$${selectedDriver.price.toLocaleString()}`;
            document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedDriver.price * qty).toLocaleString()}`;
            robotItems[idx].price = selectedDriver.price;
            updateGrandTotal();
        });
    });

// IMU select box listener
    document.querySelectorAll('.imu-type-select').forEach(select => {
        select.addEventListener('change', function() {
            const idx = parseInt(this.getAttribute('data-row'), 10);
            const selectedIdx = parseInt(this.value, 10);
            const selectedIMU = imuTypes[selectedIdx];
            // Update info box
            document.getElementById(`imu-info-${idx}`).innerHTML = `
                <img src="${selectedIMU.img}" alt="${selectedIMU.name}" style="width:60px; display:block; margin-bottom:8px;">
                <div><strong>Name:</strong> ${selectedIMU.name}</div>
                <div><strong>Description:</strong> ${selectedIMU.desc}</div>
            `;
            // Update image cell
            document.getElementById(`item-img-${idx}`).src = selectedIMU.img;
            document.getElementById(`item-img-${idx}`).alt = selectedIMU.name;
            // Update price and total
            const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
            document.getElementById(`price-cell-${idx}`).textContent = `$${selectedIMU.price.toLocaleString()}`;
            document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedIMU.price * qty).toLocaleString()}`;
            robotItems[idx].price = selectedIMU.price;
            updateGrandTotal();
        });
    });

// Lidar select box listener
    document.querySelectorAll('.lidar-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedLidar = lidarTypes[selectedIdx];
        // Update info box
        document.getElementById(`lidar-info-${idx}`).innerHTML = `
            <img src="${selectedLidar.img}" alt="${selectedLidar.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedLidar.name}</div>
            <div><strong>Description:</strong> ${selectedLidar.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedLidar.img;
        document.getElementById(`item-img-${idx}`).alt = selectedLidar.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedLidar.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedLidar.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedLidar.price;
        updateGrandTotal();
    });
});

// Add Motherboard select box listener
document.querySelectorAll('.motherboard-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedMotherboard = motherboardTypes[selectedIdx];
        // Update info box
        document.getElementById(`motherboard-info-${idx}`).innerHTML = `
            <img src="${selectedMotherboard.img}" alt="${selectedMotherboard.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedMotherboard.name}</div>
            <div><strong>Description:</strong> ${selectedMotherboard.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedMotherboard.img;
        document.getElementById(`item-img-${idx}`).alt = selectedMotherboard.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedMotherboard.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedMotherboard.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedMotherboard.price;
        updateGrandTotal();
    });
});

// Add Powersupply select box listener
document.querySelectorAll('.powersupply-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedPowersupply = powersupplyTypes[selectedIdx];
        // Update info box
        document.getElementById(`powersupply-info-${idx}`).innerHTML = `
            <img src="${selectedPowersupply.img}" alt="${selectedPowersupply.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedPowersupply.name}</div>
            <div><strong>Description:</strong> ${selectedPowersupply.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedPowersupply.img;
        document.getElementById(`item-img-${idx}`).alt = selectedPowersupply.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedPowersupply.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedPowersupply.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedPowersupply.price;
        updateGrandTotal();
    });
});

// Add Micro Controller select box listener
document.querySelectorAll('.microcontroller-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedMicro = microControllerTypes[selectedIdx];
        // Update info box
        document.getElementById(`microcontroller-info-${idx}`).innerHTML = `
            <img src="${selectedMicro.img}" alt="${selectedMicro.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedMicro.name}</div>
            <div><strong>Description:</strong> ${selectedMicro.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedMicro.img;
        document.getElementById(`item-img-${idx}`).alt = selectedMicro.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedMicro.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedMicro.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedMicro.price;
        updateGrandTotal();
    });
});

// Add Software System select box listener
document.querySelectorAll('.software-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedSoftware = softwareSystemTypes[selectedIdx];
        // Update info box
        document.getElementById(`software-info-${idx}`).innerHTML = `
            <img src="${selectedSoftware.img}" alt="${selectedSoftware.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedSoftware.name}</div>
            <div><strong>Description:</strong> ${selectedSoftware.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedSoftware.img;
        document.getElementById(`item-img-${idx}`).alt = selectedSoftware.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedSoftware.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedSoftware.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedSoftware.price;
        updateGrandTotal();
    });
});

// Add Caster Wheel select box listener
document.querySelectorAll('.caster-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedCaster = casterWheelTypes[selectedIdx];
        // Update info box
        document.getElementById(`caster-info-${idx}`).innerHTML = `
            <img src="${selectedCaster.img}" alt="${selectedCaster.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedCaster.name}</div>
            <div><strong>Description:</strong> ${selectedCaster.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedCaster.img;
        document.getElementById(`item-img-${idx}`).alt = selectedCaster.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedCaster.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedCaster.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedCaster.price;
        updateGrandTotal();
    });
});

// Add camera select box listener
document.querySelectorAll('.camera-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedCamera = cameraTypes[selectedIdx];
        // Update info box
        document.getElementById(`camera-info-${idx}`).innerHTML = `
            <img src="${selectedCamera.img}" alt="${selectedCamera.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedCamera.name}</div>
            <div><strong>Description:</strong> ${selectedCamera.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedCamera.img;
        document.getElementById(`item-img-${idx}`).alt = selectedCamera.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedCamera.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedCamera.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedCamera.price;
        updateGrandTotal();
    });
});

// Add robot design select box listener
document.querySelectorAll('.robotdesign-type-select').forEach(select => {
    select.addEventListener('change', function() {
        const idx = parseInt(this.getAttribute('data-row'), 10);
        const selectedIdx = parseInt(this.value, 10);
        const selectedDesign = robotDesignTypes[selectedIdx];
        // Update info box
        document.getElementById(`robotdesign-info-${idx}`).innerHTML = `
            <img src="${selectedDesign.img}" alt="${selectedDesign.name}" style="width:60px; display:block; margin-bottom:8px;">
            <div><strong>Name:</strong> ${selectedDesign.name}</div>
            <div><strong>Description:</strong> ${selectedDesign.desc}</div>
        `;
        // Update image cell
        document.getElementById(`item-img-${idx}`).src = selectedDesign.img;
        document.getElementById(`item-img-${idx}`).alt = selectedDesign.name;
        // Update price and total
        const qty = parseInt(document.querySelector(`.qty-input[data-idx="${idx}"]`).value, 10) || 1;
        document.getElementById(`price-cell-${idx}`).textContent = `$${selectedDesign.price.toLocaleString()}`;
        document.querySelectorAll('.row-total')[idx].textContent = `$${(selectedDesign.price * qty).toLocaleString()}`;
        robotItems[idx].price = selectedDesign.price;
        updateGrandTotal();
    });
});

}

//update grand total function
function updateGrandTotal() {
    let grandTotal = 0;
    document.querySelectorAll('.row-total').forEach(td => {
        grandTotal += parseInt(td.textContent.replace(/[^0-9]/g, ''), 10);
    });
    document.getElementById('totalPrice').textContent = `$${grandTotal.toLocaleString()}`;
}

renderTable();



